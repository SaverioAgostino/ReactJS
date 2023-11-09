import { Routes, Route, BrowserRouter } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from './pages/HomePage';
import KelasPage from "./pages/KelasPage";
import ProdukDetail from "./pages/ProdukDetail";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
 return <div>
    <NavbarComponent/>



    <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/produkdetail" Component={ProdukDetail} />
        <Route path="/checkout" Component={CheckoutPage} />
    </Routes>

    <FooterComponent/>
 </div>;
}

export default App;
