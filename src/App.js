 import Navbar from "./Components/Global/Navbar";
 import Footer from "./Components/Global/Foot";
import About_us from "./Components/About_us/About_us";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact_us from "./Components/Contact_Us/Contact_us";
import Our_Team from "./Components/Our Team/Our_Team";
import Portfolio from "./Components/Portfolio/Portfolio";
 

function App() {
  return (
    <div className="App">
      <Navbar/>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about_us" element={<About_us />}></Route>
    <Route path="/contact_us" element={<Contact_us />}></Route>
    <Route path="/our_team" element={<Our_Team />}></Route>
    <Route path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
