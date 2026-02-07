import { useState, useEffect } from "react";
import { User, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/flavors", label: "Flavors" },
    { to: "/science", label: "Science" },
    { to: "/ingredients", label: "Ingredients" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/60 backdrop-blur-xl shadow-sm border-b border-black/5"
          : "bg-transparent backdrop-blur-sm"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 md:gap-4 group relative z-50"
          >
            <div className="relative overflow-hidden rounded-full ring-2 ring-orange-100 group-hover:ring-orange-200 transition-all duration-300">
              <video
                src="/logo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-cover rounded-full transition-all duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold bg-linear-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent tracking-tight transition-all duration-300 group-hover:from-orange-500 group-hover:via-orange-400 group-hover:to-orange-600 leading-none">
                CORTEX
              </span>
              <span className="text-[10px] md:text-xs text-orange-600/70 font-semibold tracking-[0.2em] uppercase leading-none">
                Brain Performance
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`relative px-4 xl:px-5 py-2 text-sm xl:text-base font-medium transition-all duration-300 rounded-lg group ${location.pathname === link.to
                    ? "text-orange-600 bg-orange-50"
                    : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                    }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 h-0.5 bg-linear-to-r from-orange-500 to-orange-600 transition-all duration-300 transform -translate-x-1/2 ${location.pathname === link.to
                      ? "w-3/4"
                      : "w-0 group-hover:w-3/4"
                      }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">           

            <Link to="/get-early-access">
              <button className="relative overflow-hidden group rounded-full bg-linear-to-r from-orange-500 to-orange-600 px-5 xl:px-6 py-2 xl:py-2.5 text-sm xl:text-base font-semibold text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300">
                <span className="relative z-10"> Get Early Access</span>
                <div className="absolute inset-0 bg-linear-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>

          {/* Mobile Icons & Burger */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              to="/account"
              className="p-2 rounded-full hover:bg-orange-100 transition-all duration-200"
              aria-label="Account"
            >
              <User className="h-5 w-5 text-gray-700" />
            </Link>


            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-orange-100 transition-colors relative z-50"
              aria-label="Menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-2 left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                ></span>
                <span
                  className={`absolute top-3.5 left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                    }`}
                ></span>
                <span
                  className={`absolute top-5 left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-lg shadow-2xl transition-all duration-500 ease-out border-t border-orange-100 ${isMenuOpen
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 -translate-y-4 invisible"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
          {navLinks.map((link, index) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 transform ${location.pathname === link.to
                ? "text-orange-600 bg-orange-50 scale-105"
                : "text-gray-700 hover:text-orange-600 hover:bg-orange-50 hover:translate-x-2"
                }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-4 pb-2">
            <Link to="/get-early-access" className="block">
              <button className="w-full rounded-full bg-linear-to-r from-orange-500 to-orange-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105">
                Get Early Access
              </button>
            </Link>
          </div>
        </div>
      </div>


    </nav>
  );
};

export default Navbar;