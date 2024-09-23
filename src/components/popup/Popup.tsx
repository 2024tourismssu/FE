import { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'

const Popup = () => {
   const [open, setOpen] = useState(false)

   const handleClickOpen = () => {
      setOpen(true)
   }

   const handleClose = () => {
      setOpen(false)
   }

   return (
      <div>
         <Button variant="contained" color="primary" onClick={handleClickOpen}>
            팝업 열기
         </Button>
         <Dialog open={open} onClose={handleClose}>
            <DialogTitle>팝업 제목</DialogTitle>
            <DialogContent>팝업 내용입니다.</DialogContent>
            <DialogActions>
               <Button onClick={handleClose} color="primary">
                  닫기
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   )
}

export default Popup
