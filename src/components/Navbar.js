import { Bars3Icon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ onMenuClick }) {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className=" mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Traffic Icon" className="h-16 w-16" />
            <span className="ml-3 text-3xl font-bold">
              Traffic Analysis System
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/realtime"
              className={`text-xl font-semibold hover:text-blue-600 transition-colors ${
                isActive('/realtime')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600'
              }`}
            >
              Real-time
            </Link>
            <Link
              to="/analytics"
              className={`text-xl font-semibold hover:text-blue-600 transition-colors ${
                isActive('/analytics')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600'
              }`}
            >
              Analytics
            </Link>
            <Link
              to="/overspeed"
              className={`text-xl font-semibold hover:text-blue-600 transition-colors ${
                isActive('/overspeed')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600'
              }`}
            >
              Overspeed
            </Link>
            <Link
              to="/about"
              className={`text-xl font-semibold hover:text-blue-600 transition-colors ${
                isActive('/about')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600'
              }`}
            >
              About Us
            </Link>
          </div>
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            <Bars3Icon className="h-8 w-8" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
