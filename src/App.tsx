import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { PatronClubPage } from './pages/PatronClubPage';
import { CorporatePartnershipPage } from './pages/CorporatePartnershipPage';
import { VolunteersPage } from './pages/VolunteersPage';
import { SupportersPage } from './pages/SupportersPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mecenassky-klub" element={<PatronClubPage />} />
          <Route path="/firemni-partnerstvi" element={<CorporatePartnershipPage />} />
          <Route path="/dobrovolnici" element={<VolunteersPage />} />
          <Route path="/podporuji-nas" element={<SupportersPage />} />
        </Routes>
      </div>
    </Router>
  );
}