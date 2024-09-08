import { useEffect } from 'react'
import Box from '@mui/material/Box'
import axios from 'axios'
import { useContentStore } from '@/stores/contentStore.ts'

const DetailInfo = () => {
   const { contentId, contentTypeId, setMapCoords } = useContentStore()

   const apiKey = import.meta.env.VITE_API_KEY
   const url = 'http://apis.data.go.kr/B551011/KorService1/detailCommon1'

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(url, {
               params: {
                  MobileOS: 'ETC',
                  mobileApp: 'AppTest',
                  _type: 'json',
                  contentId: contentId,
                  contentTypeId: contentTypeId,
                  defaultYN: 'Y',
                  firstImageYN: 'Y',
                  areacodeYN: 'Y',
                  catcodeYN: 'Y',
                  addrinfoYN: 'Y',
                  mapinfoYN: 'Y',
                  overviewYN: 'Y',
                  numOfRows: 10,
                  pageNo: 1,
                  serviceKey: apiKey,
               },
               headers: {
                  Accept: 'application/json',
               },
            })

            if (response.status === 200) {
               const item = response.data.response.body.items.item[0]
            
               setMapCoords(item.mapy, item.mapx)
            }
         } catch (error) {
            console.error(error)
         }
      }

      fetchData()
   }, [contentId, contentTypeId, apiKey])

   return <Box>Loading...</Box>
}

export default DetailInfo
