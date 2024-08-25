import Box from '@mui/material/Box'
import axios from 'axios'

const Festival = () => {
   const apiKey = import.meta.env.VITE_API_KEY

   const url = 'http://apis.data.go.kr/B551011/KorService1/searchFestival1'
   const fetchFestivalData = async () => {
      try {
         const response = await axios.get(url, {
            params: {
               numOfRows: 10,
               pageNo: 1,
               MobileOS: 'ETC',
               mobileApp: 'AppTest',
               _type: 'json',
               listYN: 'Y',
               arrange: 'A',
               eventStartDate: '20240825',
               serviceKey: apiKey,
            },
            headers: {
               Accept: 'application/json',
            },
            responseType: 'json',
         })

         console.log(response.data) // 응답 데이터 로그 출력
      } catch (error) {
         console.error('Error fetching festival data:', error) // 에러 핸들링
      }
   }

   return (
      <Box>
         <button onClick={fetchFestivalData}>Fetch Festival Data</button>
      </Box>
   )
}

export default Festival
