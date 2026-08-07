import { Route, Routes } from "react-router-dom";
import ProfileOverview from "./pages/ProfileOverview";
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  return (
    <>
      <TooltipProvider delay={150}>
        <Routes>
          <Route path="/" element={<ProfileOverview />} />
        </Routes>
      </TooltipProvider>
    </>
  );
}

export default App;
