import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Category from "./components/Category/Category.jsx";
import SingleProduct from "./components/SingleProduct/SingleProduct.jsx";
import Header from "./components/Header/Header.jsx";
import Newsletter from "./components/Footer/Newsletter/Newsletter.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AppContext from "./utils/Context";
import PageNotFound from "./components/pagenotfound/PageNotFound.jsx";
import SuccessPage from "./components/paymentPage/SuccessPage.jsx";
import RejectedPage from "./components/paymentPage/RejectedPage.jsx";

function App() {
  return (
    <>
      <Router>
        <AppContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="category/:id" element={<Category />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="?success=false" element={<RejectedPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Newsletter />
          <Footer />
        </AppContext>
      </Router>
    </>
  );
}

export default App;
