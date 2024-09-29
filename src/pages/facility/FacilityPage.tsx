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
import Facility from '@components/facility/Facility.tsx'
import PreviewRowCard from '@components/card/PreviewRowCard.tsx'
import styles from './styles/FacilityPage.module.scss'
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
   인천: '11B00000',
   대전: '11C20000',
   대구: '11H10000',
   광주: '11F20000',
   부산: '11H20000',
   울산: '11H20000',
   제주: '11G00000',
} as const

const cityAreaCodes = {
   서울: 1,
   인천: 2,
   대전: 3,
   대구: 4,
   광주: 5,
   부산: 6,
   울산: 7,
   세종: 8,
   제주: 9,
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

const FacilityPage = () => {
   const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768)
   const [isCalendarVisible, setIsCalendarVisible] = useState<boolean>(false)
   const [festivalData, setFestivalData] = useState<FestivalItem[]>([])
   const [loading, setLoading] = useState<boolean>(true)
   const [selectedCity, setSelectedCity] = useState<City>('서울') // 기본값: 서울
   const [pageNo, setPageNo] = useState<number>(1) // 페이지 번호 상태
   const [totalPages, setTotalPages] = useState<number>(1) // 총 페이지 수 상태
   const { startDate: zustandStartDate } = useDateStore() // Zustand에서 startDate 가져오기

   const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
   }

   const toggleCalendarVisibility = () => {
      setIsCalendarVisible((prev) => !prev)
   }

   const fetchFacilityData = async (eventStartDate: string, areaCode: number, pageNo: number) => {
      setLoading(true)
      try {
         console.log(`Fetching data for area code: ${areaCode}, start date: ${eventStartDate}`)
         const data = await Facility(areaCode, pageNo) // Pass the area code to the Facility function
         setFestivalData(data.items)
         setTotalPages(data.totalPages)
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

      // Get the area code based on the selected city
      const areaCode = cityAreaCodes[selectedCity]

      fetchFacilityData(eventStartDate, areaCode, pageNo)

      window.addEventListener('resize', handleResize)
      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [zustandStartDate, selectedCity, pageNo]) // 선택된 날짜와 도시가 변경될 때마다 호출
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

export default FacilityPage
