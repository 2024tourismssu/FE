import Box from '@mui/material/Box'
import Header from '@components/header/Header.tsx'
import DetailInfo from '@components/detail/DetailInfo.tsx'
import KakaoMap from '@components/map/KakaoMap.tsx'

const FestivalDetailPage = () => {
   return (
      <Box>
         <Header />
         <Box>
            <DetailInfo />
            <KakaoMap />
         </Box>
      </Box>
   )
}
export default FestivalDetailPage
