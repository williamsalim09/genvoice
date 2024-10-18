// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiSettings, FiLogOut } from 'react-icons/fi'; // Using react-icons for settings and logout icons

const Navbar = ({ onLogout }) => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-3xl font-bold">GenVoice</h1>
      <div className="flex items-center space-x-4"> {/* Flexbox to align and space out icons */}
        <Link to="/settings" className="hover:text-gray-200">
          <FiSettings size={32} />
        </Link>
        <button onClick={onLogout} className="hover:text-gray-200">
          <FiLogOut size={32} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
