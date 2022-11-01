import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import AppContainer from './components/AppContainer';
import { TextColorProvider } from './theme/TextColorContext';
import TextColorSwitch from './components/TextColorSwitch';
import { DarkModeProvider } from './theme/DarkModeContext';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <DarkModeProvider>
      <TextColorProvider>
        <AppContainer>
          <TextColorSwitch />
          <Router>
            <Sidebar />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        </AppContainer>
      </TextColorProvider>
    </DarkModeProvider>
  );
}

export default App;
