/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Therapy from "./components/therapy/Therapy";
import Retreats from "./components/retreats/Retreats";
import Contact from "./components/contact-us/Contact";
import HomePage from "./components/home-page/HomePage";
import AboutPage from "./components/about-us/AboutPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/therapy" element={<Therapy />} />
          <Route path="/retreats" element={<Retreats />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Therapy />} /> {/* Default to therapy */}
        </Routes>
      </div>
    </Router>
  );
}
