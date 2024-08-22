import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./navbar";
import { Footer } from "./footer";

import Home from "../pages/home";
import Models from "../pages/models";
import ModelDetails from "../pages/model-details";

const MainLayout = () => {
  return (
    <Router>
      <div className="grid grid-rows-[auto,1fr,auto] w-full h-screen">
        <header className="flex w-full flex-col mt-2 lg:container">
          <Navbar />
        </header>

        <main className="w-full font-mono">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/models" element={<Models />} />
            <Route path="/models/details/:id" element={<ModelDetails />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default MainLayout;
