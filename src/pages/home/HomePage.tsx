import Box from '@mui/material/Box'
import Header from '../../components/Header.tsx'
import Typography from '@mui/material/Typography'
import styles from './styles/HomePage.module.scss'

const HomePage = () => {
   return (
      <Box>
         <Header />
         <Box className={styles.container}>
            <Typography variant={'h3'}>실시간 Top 10</Typography>
            <Typography className={styles.container__subContent}>SNS 데이터를 분석한 빅데이터 랭킹입니다.</Typography>
         </Box>
      </Box>
   )
}

export default HomePage
