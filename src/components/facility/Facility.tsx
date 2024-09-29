import axios from 'axios'
import empty from '@assets/images/empty.jpg'

const Facility = async (areaCode: number, pageNo: number) => {
   const apiKey = import.meta.env.VITE_API_KEY
   const url = 'http://apis.data.go.kr/B551011/KorService1/areaBasedSyncList1'

   try {
      const response = await axios.get(url, {
         params: {
            numOfRows: 10,
            pageNo: pageNo,
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

      // response.data가 존재하지 않을 경우 기본값으로 빈 객체를 반환
      const data = response?.data?.response?.body || {}
      const items = data?.items?.item || []
      const totalCount = data?.totalCount || 0
      const totalPages = Math.ceil(totalCount / 10)

      return {
         items: items
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
            })),
         totalPages: totalPages,
      }
   } catch (error) {
      console.error('Error fetching facility data:', error)
      return { items: [], totalPages: 1 } // 에러 발생 시 기본값 반환
   }
}

export default Facility
