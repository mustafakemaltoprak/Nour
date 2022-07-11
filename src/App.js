import Header from './components/header';
import Prayertimehelp from './components/prayertimehelp';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import Prayertimepage from './pages/prayertimepage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/prayertime" element={<Prayertimepage />} />
      </Routes>
    </Router>
  );
}
