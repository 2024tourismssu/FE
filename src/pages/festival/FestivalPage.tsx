import { useEffect, useState } from 'react'
import Header from '@components/header/Header.tsx'
import Box from '@mui/material/Box'
import { Skeleton } from '@mui/material'
import CustomCalendar from '@components/calendar/Calendar.tsx'
import CalendarButton from '@components/iconButton/CalendarButton.tsx'
import Weather from '@components/weather/Weather.tsx'
import PreviewColCard from '@components/card/PreviewColCard.tsx'
import styles from './styles/FestivalPage.module.scss'
import Festival from '@components/festival/Festival.tsx'

interface FestivalItem {
   title: string
   place: string
   startDate: string
   endDate: string
   image?: string
   altText?: string
}

const getCurrentDate = () => {
   const today = new Date()
   const year = today.getFullYear()
   const month = String(today.getMonth() + 1).padStart(2, '0') // 월을 2자리로 변환
   const day = String(today.getDate()).padStart(2, '0') // 일을 2자리로 변환
   return `${year}${month}${day}` // YYYYMMDD 형식의 문자열 반환
}
const FestivalPage = () => {
   const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768)
   const [isCalendarVisible, setIsCalendarVisible] = useState<boolean>(false)
   const [festivalData, setFestivalData] = useState<FestivalItem[]>([])
   const [loading, setLoading] = useState<boolean>(true) // Loading state

   const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
   }

   const toggleCalendarVisibility = () => {
      setIsCalendarVisible((prev) => !prev)
   }

   const fetchFestivalData = async () => {
      setLoading(true)
      try {
         const data = await Festival()
         setFestivalData(data)
      } catch (error) {
         console.error('Error fetching festival data:', error)
      } finally {
         setLoading(false)
      }
   }

   useEffect(() => {
      fetchFestivalData()
      window.addEventListener('resize', handleResize)
      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [])

   return (
      <Box>
         <Header />
         <Box className={styles.container}>
            {isMobile && (
               <>
                  {isCalendarVisible && <CustomCalendar />}
                  <Box className={styles.calendarWrapper}>
                     <CalendarButton onClick={toggleCalendarVisibility} />
                  </Box>
               </>
            )}
            {!isMobile && (
               <Box className={styles.contentContainer}>
                  <Box className={styles.cardContainer}>
                     {loading
                        ? Array.from(new Array(3)).map((_, index) => <Skeleton key={index} variant="rectangular" width={700} height={340} sx={{ marginBottom: 2 }} />)
                        : festivalData.map((item, index) => (
                             <PreviewColCard key={index} title={item.title} place={item.place} startDate={item.startDate} endDate={item.endDate} image={item.image} altText={item.altText} />
                          ))}
                  </Box>
                  <Box>
                     <CustomCalendar />
                     <Weather regId={'11B00000'} tmFc={getCurrentDate()} />
                  </Box>
               </Box>
            )}
         </Box>
      </Box>
   )
}

export default FestivalPage
