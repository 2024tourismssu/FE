import Header from '@components/header/Header.tsx'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import styles from './styles/PopupPage.module.scss'
import ActionCard from '@components/card/ActionCard.tsx'
import { useEffect, useState } from 'react'
import axios from 'axios'
import empty from '@assets/images/empty.jpg'

const PopupPage = () => {
   const url = 'http://mjss-ssu.info:3000/api/popup/stores'
   const [popupStores, setPopupStores] = useState<any[]>([])

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(url)
            if (response.data.ok) {
               const items = response.data.popupStores
               setPopupStores(items)
            }
         } catch (error) {
            console.error(error)
         }
      }
      fetchData()
   }, [])

   return (
      <Box>
         <Header />
         <Box className={styles.container}>
            <Typography variant={'h3'} sx={{ marginTop: 5 }}>
               팝업 스토어
            </Typography>
            <Typography className={styles.container__subContent}>SNS 데이터를 분석한 팝업스토어 정보입니다!</Typography>
            <Box className={styles.container__mainContent}>
               {popupStores.length > 0 ? (
                  popupStores.map((store) => (
                     <ActionCard
                        key={store._id}
                        title={store.title}
                        content={store.content}
                        image={store.image !== '아직 없어용' ? store.image : empty} // 이미지 없을 시 기본 이미지 설정
                        addr={store.address}
                        time={store.time}
                        altText={store.title}
                        tags={store.tags}
                     />
                  ))
               ) : (
                  <Typography>팝업스토어 데이터를 불러오는 중입니다...</Typography>
               )}
            </Box>
         </Box>
      </Box>
   )
}

export default PopupPage
