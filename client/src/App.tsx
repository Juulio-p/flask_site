import './App.css'
import { Header } from './Header';
import { LeadGrid } from './LeadGrid';
import { ContactUs } from './ContactUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TierCard from './TierCard';

function App() {

  return (
    <Router> 
    <>
    <Header />
  


    <Routes>
       
    <Route path="/" element={
    <>
    <LeadGrid />
    <TierCard />
    
    </>} 
    />

      
      <Route path="/contact-us" element={<ContactUs /> } /> 
    </Routes> 
    
    
    

    </>
    </Router>


  )
}

export default App