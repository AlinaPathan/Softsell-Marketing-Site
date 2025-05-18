import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <div className='text-teal-600 font-bold text-xl'>SoftSell</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#how-it-works"className="text-gray-700  hover:text-teal-600 dark:hover:text-teal-400 transition-colors">How It Works</a>
          <a href="#why-choose-us" className="text-gray-700  hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Why Choose Us</a>
          <a href="#testimonials" className="text-gray-700  hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Testimonials</a>
          <a href="#login" className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors">Login</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-teal-600">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-teal-600 to-teal-700 px-4 pb-4 text-white space-y-2">
          <a href="#how-it-works" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">How It Works</a>
          <a href="#why-choose-us" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Why Choose Us</a>
          <a href="#testimonials"  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Testimonials</a>
          <a href="#login"  className="block px-3 py-2 bg-teal-600 text-white text-center rounded-md hover:bg-teal-700 transition-colors">Login</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
