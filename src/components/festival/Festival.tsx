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
         if (response.status == 200) {
            const items: Array<{ cat3: string; title: string }> = response.data.response.body.items.item
            // 아래의 item에서 사진 날짜 등등 뽑아와서 카드형태로 만들어서, 리스트로 보내면될듯!
            items.filter((item) => item.cat3 === 'A02070100' || 'A02070200').forEach((item) => console.log(item))
         }
      } catch (error) {
         console.error('Error fetching festival data:', error)
      }
   }

   return (
      <Box>
         <button onClick={fetchFestivalData}>Fetch Festival Data</button>
      </Box>
   )
}

export default Festival
