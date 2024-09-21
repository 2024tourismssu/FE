import axios from 'axios'
import empty from '@assets/images/empty.jpg'

const Facility = async (areaCode: number) => {
   const apiKey = import.meta.env.VITE_API_KEY
   const url = 'http://apis.data.go.kr/B551011/KorService1/areaBasedSyncList1'

   try {
      const response = await axios.get(url, {
         params: {
            numOfRows: 20,
            pageNo: 1,
            MobileOS: 'ETC',
            mobileApp: 'AppTest',
            _type: 'json',
            listYN: 'Y',
            arrange: 'A',
            contentTypeId: 14,
            areaCode: areaCode,
            serviceKey: apiKey,
         },
         headers: {
            Accept: 'application/json',
         },
         responseType: 'json',
      })

      if (response.status === 200) {
         const items = response.data.response.body.items.item
         console.log(items)
         return items
            .filter((item: any) => {
               const cat2Number = item.cat2
               return cat2Number === 'A0206'
            })
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

export default Facility
