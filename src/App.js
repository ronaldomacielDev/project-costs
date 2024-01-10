import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Header from "./components/header/header-index";
import Home from "./pages/home/home-index";
import Company from "./pages/company/company-index";
import Contact from "./pages/contact/contact-index";
import NewProject from "./pages/newProject/newProject-index";

function App() {
  return (
    <BrowserRouter>    
      <div className="App">
        <p>Costs testando fonte</p>
        <Header/>
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/company" element={<Company />} />
              <Route path="/history" element={<Contact />} />
              <Route path="/newProject" element={<NewProject />} />
            </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
