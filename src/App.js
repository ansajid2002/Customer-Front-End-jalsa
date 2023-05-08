import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Header from './components/header/Header';
import Content from './components/homepage/Content';
import Footer from './components/footer/Footer';
import Login from './components/loginform/Login';
import Createaccount from './components/Createaccount/Createaccount';
import Mens from './components/mens/Mens'
import Forgetpass from './components/forgetpassword/Forgetpass';
import Loginotp from './components/otp/Loginotp';
import Enterotp from './components/otp/Enterotp';
import Newpassword from './components/new_password/Newpassword';
import Wishlist from './components/wishlist/Wishlist';
import Kidsboys from './components/kidsboys/Kidsboys';
import Kidsgirls from './components/kidsgirls/Kidsgirls';
import Homeliving from './components/homeliving/Homeliving';
import Women from './components/women/Women';


function App() {
  return (
    <BrowserRouter>
      
      
      <Header/>
      
      <Routes>
        <Route path="/" element={<Content/>} />
        <Route path="/mens" element={<Mens/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/create-account" element={<Createaccount/>} />
        <Route path="/forget-password" element={<Forgetpass/>} /> 
        <Route path="/enter-otp" element={<Enterotp/>} />
        <Route path="/login-otp" element={<Loginotp/>} />
        <Route path="/new-password" element={<Newpassword/>} />
        <Route path="/women" element={<Women/>} />
        <Route path="/kids-boys" element={<Kidsboys/>} />
        <Route path="/kids-girls" element={<Kidsgirls/>} />
        <Route path="/home-living" element={<Homeliving/>} />
      </Routes>
      
      <Footer/>
    </BrowserRouter>  
      
    
  );
}

export default App;
