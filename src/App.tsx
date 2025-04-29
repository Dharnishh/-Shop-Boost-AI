
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AITools from "./pages/AITools";
import CreatePost from "./pages/CreatePost";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Onboarding from "./pages/Onboarding";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";

const App = () => {
  // Check if it's the first visit
  const [isFirstVisit, setIsFirstVisit] = useState(() => {
    return localStorage.getItem('hasVisitedBefore') !== 'true';
  });

  // Set visited flag
  useEffect(() => {
    if (isFirstVisit) {
      localStorage.setItem('hasVisitedBefore', 'true');
    }
  }, [isFirstVisit]);

  return (
    <>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Redirect to onboarding on first visit */}
          <Route path="/" element={
            isFirstVisit 
            ? <Navigate to="/onboarding" replace /> 
            : <Layout><Home /></Layout>
          } />
          <Route path="/onboarding" element={<Onboarding />} />
          
          {/* Main app routes */}
          <Route path="/ai-tools" element={<Layout><AITools /></Layout>} />
          <Route path="/create-post" element={<Layout><CreatePost /></Layout>} />
          <Route path="/analytics" element={<Layout><Analytics /></Layout>} />
          <Route path="/settings" element={<Layout><Settings /></Layout>} />
          
          {/* Catch all for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
