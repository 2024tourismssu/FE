import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import axios from 'axios'
import { useContentStore } from '@/stores/contentStore.ts'
import KakaoMap from '@components/map/KakaoMap.tsx'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import PhoneIcon from '@mui/icons-material/Phone'
import LinkIcon from '@mui/icons-material/Link'
import Button from '@mui/material/Button'
import styles from './style/DetailInfo.module.scss'

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
   const { mapX, mapY } = useContentStore()
   const textLimit = 250
   console.log(mapX, mapY)
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

   // HTML 태그를 제거하고 실제 URL만 추출하는 함수
   const extractURL = (htmlString: string) => {
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = htmlString
      const anchor = tempDiv.querySelector('a')
      return anchor ? anchor.href : htmlString // 링크가 없으면 원본 문자열 반환
   }
   const openRoadView = () => {
      const roadViewUrl = `https://map.kakao.com/link/roadview/${mapY},${mapX}`
      window.open(roadViewUrl, '_blank') // 새 탭에서 링크 열기
   }

   return (
      <Box className={styles.Container}>
         <Card className={styles.Media}>
            <CardMedia className={styles.Img} component="img" image={item?.firstimage2} />
         </Card>

         <Card className={styles.MainContent}>
            <Typography variant="h5" sx={{ margin: 2 }}>
               {item?.title}
            </Typography>

            <Typography className={styles.MainContent__Overview} sx={{ fontSize: '14px', margin: 1.5 }}>
               {isShowMore || !item?.overview ? item?.overview : `${item?.overview?.slice(0, textLimit)}...`}
            </Typography>
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
            <Typography component="div">
               <LinkIcon
                  fontSize="small"
                  style={{
                     marginRight: '8px',
                     marginLeft: '8px',
                     marginTop: '12px',
                  }}
               />
               홈페이지 링크 :
               {item?.homepage && (
                  <a href={extractURL(item.homepage)} target="_blank" rel="noopener noreferrer">
                     {extractURL(item.homepage)}
                  </a>
               )}
            </Typography>
            <Typography component="div">
               <PhoneIcon
                  fontSize="small"
                  style={{
                     marginRight: '8px',
                     marginLeft: '8px',
                     marginTop: '12px',
                  }}
               />
               전화 번호 : {item?.tel ? item.tel : '번호가 없습니다'}
            </Typography>
            <Button variant="contained" onClick={openRoadView} style={{ marginTop: '10px', backgroundColor: '#62B486' }}>
               길찾기
            </Button>
         </Card>
      </Box>
   )
}

export default DetailInfo
