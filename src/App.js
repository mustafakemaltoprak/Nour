import Header from './components/header';
import Prayertimehelp from './components/prayertimehelp';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import Prayertimepage from './pages/prayertimepage';
import Aboutuspage from './pages/aboutuspage';
import Errorpage from './pages/errorpage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/prayertime" element={<Prayertimepage />} />
        <Route path="/team" element={<Aboutuspage />} />
        <Route path="*" exact={true} element={<Errorpage />} />
      </Routes>
    </Router>
  );
}
