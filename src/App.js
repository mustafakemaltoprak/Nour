import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import Prayertimepage from './pages/prayertimepage';
import Aboutuspage from './pages/aboutuspage';
import Errorpage from './pages/errorpage';
import HadithOfTheDay from './pages/hadithoftheday';
import Contactpage from './pages/contactpage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/prayertime" element={<Prayertimepage />} />
        <Route path="/team" element={<Aboutuspage />} />
        <Route path="/hadith" element={<HadithOfTheDay />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="*" exact={true} element={<Errorpage />} />
      </Routes>
    </Router>
  );
}
