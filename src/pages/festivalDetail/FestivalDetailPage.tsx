import Box from '@mui/material/Box'
import Header from '@components/header/Header.tsx'
import DetailInfo from '@components/detail/DetailInfo.tsx'
import KakaoMap from '@components/map/KakaoMap.tsx'

const FestivalDetailPage = () => {
   // const fetchDetailData = () => {
   //    // console.log(response);
   // }
   // fetch하는 컴포넌트를 생성후에 그에 알맞는 내용을 여기다가 렌더링을 해줄까?
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
