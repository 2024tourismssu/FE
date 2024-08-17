import { useState } from 'react'
import Box from '@mui/material/Box'
import Calendar from 'react-calendar'
import moment from 'moment'
import './styles.css'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

interface CalendarTileProperties {
   date: Date
   view: 'month' | 'year' | 'decade' | 'century'
}

const CustomCalendar = () => {
   const today = new Date()
   const [value, setValue] = useState<Value>(new Date())

   today.setHours(0, 0, 0, 0)

   const disablePastDates = ({ date, view }: CalendarTileProperties): boolean => {
      return view === 'month' && date < today
   }

   return (
      <Box>
         <Calendar
            showNeighboringMonth={false}
            calendarType="gregory"
            formatDay={(_locale, date) => moment(date).format('D')}
            formatMonthYear={(_locale, date) => moment(date).format('YYYY. MM')}
            next2Label={null}
            prev2Label={null}
            tileDisabled={disablePastDates}
            value={value}
            onChange={setValue}
         />
      </Box>
   )
}

export default CustomCalendar
