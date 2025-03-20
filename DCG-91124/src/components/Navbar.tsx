import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  activeSection: string;
  toggleMobileMenu: () => void;
  mobileMenuOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, toggleMobileMenu, mobileMenuOpen }) => {
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'speakers', label: 'Speakers' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'team', label: 'Team' },
    { id: 'venue', label: 'Venue' },
    { id: 'contact', label: 'Contact' },
    { id: 'code-of-conduct', label: 'Code of Conduct', isExternal: true }
  ];

  const teamItems = [
    { path: '/team/organizing', label: 'Organizing Team' },
    { path: '/team/advisory', label: 'Advisory Board' },
    { path: '/team/review', label: 'Review Board' },
    { path: '/team/volunteers', label: 'Volunteers' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 border-b border-[#333]">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <a href="#home" className="text-[#ff5500] font-bold text-xl tracking-wider hover-glitch">
            DCG - 91124
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              item.id === 'team' ? (
                <div key={item.id} className="relative group inline-flex items-center">
                  <a
                    href="#team"
                    className={`px-3 py-2 text-sm uppercase tracking-wider transition-all duration-300 hover:text-[#ff5500] inline-flex items-center ${
                      activeSection === item.id ? 'text-[#ff5500] border-b-2 border-[#ff5500]' : 'text-white hover:border-b-2 hover:border-[#ff5500]'
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={14} className="ml-1" />
                  </a>
                  <div className="absolute top-full left-0 mt-1 bg-black border border-[#333] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px]">
                    {teamItems.map((teamItem) => (
                      <Link
                        key={teamItem.path}
                        to={teamItem.path}
                        className="block px-4 py-2 text-sm uppercase tracking-wider hover:bg-[#ff5500] hover:text-black transition-colors duration-200 text-white"
                      >
                        {teamItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : item.isExternal ? (
                <Link
                  key={item.id}
                  to="/code-of-conduct"
                  className={`px-3 py-2 text-sm uppercase tracking-wider transition-all duration-300 hover:text-[#ff5500] ${
                    activeSection === item.id ? 'text-[#ff5500] border-b-2 border-[#ff5500]' : 'text-white hover:border-b-2 hover:border-[#ff5500]'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-3 py-2 text-sm uppercase tracking-wider transition-all duration-300 hover:text-[#ff5500] ${
                    activeSection === item.id ? 'text-[#ff5500] border-b-2 border-[#ff5500]' : 'text-white hover:border-b-2 hover:border-[#ff5500]'
                  }`}
                >
                  {item.label}
                </a>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#ff5500] focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 border-b border-[#333]">
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              item.id === 'team' ? (
                <div key={item.id} className="py-3">
                  <button
                    className={`flex items-center justify-between w-full text-sm uppercase tracking-wider transition-all duration-300 hover:text-[#ff5500] ${
                      activeSection === item.id ? 'text-[#ff5500]' : 'text-white'
                    }`}
                    onClick={() => setTeamDropdownOpen(!teamDropdownOpen)}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transform transition-transform duration-200 ${
                        teamDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {teamDropdownOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      {teamItems.map((teamItem) => (
                        <Link
                          key={teamItem.path}
                          to={teamItem.path}
                          className="block py-2 text-sm uppercase tracking-wider hover:text-[#ff5500] text-white"
                          onClick={toggleMobileMenu}
                        >
                          {teamItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.isExternal ? (
                <Link
                  key={item.id}
                  to="/code-of-conduct"
                  className="block py-3 text-sm uppercase tracking-wider transition-all duration-300 hover:text-[#ff5500] text-white"
                  onClick={toggleMobileMenu}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block py-3 text-sm uppercase tracking-wider transition-all duration-300 hover:text-[#ff5500] ${
                    activeSection === item.id ? 'text-[#ff5500]' : 'text-white'
                  }`}
                  onClick={toggleMobileMenu}
                >
                  {item.label}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;