import Header from "./component/header";
import Home from "./pages/home";
import Section2 from "./component/section2";
import Section3 from "./component/section3";
import Section4 from "./component/section4";
import Comment from "./component/comment"
import Section5 from "./component/section5";
import Footer from "./component/footer"
import Menu from "./pages/menu";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Dashboard from "./pages/dashboard";
import Order from "./pages/order"
import Auth from "./pages/auth"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function AppContent() {
  const location = useLocation();
  
  
  const hideLayout = location.pathname === '/auth-admin' 
                     

  return (
    <>
      {!hideLayout && <Header />}
      
      <Routes>
        <Route path="/" element={
          <>
            <Home/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Comment/>
            <Section5/>
          </>}
        />
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/auth-admin" element={<Auth/>}/>
        <Route path="/order" element={<Order/>}/>
      </Routes>
      
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;