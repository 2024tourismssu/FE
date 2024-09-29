import { Stack } from '@mui/material'
import Pagination from '@mui/material/Pagination'

interface BasicPaginationProps {
   pageNo: number
   totalPages: number
   onChangePage: (event: React.ChangeEvent<unknown>, value: number) => void
}

const BasicPagenation = ({ pageNo, totalPages, onChangePage }: BasicPaginationProps) => {
   return (
      <Stack spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 3 }}>
         <Pagination count={totalPages} page={pageNo} onChange={onChangePage} />
      </Stack>
   )
}

export default BasicPagenation
