import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Ingredients from "./pages/Ingredients";
import Flavors from "./pages/Flavours ";
import Science from "./pages/Science";
import GetEarlyAccess from "./pages/GetEarlyAccess";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      {/* Offset for fixed navbar */}
      <main className="pt-16 md:pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/flavors" element={<Flavors />} />
          <Route path="/science" element={<Science />} />
          <Route path="/get-early-access" element={<GetEarlyAccess />} />
        </Routes>
      </main>

      {/* ✅ Footer shows on every page */}
      <div className="relative z-10">
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
