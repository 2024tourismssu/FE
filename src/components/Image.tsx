import { Box, SxProps } from '@mui/material'

interface ImgProps {
   src: string
   alt?: string
   sx?: SxProps
}

const ImageComponent = ({ src, alt, sx }: ImgProps) => {
   return (
      <Box
         component="img"
         sx={{
            ...sx,
            borderRadius: 1,
         }}
         src={src}
         alt={alt}
      />
   )
}

export default ImageComponent
