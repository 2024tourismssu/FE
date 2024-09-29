import { create } from 'zustand'

interface DateState {
   startDate: string | null
   endDate: string | null
   setDates: (startDate: string | null, endDate: string | null) => void
}

export const useDateStore = create<DateState>((set) => ({
   startDate: null,
   endDate: null,
   setDates: (startDate, endDate) => set({ startDate, endDate }),
}))
