import { useEffect, useState } from 'react'
import { useDateStore } from '@/stores/dateStore.ts'
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

interface CustomCalendarProps {
   className?: string
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({ className }) => {
   const today = new Date()
   const [value, setValue] = useState<Value>([null, null])
   const { setDates } = useDateStore()
   today.setHours(0, 0, 0, 0)

   const disablePastDates = ({ date, view }: CalendarTileProperties): boolean => {
      return view === 'month' && date < today
   }

   useEffect(() => {
      if (Array.isArray(value)) {
         const [startDate, endDate] = value
         setDates(startDate ? startDate.toString() : null, endDate ? endDate.toString() : null)
      }
   }, [value, setDates])

   return (
      <Box className={className}>
         <Calendar
            selectRange={true}
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
