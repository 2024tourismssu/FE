import axios from 'axios'
import empty from '@assets/images/empty.jpg'

const Festival = async (eventStartDate: string, pageNo: number) => {
   const apiKey = import.meta.env.VITE_API_KEY
   const url = 'http://apis.data.go.kr/B551011/KorService1/searchFestival1'

   try {
      const response = await axios.get(url, {
         params: {
            numOfRows: 10,
            pageNo: pageNo, // 페이지 번호를 인자로 받음
            MobileOS: 'ETC',
            mobileApp: 'AppTest',
            _type: 'json',
            listYN: 'Y',
            arrange: 'A',
            eventStartDate: eventStartDate,
            serviceKey: apiKey,
         },
         headers: {
            Accept: 'application/json',
         },
         responseType: 'json',
      })

      if (response.status === 200) {
         const items = response.data.response.body.items.item || []
         const totalCount = response.data.response.body.totalCount || 0
         const totalPages = Math.ceil(totalCount / 10)

         return {
            items: items
               .filter((item: any) => item.cat3 === 'A02070100' || item.cat3 === 'A02070200')
               .map((item: any) => ({
                  title: item.title,
                  place: item.addr1 + (item.addr2 || ''),
                  startDate: item.eventstartdate,
                  endDate: item.eventenddate,
                  image: item.firstimage || empty,
                  contentId: item.contentid,
                  contentTypeId: item.contenttypeid,
               })),
            totalPages: totalPages,
         }
      }
   } catch (error) {
      console.error('Error fetching festival data:', error)
   }

   // 에러 발생 시 기본값 반환
   return { items: [], totalPages: 1 }
}

export default Festival
