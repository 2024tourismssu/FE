import { useState } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box'
import moment from 'moment'

const Weather = () => {
   const [weatherData, setWeatherData] = useState(null)
   const [loading, setLoading] = useState(false)
   const cityName = 'Seoul'
   const apikey = import.meta.env.VITE_API_KEY
   const url = 'http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst'

   const fetchWeatherData = async () => {
      setLoading(true)
      try {
         const response = await axios.get(url, {
            params: {
               ServiceKey: apikey,
               numOfRows: 10,
               pageNo: 1,
               regId: '11B00000',
               tmFc: moment().format('YYYYMMDD0600'),
               dataType: 'JSON',
            },
            headers: {
               Accept: 'application/json',
            },
            responseType: 'json',
         })
         setWeatherData(response.data)
      } catch (error) {
         console.error('Error fetching the weather data', error)
      } finally {
         setLoading(false)
      }
   }

   return (
      <Box>
         <button onClick={fetchWeatherData} disabled={loading}>
            {loading ? 'Loading...' : 'Fetch Weather Data'}
         </button>
         {weatherData && (
            <div>
               <h2>Weather Information for {cityName}</h2>
               <pre>{JSON.stringify(weatherData, null, 2)}</pre>
            </div>
         )}
      </Box>
   )
}

export default Weather
