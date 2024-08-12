import { Box, SxProps } from '@mui/material'

interface ImgProps {
   src: string
   alt?: string
   sx?: SxProps
   onClick: () => void
}

const ImageComponent = ({ src, alt, sx, onClick }: ImgProps) => {
   return (
      <Box
         component="img"
         sx={{
            ...sx,
            borderRadius: 1,
            cursor: 'pointer',
         }}
         src={src}
         alt={alt}
         onClick={onClick}
      />
   )
}

export default ImageComponent
