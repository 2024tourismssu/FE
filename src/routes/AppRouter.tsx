import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/home/HomePage.tsx'
import EventPage from '../pages/event/EventPage.tsx'
import FestivalPage from '../pages/festival/FestivalPage.tsx'
import ConcertPage from '../pages/concert/ConcertPage.tsx'
import FacilityPage from '../pages/facility/FacilityPage.tsx'
import PopupPage from '../pages/popup/PopupPage.tsx'

export const AppRouter = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/festival" element={<FestivalPage />} />
            <Route path="/concert" element={<ConcertPage />} />
            <Route path="/event" element={<EventPage />} />
            <Route path="/facility" element={<FacilityPage />} />
            <Route path="/popup" element={<PopupPage />} />
         </Routes>
      </BrowserRouter>
   )
}
