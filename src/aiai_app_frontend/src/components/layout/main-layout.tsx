import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./navbar";
import { Footer } from "./footer";

import Home from "../pages/home";
import Featured from "../pages/featured";

const MainLayout = () => {
  return (
    <Router>
      <div className="grid grid-rows-[auto,1fr,auto] w-full h-screen">
        <header className="flex w-full flex-col mt-2 lg:container">
          <Navbar />
        </header>

        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/featured" element={<Featured />} />
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
