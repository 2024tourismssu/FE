import { useEffect, useState } from 'react'
import Header from '@components/header/Header.tsx'
import Box from '@mui/material/Box'
import CustomCalendar from '@components/calendar/Calendar.tsx'
import CalendarButton from '@components/iconButton/CalendarButton.tsx'
import styles from './styles/FestivalPage.module.scss'

const FestivalPage = () => {
   const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768)
   const [isCalendarVisible, setIsCalendarVisible] = useState<boolean>(false) // CustomCalendar의 가시성 상태

   const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
   }

   const toggleCalendarVisibility = () => {
      setIsCalendarVisible((prev) => !prev) // 가시성 상태를 토글
   }

   useEffect(() => {
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
            {!isMobile && <CustomCalendar />}
         </Box>
      </Box>
   )
}

export default FestivalPage
