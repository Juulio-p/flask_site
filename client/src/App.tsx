import "./App.css";
import { ContactUs } from "./ContactUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Employee_Login from "./Employee_Login";
import Frontpage from "./Frontpage";
import { Footer } from "./Footer";
import Company_Login from "./Company_Login";
import Register from "./Register";
import Register_Employee from "./Register_Employee";
import Create_Employee_Post from "./Create_Employee_Post";
import { Header } from "./Header";
import Create_Post from "./Create_Post";


function App() {
  return (
    <Router>
      <>
      { 
        <Header />
}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Frontpage />

                <Footer />
              </>
            }
          />

          <Route path="/Company_Login" element={<Company_Login />} />
          <Route path="/Employee_Login" element={<Employee_Login />} />
          <Route path="/create" element={<Create_Post/>} />

          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Register_Employee" element={<Register_Employee />} />

          <Route
            path="/Create_Employee_Post"
            element={<Create_Employee_Post />}
          />
        
        </Routes>
      </>
    </Router>
  );
}

export default App;
