import { useEffect } from 'react'
import { Box, Button } from '@mui/material'

const KakaoShare = () => {
   const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_APP_KEY

   useEffect(() => {
      if (!window.Kakao.isInitialized()) {
         window.Kakao.init(KAKAO_API_KEY)
      }
   }, [KAKAO_API_KEY])

   const shareKakao = () => {
      window.Kakao.Share.createCustomButton({
         container: '#kakao-share-btn',
         templateId: 112679,
      })
   }

   return (
      <Box>
         <Button
            id="kakao-share-btn"
            onClick={shareKakao}
            sx={{
               backgroundColor: '#FEE500',
               color: '#000000',
               '&:hover': {
                  backgroundColor: '#E5C700',
               },
               display: 'flex',
               alignItems: 'center',
               padding: '8px 16px',
               borderRadius: '4px',
               boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
               fontSize: '16px',

               '@media (max-width: 600px)': {
                  padding: '6px 12px',
                  fontSize: '14px',
               },
               '@media (max-width: 400px)': {
                  padding: '4px 8px',
                  fontSize: '12px',
               },
            }}
         >
            카톡 공유하기
         </Button>
      </Box>
   )
}

export default KakaoShare
