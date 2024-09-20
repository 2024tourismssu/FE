import Box from '@mui/material/Box'
import Header from '@components/header/Header.tsx'
import DetailInfo from '@components/detail/DetailInfo.tsx'
import styles from '@pages/festival/styles/FestivalPage.module.scss'

const FestivalDetailPage = () => {
   return (
      <Box>
         <Header />
         <Box className={styles.container}>
            <DetailInfo />
         </Box>
      </Box>
   )
}
export default FestivalDetailPage
