import { useState } from 'react'
import Calendar from 'react-calendar'
import Box from '@mui/material/Box'
import moment from 'moment'
import 'react-calendar/dist/Calendar.css'

type DatePiece = Date | null
type SelectedDate = DatePiece | [DatePiece, DatePiece]

const CustomCalendar = () => {
   const [selectedDate, setSelectedDate] = useState<SelectedDate>(null)

   const tileClassName = ({ date }: { date: Date }) => {
      if (selectedDate instanceof Array) {
         const [start, end] = selectedDate
         if (start && end && date > start && date < end) {
            return 'highlight'
         }
      }
      return null
   }

   const tileDisabled = ({ date }: { date: Date }) => {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return date < today
   }

   return (
      <Box>
         <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            calendarType="gregory"
            view="month"
            prev2Label={null}
            next2Label={null}
            showNeighboringMonth={false}
            selectRange={true}
            tileClassName={tileClassName}
            tileDisabled={tileDisabled}
            formatDay={(_locale, date) => moment(date).format('DD')}
            navigationLabel={({ date }) => moment(date).format('YYYY년 MMMM')}
            onClickMonth={() => {}}
            onClickYear={() => {}}
         />
      </Box>
   )
}

export default CustomCalendar
