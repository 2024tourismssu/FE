import Header from '../../components/Header.tsx'
import Box from '@mui/material/Box'
import CustomCalendar from '../../components/calendar/Calendar.tsx'
import styles from './styles/FestivalPage.module.scss'

const FestivalPage = () => {
   return (
      <Box>
         <Header />
         <Box className={styles.container}>
            <CustomCalendar />
         </Box>
      </Box>
   )
}

export default FestivalPage
