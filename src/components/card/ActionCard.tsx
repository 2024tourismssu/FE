import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

interface ActionAreaCardProps {
   title: string
   content?: string
   image?: string
   altText?: string
}

const ActionCard = ({ title, content, image, altText }: ActionAreaCardProps) => {
   return (
      <Card sx={{ maxWidth: 345 }}>
         <CardActionArea>
            <CardMedia component="img" height="140" image={image} alt={altText} />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  {title}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  {content}
               </Typography>
            </CardContent>
         </CardActionArea>
      </Card>
   )
}
export default ActionCard
