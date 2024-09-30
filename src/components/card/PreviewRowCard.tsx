import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useContentStore } from '@/stores/contentStore.ts'

interface PreviewRowCardProps {
   title: string
   place: string
   content?: string
   startDate?: string
   endDate?: string
   image?: string
   altText?: string
   onClick?: (contentId?: string, contentTypeId?: string) => void
   contentId?: string
   contentTypeId?: string
}

const PreviewRowCard = ({ title, place, content, image, altText, contentId, contentTypeId }: PreviewRowCardProps) => {
   const navigate = useNavigate()
   const setContent = useContentStore((state) => state.setContent)

   const handleClick = () => {
      setContent(contentId, contentTypeId)
      console.log(contentId)
      navigate(`/festival/${contentId}`)
   }

   return (
      <Card sx={{ maxWidth: 345, margin: 2 }} onClick={handleClick}>
         <CardActionArea>
            <CardMedia component="img" height="140" image={image} alt={altText} />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  {title}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  {content}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  {place}
               </Typography>
            </CardContent>
         </CardActionArea>
      </Card>
   )
}
export default PreviewRowCard
