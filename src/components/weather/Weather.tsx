import axios from 'axios'
import Box from '@mui/material/Box'

interface WeatherProps {
   regId: string
   tmFc: string
}

const Weather = ({ regId, tmFc }: WeatherProps) => {
   const apikey = import.meta.env.VITE_API_KEY
   const url = 'http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst'

   const fetchWeatherData = async () => {
      try {
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
         console.log(response.data.response.body.items.item[0])
      } catch (error) {
         console.error('Error fetching the weather data', error)
      }
   }

   return (
      <Box>
         <button onClick={fetchWeatherData}>hoe</button>
      </Box>
   )
}

export default Weather
