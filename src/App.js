import { useState } from "react";
import "./App.css";
// import Card from "./component/Card";
// import NavBar from "./YouTube/NavBar";
// import Newbord from "./YouTube/newbord";
// import Newsitem from "./YouTube/newsitem";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Navbarr from "./website/component/navbar";
// import Cart from "./website/pages/Cart/cart";
// import Shop from "./website/pages/shop/shop";
// import Shopcontextproviderr from "./website/context_api/api";
import Navbarpiazz from "./Pizzaweb/components/Navbar";
import Home from "./Pizzaweb/components/pages/Home";
import About from "./Pizzaweb/components/pages/About";
import Footer from "./Pizzaweb/components/pages/Footer";
import Menu from "./Pizzaweb/components/pages/Menu";
import Contuct from "./Pizzaweb/components/contuctus";
import HomePiza from "./LastDayPizzawebsite/Pages/Home";
import AboutPiza from "./LastDayPizzawebsite/Pages/About";
import TestimonialPiza from "./LastDayPizzawebsite/Pages/Testimonial.";
import WorkPiza from "./LastDayPizzawebsite/Pages/work";
import NavigationPizza from "./LastDayPizzawebsite/NavigationPizza";
import FooterPiza from "./LastDayPizzawebsite/Pages/Footer";
function App() {
  const [category, setcategory] = useState("general");
  return (
    <>
      {/* <div className="App">
        <Card
          imgsr="https://picsum.photos/300/200"
          Description={
            "this is the card descriptin you can add more! derail here"
          }
          btntex={"Learn More"}
          Title={"Card Title"}
          link={"link"}
        />
      </div> */}

      {/* =============================================================================================================================== */}
      {/* <NavBar setcategory={setcategory} />
      <Newbord category={category} />
      <Newsitem /> */}

      {/* =============================================================================================================================== */}
      {/* 
      <Shopcontextproviderr>
        <Router>
          <Navbarr />

          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" />
          </Routes>
        </Router>
      </Shopcontextproviderr> */}

      {/* =========================================================================================================================== */}
      {/* 
      <Navbarpiazz />

      <Router>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/" />
          <Route path="/" />
        </Routes>
      </Router> */}

      {/* <Router>
        <Navbarpiazz />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Contuct" element={<Contuct />} />
        </Routes>
        <Footer />
      </Router> */}

      {/* <Router>
        <NavigationPizza />
        <Routes>
          <Route path="/" element={<HomePiza />} />
          <Route path="/About" element={<AboutPiza />} />
          <Route path="/work" element={<WorkPiza />} />
          <Route path="/Testimonial" element={<TestimonialPiza />} />
        </Routes>
      </Router> */}
      <NavigationPizza />
      <HomePiza />
      <AboutPiza />
      <WorkPiza />
      <TestimonialPiza />
      <FooterPiza />
    </>
  );
}

export default App;
