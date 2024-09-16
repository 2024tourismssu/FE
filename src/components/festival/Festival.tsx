import axios from 'axios'
import empty from '@assets/images/empty.jpg'

const Festival = async (eventStartDate: string) => {
   const apiKey = import.meta.env.VITE_API_KEY
   const url = 'http://apis.data.go.kr/B551011/KorService1/searchFestival1'

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
            eventStartDate: eventStartDate, // eventStartDate 값을 사용
            serviceKey: apiKey,
         },
         headers: {
            Accept: 'application/json',
         },
         responseType: 'json',
      })

      if (response.status === 200) {
         const items = response.data.response.body.items.item
         return items
            .filter((item: any) => item.cat3 === 'A02070100' || item.cat3 === 'A02070200')
            .map((item: any) => ({
               title: item.title,
               place: item.addr1 + (item.addr2 || ''),
               startDate: item.eventstartdate,
               endDate: item.eventenddate,
               image: item.firstimage || empty,
               contentId: item.contentid,
               contentTypeId: item.contenttypeid,
            }))
      }
   } catch (error) {
      console.error('Error fetching festival data:', error)
      return []
   }
}

export default Festival
