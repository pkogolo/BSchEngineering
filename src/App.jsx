import "./App.css";
import Navbar from "../src/Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import ClosureImage from "./Components/ClosureImage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Admissions from "./Pages/Admissions";
import Curriculum from "./Pages/Curriculum";
import Register from "./Pages/Register";
import PortalDashboard from "./Pages/PortalDashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-[#FAF9F6] ">
        <div className="fixed w-full z-50">
          <Navbar />
        </div>

        <div className="w-full sm:px-16 px-4 pt-40 ">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/admissions" exact>
              <Admissions />
            </Route>
            <Route path="/curriculum" exact>
              <Curriculum />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Route path="/portal" exact>
              <PortalDashboard />
            </Route>
          </Switch>
          <ClosureImage />
        </div>

        <div className="w-full">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
