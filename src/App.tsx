import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import AppContainer from './components/AppContainer';
import { TextColorProvider } from './theme/TextColorContext';
import TextColorSwitch from './components/TextColorSwitch';
import { DarkModeProvider } from './theme/DarkModeContext';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import MobileNavbar from './components/MobileNavbar';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
function App() {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
  const location = useLocation();
  return (
    <DarkModeProvider>
      <TextColorProvider>
        <AppContainer>
          <TextColorSwitch setIsMobileNavbarOpen={setIsMobileNavbarOpen} />
          <MobileNavbar
            isMobileNavbarOpen={isMobileNavbarOpen}
            setIsMobileNavbarOpen={setIsMobileNavbarOpen}
          />
          <Sidebar />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </AnimatePresence>
        </AppContainer>
      </TextColorProvider>
    </DarkModeProvider>
  );
}

export default App;
