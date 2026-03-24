import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Contact from "./pages/ContactUs/Contact";
import About from "./pages/AboutUs/About";
import BookNow from "./pages/BookNow";
import "./App.css";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import ChairsPage from "./SubPages/Chairs";
import SofasPage from "./SubPages/Sofas";
import CupboardsPage from "./SubPages/Cupboards";
import BedsPage from "./SubPages/Beds";
import TablesPage from "./SubPages/Tables";
import TemplesPage from "./SubPages/Temples";
import Broucher from "./pages/Broucher/Broucher";
import OurProducts from "./pages/OurProducts/OurProducts";
import BedroomFurniture from "./Interiors/Bedroom/BedroomFurniture";
import SideTablePage from "./SubPages/SideTable";
import WorkDeskPage from "./SubPages/WorkDesk";
import MattressPage from "./SubPages/Mattress";
import DressingTablesPage from "./SubPages/DressingTables";
import CoffeeTablesPage from "./SubPages/CoffeeTable";
import BookShelfPage from "./SubPages/Bookshelfs";
import BalconyChairsPage from "./SubPages/BalconyChairs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<BookNow />} />
        <Route path="/broucher" element={<Broucher />} />
        <Route path="/ourproducts" element={<OurProducts />} />
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

        <Route path="/sidetables" element={<SideTablePage />} />
        <Route path="/dressingtables" element={<DressingTablesPage />} />
        <Route path="/coffeetables" element={<CoffeeTablesPage />} />
        <Route path="/bookshelfs" element={<BookShelfPage />} />
        <Route path="/workdesks" element={<WorkDeskPage />} />
        <Route path="/balconychairs" element={<BalconyChairsPage />} />
        <Route path="/mattress" element={<MattressPage />} />

        <Route path="/bedroomfurniture" element={<BedroomFurniture />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
