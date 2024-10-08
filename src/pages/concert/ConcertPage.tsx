import { useEffect, useState } from 'react'
import { useDateStore } from '@/stores/dateStore.ts'
import Header from '@components/header/Header.tsx'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { FormControl, InputLabel, MenuItem, Select, Skeleton } from '@mui/material'
import CustomCalendar from '@components/calendar/Calendar.tsx'
import CalendarButton from '@components/iconButton/CalendarButton.tsx'
import Weather from '@components/weather/Weather.tsx'
import PreviewColCard from '@components/card/PreviewColCard.tsx'
import PreviewRowCard from '@components/card/PreviewRowCard.tsx'
import styles from './styles/Concert.module.scss'
import Concert from '@components/concert/Concert.tsx'
import BasicPagenation from '@/components/pagenation/Pagenation'

interface FestivalItem {
   title: string
   place: string
   startDate: string
   endDate: string
   image?: string
   altText?: string
   contentId?: string
   contentTypeId?: string
}

const cityRegIds = {
   서울: '11B00000',
   대구: '11H10000',
   부산: '11H20000',
   인천: '11B00000',
   경기도: '11B00000',
   광주: '11F20000',
   대전: '11C20000',
   울산: '11H20000',
   제주: '11G00000',
} as const

type City = keyof typeof cityRegIds

const getCurrentDate = () => {
   const today = new Date()
   const year = today.getFullYear()
   const month = String(today.getMonth() + 1).padStart(2, '0')
   const day = String(today.getDate()).padStart(2, '0')
   return `${year}${month}${day}`
}

const formatDateToYYYYMMDD = (date: Date): string => {
   const year = date.getFullYear()
   const month = String(date.getMonth() + 1).padStart(2, '0')
   const day = String(date.getDate()).padStart(2, '0')
   return `${year}${month}${day}`
}

const ConcertPage = () => {
   const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768)
   const [isCalendarVisible, setIsCalendarVisible] = useState<boolean>(false)
   const [festivalData, setFestivalData] = useState<FestivalItem[]>([])
   const [loading, setLoading] = useState<boolean>(true)
   const [selectedCity, setSelectedCity] = useState<City>('서울') // 기본값: 서울로 설정, 타입은 City
   const [pageNo, setPageNo] = useState<number>(1) // 페이지 번호 상태
   const [totalPages, setTotalPages] = useState<number>(1) // 총 페이지 수 상태
   const { startDate: zustandStartDate } = useDateStore()

   const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
   }

   const toggleCalendarVisibility = () => {
      setIsCalendarVisible((prev) => !prev)
   }

   const fetchConcertData = async (eventStartDate: string, pageNo: number) => {
      setLoading(true)
      try {
         const data = await Concert(eventStartDate, pageNo)
         if (data) {
            // data가 정의된 경우만 처리
            setFestivalData(data.items || []) // data.items가 정의된 경우
            setTotalPages(data.totalPages || 1) // data.totalPages가 정의된 경우
         }
      } catch (error) {
         console.error('Error fetching festival data:', error)
      } finally {
         setLoading(false)
      }
   }

   useEffect(() => {
      const today = new Date()
      const formattedToday = formatDateToYYYYMMDD(today)

      const eventStartDate = zustandStartDate ? formatDateToYYYYMMDD(new Date(zustandStartDate)) : formattedToday

      fetchConcertData(eventStartDate, pageNo)

      window.addEventListener('resize', handleResize)
      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [zustandStartDate, pageNo])

   const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
      setPageNo(value) // 페이지 번호 변경
   }

   return (
      <Box>
         <Header />
         <Box className={styles.container}>
            {isMobile && (
               <>
                  <Box>
                     {loading
                        ? Array.from(new Array(3)).map((_, index) => <Skeleton key={index} variant="rectangular" width={700} height={340} sx={{ marginBottom: 2 }} />)
                        : festivalData.map((item, index) => (
                             <PreviewRowCard
                                key={index}
                                title={item.title}
                                place={item.place}
                                startDate={item.startDate}
                                endDate={item.endDate}
                                image={item.image}
                                altText={item.altText}
                                contentId={item.contentId}
                                contentTypeId={item.contentTypeId}
                             />
                          ))}
                  </Box>
                  {/* 오버레이 추가 및 달력 표시 */}
                  {isCalendarVisible && (
                     <>
                        <Box className={styles.overlay} onClick={toggleCalendarVisibility} /> {/* 오버레이 클릭 시 달력 닫힘 */}
                        <CustomCalendar className={styles.fixedCalendar} />
                     </>
                  )}
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
                             <PreviewColCard
                                key={index}
                                title={item.title}
                                place={item.place}
                                startDate={item.startDate}
                                endDate={item.endDate}
                                image={item.image}
                                altText={item.altText}
                                contentId={item.contentId}
                                contentTypeId={item.contentTypeId}
                             />
                          ))}
                  </Box>
                  <Box>
                     <CustomCalendar />
                     <Box className={styles.titleContainer}>
                        <Typography variant="h6" sx={{ marginBottom: 2 }}>
                           주간 날씨 예보
                        </Typography>
                        <FormControl fullWidth sx={{ marginBottom: 2, width: 100 }}>
                           <InputLabel id="city-select-label">도시 선택</InputLabel>
                           <Select
                              labelId="city-select-label"
                              value={selectedCity}
                              label="도시 선택"
                              onChange={(e) => setSelectedCity(e.target.value as City)} // 타입캐스팅을 통해 타입 안정성 보장
                           >
                              {Object.keys(cityRegIds).map((city) => (
                                 <MenuItem key={city} value={city}>
                                    {city}
                                 </MenuItem>
                              ))}
                           </Select>
                        </FormControl>
                     </Box>
                     <Weather regId={cityRegIds[selectedCity]} tmFc={getCurrentDate()} />
                  </Box>
               </Box>
            )}
            <BasicPagenation pageNo={pageNo} totalPages={totalPages} onChangePage={handlePageChange} />
         </Box>
      </Box>
   )
}

export default ConcertPage
