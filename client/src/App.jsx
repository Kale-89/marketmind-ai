import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import CampaignGenerator from "./pages/CampaignGenerator";
import History from "./pages/History";
import KnowledgeBase from "./pages/KnowledgeBase";
import GeneratedContent from "./components/GeneratedContent";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/generator" element={<CampaignGenerator />} />

        <Route path="/generated/:id" element={<GeneratedContent />} />

        <Route path="/history" element={<History />} />

        <Route path="/knowledge" element={<KnowledgeBase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
