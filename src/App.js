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
import Trend from './components/trend/Trend';
import Accessories from './components/accessories/Accessories';

//overviews
import Mensoverview from './components/overview/Mensoverview';
import Trendoverview from './components/overview/Trendoverview';
import Kboverview from './components/overview/Kboverview';
import Kgoverview from './components/overview/Kgoverview';
import Hloverview from './components/overview/Hloverview';
import Acsoverview from './components/overview/Acsoverview';



//useContext
import Conpro from './context';



function App() {

  return (
    <BrowserRouter>
      
      
      <Header/>
      <Conpro>
      <Routes>
        <Route exact path="/" element={<Content/>} />
        <Route exact path="/mens" element={<Mens/>} />
        <Route exact path="/wishlist" element={<Wishlist/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/create-account" element={<Createaccount/>} />
        <Route exact path="/forget-password" element={<Forgetpass/>} /> 
        <Route exact path="/enter-otp" element={<Enterotp/>} />
        <Route exact path="/login-otp" element={<Loginotp/>} />
        <Route exact path="/new-password" element={<Newpassword/>} />
        <Route exact path="/accessories" element={<Accessories/>} />
        <Route exact path="/trend" element={<Trend/>} />
        <Route exact path="/kids-boys" element={<Kidsboys/>} />
        <Route exact path="/kids-girls" element={<Kidsgirls/>} />
        <Route exact path="/home-living" element={<Homeliving/>} />
        

        {/* //overviews */}
        <Route path="/mens/:id" element={<Mensoverview/>}/>
        <Route path="/trend/:id" element={<Trendoverview/>} />
        <Route path="/kids-boys/:id" element={<Kboverview/>} />
        <Route path="/kids-girls/:id" element={<Kgoverview/>} />
        <Route path="/home-living/:id" element={<Hloverview/>} />
        <Route path="/accessories/:id" element={<Acsoverview/>} />

      </Routes>
      
      </Conpro>
      <Footer/>
      
    </BrowserRouter>  
      
    
  );
}

export default App;
