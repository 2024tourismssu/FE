import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

interface PreviewColCardProps {
   title: string
   place: string
   startDate?: string
   endDate?: string
   image?: string
   altText?: string
}

const PreviewColCard = ({ title, place, startDate, endDate, image, altText }: PreviewColCardProps) => {
   return (
      <Card sx={{ display: 'flex', width: 700, margin: 2 }}>
         <CardMedia component="img" sx={{ width: 250, height: 340 }} image={image} alt={altText} />
         <CardActionArea sx={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <CardContent sx={{ padding: '8px', paddingBottom: '0 !important', marginLeft: '8px' }}>
               <Typography
                  gutterBottom
                  component="div"
                  sx={{
                     marginTop: '8px',
                     marginBottom: '8px',
                     fontWeight: 'bold',
                     fontSize: '24px',
                  }}
               >
                  {title}
               </Typography>
               <Typography
                  component="div"
                  sx={{
                     marginBottom: '4px',
                     fontSize: '18px',
                     overflow: 'hidden',
                     textOverflow: 'ellipsis',
                     whiteSpace: 'nowrap',
                     width: '100%',
                  }}
               >
                  {place}
               </Typography>
               <Typography variant="body2" color="text.secondary" sx={{ fontSize: '16px' }}>
                  {startDate} ~ {endDate}
               </Typography>
            </CardContent>
         </CardActionArea>
      </Card>
   )
}

export default PreviewColCard
