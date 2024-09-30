import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea, Box } from '@mui/material'
import { useState } from 'react'

interface ActionAreaCardProps {
   title: string
   content?: string
   image?: string
   altText?: string
   tags?: string[] // tags 배열 추가
   addr?: string
   time?: string
}

const ActionCard = ({ title, content, image, altText, tags, addr, time }: ActionAreaCardProps) => {
   const [hovered, setHovered] = useState(false) // hover 상태 관리

   return (
      <Card
         sx={{
            maxWidth: 400,
            width: 300,
            height: 400,
            position: 'relative',
            overflow: 'hidden', // 카드 바깥으로 내용이 나가지 않도록 함
         }}
         onMouseEnter={() => setHovered(true)} // Hover 시작
         onMouseLeave={() => setHovered(false)} // Hover 종료
      >
         <CardActionArea>
            <CardMedia component="img" height="150" image={image} alt={altText} />
            <CardContent>
               <Typography gutterBottom variant="h6" component="div">
                  {title}
               </Typography>
               <Typography gutterBottom fontSize={'1rem'} component="div">
                  {addr}
               </Typography>
               <Typography gutterBottom fontSize={'0.8rem'} component="div">
                  {time}
               </Typography>

               {/* tags 표시 */}
               {tags && tags.length > 0 && (
                  <Box mt={2}>
                     <Typography variant="subtitle1" component="div"></Typography>
                     <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                        {tags.map((tag, index) => (
                           <Typography key={index} variant="body2" color="primary">
                              {tag}
                           </Typography>
                        ))}
                     </Box>
                  </Box>
               )}

               {/* Hover 시 말풍선처럼 보이는 content */}
               {content && (
                  <Box
                     sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: 300,
                        height: 400,
                        display: hovered ? 'flex' : 'none', // Hover 시 표시
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)', // 어두운 배경
                        color: '#fff',
                        textAlign: 'center',
                        padding: '10px',
                        boxSizing: 'border-box', // Padding이 요소 크기에 포함되도록 함
                        transition: 'opacity 0.3s ease-in-out',
                        zIndex: 10, // 말풍선이 위로 보이도록
                        overflowY: 'auto', // 긴 텍스트의 경우 스크롤 가능하게 처리
                     }}
                  >
                     <Typography variant="body2" color="inherit">
                        {content}
                     </Typography>
                  </Box>
               )}
            </CardContent>
         </CardActionArea>
      </Card>
   )
}

export default ActionCard
