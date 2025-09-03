import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AIConsultingPage from './pages/AIConsultingPage';
import ProcessAutomationPage from './pages/ProcessAutomationPage';
import AIAgentsPage from './pages/AIAgentsPage';
import CRMAutomationPage from './pages/CRMAutomationPage';
import VoiceAgentsPage from './pages/VoiceAgentsPage';
import DataAnalyticsPage from './pages/DataAnalyticsPage';
import WorkflowAutomationPage from './pages/WorkflowAutomationPage';
import PredictiveAnalyticsPage from './pages/PredictiveAnalyticsPage';
import OngoingPartnershipPage from './pages/OngoingPartnershipPage';
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
          <Route path="/solutions/ai-agents" element={<AIAgentsPage />} />
          <Route path="/solutions/crm-automation" element={<CRMAutomationPage />} />
          <Route path="/solutions/voice-agents" element={<VoiceAgentsPage />} />
          <Route path="/solutions/data-analytics" element={<DataAnalyticsPage />} />
          <Route path="/solutions/workflow-automation" element={<WorkflowAutomationPage />} />
          <Route path="/solutions/predictive-analytics" element={<PredictiveAnalyticsPage />} />
          <Route path="/services/ongoing-partnership" element={<OngoingPartnershipPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;