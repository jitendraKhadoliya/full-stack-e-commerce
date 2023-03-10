import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Category from "./components/Category/Category.jsx";
import SingleProduct from "./components/SingleProduct/SingleProduct.jsx";
import Header from "./components/Header/Header.jsx";
import Newsletter from "./components/Footer/Newsletter/Newsletter.jsx";
import Footer from "./components/Footer/Footer.jsx";
// import AppContext from "./utils/Context";
// import AppContexxt from "./utils/Context.js";
import UserContextProvider from "./utils/Context.js";

function App() {
  return (
    <>
      <Router>
        <UserContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="category/:id" element={<Category />} />
            <Route path="/product/:id" element={<SingleProduct />} />
          </Routes>
          <Newsletter />
          <Footer />
          </UserContextProvider>
      </Router>
    </>
  );
}

export default App;
