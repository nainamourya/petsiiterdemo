import { useState, useRef, useEffect } from "react";
import { User, LogOut, Settings, Heart, ChevronDown } from "lucide-react";

export default function Navbar({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [user, setUser] = useState(null);

  const dropdownRef = useRef(null);
  const serviceRef = useRef(null);

  // Load user on first render
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    onNavigate("home");
  };

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onNavigate("home")}
        >
          <span className="text-2xl">🐾</span>
          <h1 className="text-xl font-bold tracking-tight text-gray-900">
            PetSitter
          </h1>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li
            className="hover:text-black cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            Home
          </li>
          <li
            className="hover:text-black cursor-pointer"
            onClick={() => onNavigate("about")}
          >
            About
          </li>

          {/* Services with Dropdown */}
          <li
            className="relative group"
            ref={serviceRef}
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
          >
            <div
              className="flex items-center gap-1 hover:text-black cursor-pointer"
              onClick={() => onNavigate("services")}
            >
              Services
              <ChevronDown className="w-4 h-4" />
            </div>

            {serviceOpen && (
              <div className="absolute left-0 mt-0 w-48 rounded-xl bg-white shadow-xl border overflow-hidden">
                <ul className="py-2 text-sm text-gray-700">
                  <li
                    className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                    onClick={() => onNavigate("services")}
                  >
                    Cat Sitter
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                    onClick={() => onNavigate("services")}
                  >
                    Dog Sitter
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                    onClick={() => onNavigate("services")}
                  >
                    Cat Boarding
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="hover:text-black cursor-pointer">Pricing</li>
          <li className="hover:text-black cursor-pointer">Contact</li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button className="hidden md:inline-flex px-5 py-2 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-900 transition">
            Become a Sitter
          </button>

          {/* Avatar */}
          <div
            className="relative group"
            ref={dropdownRef}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:ring-2 ring-black transition overflow-hidden">
              {user ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-5 h-5 text-gray-700" />
              )}
            </button>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 mt-0 w-56 rounded-xl bg-white shadow-xl border overflow-hidden">
                <div className="px-4 py-3 border-b">
                  {user ? (
                    <>
                      <p className="text-sm font-semibold text-gray-900">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </>
                  ) : (
                    <>
                      <p className="text-sm font-semibold text-gray-900">
                        Welcome, Guest
                      </p>
                      <p className="text-xs text-gray-500">
                        Please login to continue
                      </p>
                    </>
                  )}
                </div>

                <ul className="py-2 text-sm text-gray-700">
                  {user ? (
                    <>
                      <li
                        onClick={() => onNavigate("bookings")}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer"
                      >
                        <Heart className="w-4 h-4" /> My Bookings
                      </li>

                      <li
                        onClick={() => onNavigate("settings")}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer"
                      >
                        <Settings className="w-4 h-4" /> Settings
                      </li>
                      <li
                        onClick={logout}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer text-red-500"
                      >
                        <LogOut className="w-4 h-4" /> Logout
                      </li>
                    </>
                  ) : (
                    <li
                      onClick={() => onNavigate("login")}
                      className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                    >
                      Login / Register
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
