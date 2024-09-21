import Header from '@components/header/Header.tsx'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import styles from './styles/HomePage.module.scss'
import cafe1 from '@assets/images/cafe1.jpg'
import ActionCard from '@components/card/ActionCard.tsx'

const HomePage = () => {
   return (
      <Box>
         <Header />
         <Box className={styles.container}>
            <Typography variant={'h3'}>실시간 Top 10</Typography>
            <Typography className={styles.container__subContent}>SNS 데이터를 분석한 빅데이터 랭킹입니다.</Typography>
            <Box className={styles.container__mainContent}>
               <ActionCard title={'슈니퐁당'} content={'숭실대에서 판매 중인 맛있는 카페집'} image={cafe1} />
               <ActionCard title={'스타벅스'} content={'인어로 우려낸 커피가 자랑인 집'} image={cafe1} />
               <ActionCard title={'미학당'} content={'2호점까지 진출한 새내기'} image={cafe1} />
            </Box>
         </Box>
      </Box>
   )
}

export default HomePage
