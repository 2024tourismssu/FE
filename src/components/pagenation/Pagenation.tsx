import { Stack } from '@mui/material'
import Pagination from '@mui/material/Pagination'

// interface BasicPaginationProps {
//    pageNo: number
//    totalPages: number
// }

const BasicPagenation = () => {
   return (
      <Stack spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         <Pagination count={10} />
      </Stack>
   )
}

export default BasicPagenation
