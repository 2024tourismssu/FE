import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined'
import { IconButton } from '@mui/material'
import styles from './styles/CalendarButton.module.scss'

interface props {
   onClick: () => void
}

const CalendarButton = ({ onClick }: props) => {
   return (
      <IconButton
         className={styles.buttonContainer}
         sx={{
            width: '48px', // 버튼의 크기 (가로)
            height: '48px', // 버튼의 크기 (세로)
            borderRadius: '50%', // 둥근 모양으로 만들기
            backgroundColor: '#62B486', // 버튼 배경색 (원하는 색상으로 변경)
            '&:hover': {
               backgroundColor: 'rgba(98, 180, 134, 0.23)', // 호버 시 배경색
            },
         }}
         onClick={onClick}
      >
         <EventAvailableOutlinedIcon
            sx={{
               width: '42px', // 버튼의 크기 (가로)
               height: '42px', // 버튼의 크기 (세로)
            }}
         />
      </IconButton>
   )
}

export default CalendarButton
