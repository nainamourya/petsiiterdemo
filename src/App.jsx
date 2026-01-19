import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Login from "./pages/Login";
import Bookings from "./pages/Bookings";
import Settings from "./pages/Settings";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <Login />;
      case "bookings": {
        const user = localStorage.getItem("user");
        if (!user) {
          localStorage.setItem("redirectAfterLogin", "bookings");
          return <Login onNavigate={setCurrentPage} />;
        }
        return <Bookings />;
      }
      case "settings": {
        const user = localStorage.getItem("user");
        if (!user) {
          localStorage.setItem("redirectAfterLogin", "settings");
          return <Login onNavigate={setCurrentPage} />;
        }
        return <Settings />;
      }
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "home":
      default:
        return <Hero />;
    }
  };

  return (
    <>
      <Navbar onNavigate={setCurrentPage} />
      {renderPage()}
    </>
  );
}

export default App;
