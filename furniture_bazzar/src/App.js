import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import BookNow from "./pages/BookNow";
import "./App.css";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import ChairsPage from "./SubPages/Chairs";
import SofasPage from "./SubPages/Sofas";
import CupboardsPage from "./SubPages/Cupboards";
import BedsPage from "./SubPages/Beds";
import TablesPage from "./SubPages/Tables";
import TemplesPage from "./SubPages/Temples";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<BookNow />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Home />} />
        <Route path="/chairs" element={<ChairsPage />} />
        <Route path="/sofas" element={<SofasPage />} />
        <Route path="/cupboards" element={<CupboardsPage />} />
        <Route path="/beds" element={<BedsPage />} />
        <Route path="/tables" element={<TablesPage />} />
        <Route path="/temples" element={<TemplesPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
