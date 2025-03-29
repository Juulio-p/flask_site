import './App.css'
import { Header } from './Header';
import { ContactUs } from './ContactUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TierCard from './TierCard';
import Frontpage from './Frontpage';
import { Footer } from './Footer';
import Company_Login from './Company_Login';
import Register from './Register';

function App() {

  return (
    <Router> 
    <>
    <Header />
  


    <Routes>
       
    <Route path="/" element={
    <>
    
    <Frontpage />
    <TierCard />
    <Footer/>



    
    </>} 
    />

    <Route path="/Company_Login" element={ <Company_Login/> } /> 

      
      <Route path="/contact-us" element={<ContactUs /> } /> 
      <Route path="/Register" element={<Register /> } />
    </Routes> 
    
    
    

    </>
    </Router>


  )
}

export default App