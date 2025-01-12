import './App.css'
import { Header } from './Header';
import { LeadGrid } from './LeadGrid';
import { ContactUs } from './ContactUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TierGrid from './TierGrid';

function App() {

  return (
    <Router> 
    <>
    <Header />
  


    <Routes>
       
    <Route path="/" element={
    <>
    <LeadGrid />
    <TierGrid />
    
    </>} 
    />

      
      <Route path="/contact-us" element={<ContactUs /> } /> 
    </Routes> 
    
    
    

    </>
    </Router>


  )
}

export default App