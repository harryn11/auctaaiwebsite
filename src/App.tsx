import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AIConsultingPage from './pages/AIConsultingPage';
import ProcessAutomationPage from './pages/ProcessAutomationPage';
import AIAgentsPage from './pages/AIAgentsPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/ai-consulting" element={<AIConsultingPage />} />
          <Route path="/services/process-automation" element={<ProcessAutomationPage />} />
          <Route path="/services/ai-agents" element={<AIAgentsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;