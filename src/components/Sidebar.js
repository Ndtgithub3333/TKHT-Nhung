import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';

function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-y-0 right-0 w-64 bg-white shadow-xl transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out z-20`}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={onClose} className="p-2">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="space-y-4">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            to="/realtime"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
            onClick={onClose}
          >
            Real-time
          </Link>
          <Link
            to="/analytics"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
            onClick={onClose}
          >
            Analytics
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
            onClick={onClose}
          >
            About Us
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;