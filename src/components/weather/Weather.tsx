import { useEffect, useState } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'
import CloudIcon from '@assets/images/weather/cloudy.svg'
import RainIcon from '@assets/images/weather/rainy-6.svg'
import SnowIcon from '@assets/images/weather/snowy-6.svg'
import SunCloudIcon from '@assets/images/weather/cloudy-day-3.svg'
import SunIcon from '@assets/images/weather/day.svg'
import ThunderIcon from '@assets/images/weather/thunder.svg'

interface WeatherProps {
   regId: string
   tmFc: string
}

interface WeatherData {
   date: string
   weather: string
   icon: string
}

const Weather = ({ regId, tmFc }: WeatherProps) => {
   const apikey = import.meta.env.VITE_API_KEY
   const url = 'http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst'
   const [weatherData, setWeatherData] = useState<WeatherData[]>([])
   const [loading, setLoading] = useState<boolean>(true)

   const fetchWeatherData = async () => {
      try {
         setLoading(true)
         const fullTmFc = `${tmFc}0600`

         const response = await axios.get(url, {
            params: {
               ServiceKey: apikey,
               numOfRows: 10,
               pageNo: 1,
               regId: regId,
               tmFc: fullTmFc,
               dataType: 'JSON',
            },
            headers: {
               Accept: 'application/json',
            },
            responseType: 'json',
         })
         console.log(response)
         const items = response.data.response.body.items.item[0]

         const weatherList: WeatherData[] = [
            { date: '월', weather: items.wf3Am, icon: getWeatherIcon(items.wf3Am) },
            { date: '화', weather: items.wf4Am, icon: getWeatherIcon(items.wf4Am) },
            { date: '수', weather: items.wf5Am, icon: getWeatherIcon(items.wf5Am) },
            { date: '목', weather: items.wf6Am, icon: getWeatherIcon(items.wf6Am) },
            { date: '금', weather: items.wf7Am, icon: getWeatherIcon(items.wf7Am) },
            { date: '토', weather: items.wf8, icon: getWeatherIcon(items.wf8) },
            { date: '일', weather: items.wf9, icon: getWeatherIcon(items.wf9) },
         ]
         setWeatherData(weatherList)
      } catch (error) {
         console.error('Error fetching the weather data', error)
      } finally {
         setLoading(false)
      }
   }

   const getWeatherIcon = (weather: string) => {
      switch (weather) {
         case '맑음':
            return SunIcon
         case '구름많음':
            return SunCloudIcon
         case '흐림':
            return CloudIcon
         case '비':
            return RainIcon
         case '눈':
            return SnowIcon
         case '번개':
            return ThunderIcon
         default:
            return SunIcon
      }
   }

   useEffect(() => {
      fetchWeatherData()
      console.log(regId)
   }, [regId, tmFc])

   return (
      <Box sx={{ padding: 2 }}>
         {loading ? (
            <Grid container spacing={1}>
               {Array.from(new Array(7)).map((_, index) => (
                  <Box key={index}>
                     <Skeleton variant="rectangular" height={100} />
                  </Box>
               ))}
            </Grid>
         ) : (
            <Grid container spacing={2} sx={{ flexDirection: 'column' }}>
               {weatherData.map((day, index) => (
                  <Box
                     key={index}
                     sx={{
                        width: 320,
                        display: 'flex',
                        alignItems: 'center',
                        margin: 0.2,
                        padding: 1,
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        backgroundColor: '#f9f9f9',
                     }}
                  >
                     <img src={day.icon} alt={day.weather} style={{ width: 75, height: 75, marginLeft: 10 }} />
                     <Box>
                        <Typography variant="subtitle1">{day.date}</Typography>
                        <Typography variant="body2">{day.weather}</Typography>
                     </Box>
                  </Box>
               ))}
            </Grid>
         )}
      </Box>
   )
}

export default Weather
