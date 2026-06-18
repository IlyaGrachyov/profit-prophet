import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";
import WhatsAppCloud from "./pages/WhatsAppCloud.tsx";
import NotFound from "./pages/NotFound.tsx";

// Route table shared by the client app (App.tsx) and the server prerenderer
// (entry-server.tsx), so both render exactly the same pages.
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/whatsapp-cloud" element={<WhatsAppCloud />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
