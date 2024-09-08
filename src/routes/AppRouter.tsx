import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '@pages/home/HomePage.tsx'
import FacilityPage from '@pages/facility/FacilityPage.tsx'
import FestivalPage from '@pages/festival/FestivalPage.tsx'
import ConcertPage from '@pages/concert/ConcertPage.tsx'
import PopupPage from '@pages/popup/PopupPage.tsx'
import FestivalDetailPage from '@pages/festivalDetail/FestivalDetailPage.tsx'

export const AppRouter = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/festival" element={<FestivalPage />} />
            <Route path="/festival/:contentId" element={<FestivalDetailPage />} />
            <Route path="/concert" element={<ConcertPage />} />
            <Route path="/facility" element={<FacilityPage />} />
            <Route path="/popup" element={<PopupPage />} />
         </Routes>
      </BrowserRouter>
   )
}
