import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/AboutUs/About";
import BookNow from "./pages/BookNow";
import "./App.css";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
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
import KitchenFurniture from "./Interiors/Kitchen/KitchenFurniture";
import DiningTablesPage from "./SubPages/DiningTables";
import KitchenCabinetsPage from "./SubPages/KitchenCabinet";
import HighChairsPage from "./SubPages/HighChairs";
import SideBoardsPage from "./SubPages/SideBoard";
import LibraryFurniture from "./Interiors/Library/LibraryFurniture";
import SingleStudyChairsPage from "./SubPages/SingleStudyChairs";
import StudyCabinetsPage from "./SubPages/StudyCabinetsPage";
import LivingroomFurniture from "./Interiors/Livingroom/LivingroomFurniture";
import RockingChairsPage from "./SubPages/RockingChairs";
import TvCabinetsPage from "./SubPages/TvCabinets";
import DisplayCabinetsPage from "./SubPages/DisplayCabinets";
import OfficeFurniture from "./Interiors/Office/OfficeFurniture";
import StudyroomFurniture from "./Interiors/Studyroom/StudyroomFurniture";
import ContactUs from "./pages/ContactUs/ContactUs";
import HospitalFurniture from "./Interiors/Hospital/HospitalFurniture";
import EquipmentCupboardsPage from "./SubPages/EquipmentCupboard";
import SubHeader from "./components/SubHeader/SubHeader";
import OurService from "./pages/Ourservice.js/OurService";
import ComboOffers from "./pages/ComboOffers/ComboOffers";
import AddOffer from "./pages/Admin/AddOffer";
import CustomisedFurniture from "./pages/CustomisedFurniture/CustomisedFurniture";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <SubHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/booknow" element={<BookNow />} />
        <Route path="/broucher" element={<Broucher />} />
        <Route path="/ourproducts" element={<OurProducts />} />
        <Route path="/ourservice" element={<OurService />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/customisedfurniture" element={<CustomisedFurniture />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add-offer"
          element={
            <ProtectedRoute>
              <AddOffer />
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
        <Route path="/combooffers" element={<ComboOffers />} />

        <Route path="/sidetables" element={<SideTablePage />} />
        <Route path="/dressingtables" element={<DressingTablesPage />} />
        <Route path="/coffeetables" element={<CoffeeTablesPage />} />
        <Route path="/bookshelfs" element={<BookShelfPage />} />
        <Route path="/workdesks" element={<WorkDeskPage />} />
        <Route path="/balconychairs" element={<BalconyChairsPage />} />
        <Route path="/mattress" element={<MattressPage />} />
        <Route path="/diningtable" element={<DiningTablesPage />} />
        <Route path="/kitchencabinet" element={<KitchenCabinetsPage />} />
        <Route path="/highchair" element={<HighChairsPage />} />
        <Route path="/sideboard" element={<SideBoardsPage />} />
        <Route path="/singlestudychair" element={<SingleStudyChairsPage />} />
        <Route path="/studycabinets" element={<StudyCabinetsPage />} />
        <Route path="/rockingchairs" element={<RockingChairsPage />} />
        <Route path="/tvcabinets" element={<TvCabinetsPage />} />
        <Route path="/displaycabinet" element={<DisplayCabinetsPage />} />
        <Route path="/hospitalfurnish" element={<EquipmentCupboardsPage />} />

        <Route path="/bedroomfurniture" element={<BedroomFurniture />} />
        <Route path="/kitchenfurniture" element={<KitchenFurniture />} />
        <Route path="/libraryfurniture" element={<LibraryFurniture />} />
        <Route path="/livingroomfurniture" element={<LivingroomFurniture />} />
        <Route path="/officefurniture" element={<OfficeFurniture />} />
        <Route path="/studyroomfurniture" element={<StudyroomFurniture />} />
        <Route path="/hospitalfurniture" element={<HospitalFurniture />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
