import "./App.css";
import { ContactUs } from "./ContactUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Employee_Login from "./Employee_Login";
import Frontpage from "./Frontpage";
import Company_Login from "./Company_Login";
import Register from "./Register";
import Register_Employee from "./Register_Employee";
import Create_Employee_Post from "./Create_Employee_Post";
import { Header } from "./Header";
import Create_Post from "./Create_Post";
import BookingPage from "./BookingPage";
import ServicesPage from "./ServicesPage";
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
              </>
            }
          />
          <Route path="/ServicesPage" element={<ServicesPage />} />
          <Route path="/Booking" element={<BookingPage />} />
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
