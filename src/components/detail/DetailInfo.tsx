import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import axios from 'axios'
import { useContentStore } from '@/stores/contentStore.ts'
import KakaoMap from '@components/map/KakaoMap.tsx'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import styles from './style/DetailInfo.module.scss'
import Card from '@mui/material/Card'

interface DetailProps {
   title: string
   overview: string
   tel: string
   firstimage2: string
   homepage: string
}

const DetailInfo = () => {
   const { contentId, contentTypeId, setMapCoords } = useContentStore()
   const [item, setItem] = useState<DetailProps>()
   const [isShowMore, setIsShowMore] = useState<boolean>(false)
   const apiKey = import.meta.env.VITE_API_KEY
   const url = 'http://apis.data.go.kr/B551011/KorService1/detailCommon1'

   const textLimit = 150
   const createLinkHTML = (homepage: string): string => {
      const displayText = homepage.replace(/(^\w+:|^)\/\//, '')
      return `<a href="${homepage}" target="_blank" rel="noopener noreferrer">${displayText}</a>`
   }
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
               const fetchedItem = response.data.response.body.items.item[0]
               setItem(fetchedItem)
               setMapCoords(fetchedItem.mapy, fetchedItem.mapx)
            }
         } catch (error) {
            console.error(error)
         }
      }

      fetchData()
   }, [contentId, contentTypeId, apiKey, setMapCoords])

   return (
      <Box className={styles.Container}>
         <Card className={styles.Media}>
            <CardMedia className={styles.Img} component="img" image={item?.firstimage2} />
         </Card>

         <Card className={styles.MainContent}>
            <Typography variant="h5">{item?.title}</Typography>

            <Typography className={styles.MainContent__Overview}>{isShowMore || !item?.overview ? item?.overview : `${item?.overview?.slice(0, textLimit)}...`}</Typography>

            {item?.overview && item?.overview.length > textLimit && (
               <Typography onClick={() => setIsShowMore(!isShowMore)} style={{ cursor: 'pointer', fontSize: '12px' }}>
                  {isShowMore ? '[닫기]' : '[더보기]'}
               </Typography>
            )}
         </Card>
         <Card className={styles.Map}>
            <KakaoMap />
         </Card>
         <Card className={styles.SubContent}>
            {item?.homepage && (
               <Typography
                  dangerouslySetInnerHTML={{
                     __html: createLinkHTML(item.homepage),
                  }}
               />
            )}
            <Typography>{item?.tel}</Typography>
         </Card>
      </Box>
   )
}

export default DetailInfo
