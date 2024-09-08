import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import axios from 'axios'
import { useContentStore } from '@/stores/contentStore.ts'

const DetailInfo = () => {
   const { contentId, contentTypeId } = useContentStore()

   const [loading, setLoading] = useState<boolean>(true)
   const apiKey = import.meta.env.VITE_API_KEY
   const url = 'http://apis.data.go.kr/B551011/KorService1/detailCommon1'

   useEffect(() => {
      const fetchData = async () => {
         try {
            console.log(contentId)
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
               console.log(item)
            }
         } catch (error) {
            console.error(error)
         } finally {
            setLoading(false)
         }
      }

      fetchData()
   }, [contentId, contentTypeId, apiKey])

   if (loading) {
      return <Box>Loading...</Box>
   }
}

export default DetailInfo
