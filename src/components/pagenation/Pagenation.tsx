import { Stack } from '@mui/material'
import Pagination from '@mui/material/Pagination'

const BasicPagenation = () => {
   return (
      <Stack spacing={2}>
         <Pagination count={10} />
      </Stack>
   )
}

export default BasicPagenation
