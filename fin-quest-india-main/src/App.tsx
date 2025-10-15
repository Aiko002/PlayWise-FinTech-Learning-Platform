import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Learn from "./pages/Learn";
import ModuleDetail from "./pages/ModuleDetail";
import LessonPlay from "./pages/LessonPlay";
import Simulations from "./pages/Simulations";
import SimulationDetail from "./pages/SimulationDetail";
import Leaderboard from "./pages/Leaderboard";
import Regulations from "./pages/Regulations";
import Profile from "./pages/Profile";
import Challenges from "./pages/Challenges";
import Resources from "./pages/Resources";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <div className="min-h-screen bg-background font-body">
            <Navigation />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/learn" element={<Learn />} />
                <Route path="/learn/:moduleId" element={<ModuleDetail />} />
                <Route path="/learn/:moduleId/lesson/:lessonId/play" element={<LessonPlay />} />
              </Route>
              <Route path="/simulations" element={<Simulations />} />
              <Route path="/simulations/:simulationId" element={<SimulationDetail />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/regulations" element={<Regulations />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/community" element={<Community />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
