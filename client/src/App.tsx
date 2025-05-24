import './App.css'
import { Header } from './Header';
import { ContactUs } from './ContactUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Employee_Login from './Employee_Login';
import TierCard from './TierCard';
import Frontpage from './Frontpage';
import { Footer } from './Footer';
import Company_Login from './Company_Login';
import Register from './Register';
import Register_Employee from './Register_Employee';
import Create_Employee_Post from './Create_Employee_Post';
import MockPostCard from './MockPostCard';
import MockPostCardHire from './MockPostCardHire'

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
      < Route path="/Employee_Login" element={<Employee_Login /> } />

       
      <Route path="/contact-us" element={<ContactUs /> } /> 
      <Route path="/Register" element={<Register /> } />
      <Route path="/Register_Employee" element={<Register_Employee/> } /> 

      <Route path= "/Create_Employee_Post" element={<Create_Employee_Post/> } /> 
      <Route path='MockPostCard' element={<MockPostCard /> } /> 
      <Route path='MockPostCardHire' element={<MockPostCardHire /> } /> 

    </Routes> 
    
    
    

    </>
    </Router>


  )
}

export default App