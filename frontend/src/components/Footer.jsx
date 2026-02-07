import { Link } from "react-router-dom";
import { Brain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">

        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Brain className="w-8 h-8 text-orange-600" />
            <span className="text-2xl font-black tracking-tight">
              CORTEX
            </span>
          </div>
          <p className="text-gray-600 max-w-sm mx-auto md:mx-0">
            Clean, science-backed cognitive performance for people who think for a living.
          </p>
        </div>

        {/* Explore */}
        <div className="space-y-3">
          <h4 className="font-bold text-gray-900">Explore</h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/" className="hover:text-orange-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/ingredients" className="hover:text-orange-600 transition-colors">
                Ingredients
              </Link>
            </li>
            <li>
              <Link to="/flavors" className="hover:text-orange-600 transition-colors">
                Flavors
              </Link>
            </li>
            <li>
              <Link to="/science" className="hover:text-orange-600 transition-colors">
                Science
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-3">
          <h4 className="font-bold text-gray-900">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link
                to="/get-early-access"
                className="hover:text-orange-600 transition-colors font-medium"
              >
                Get Early Access
              </Link>
            </li>
            <li>
              <a href="#privacy" className="hover:text-orange-600 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-orange-600 transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CORTEX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
