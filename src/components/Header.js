import { useRef, useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import useOutsideClick from '../hooks/useOutsideClick';

const Header = ({ homeRef, aboutRef, contactRef }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDropdown = (dropdown) => {
    setActiveDropdown(dropdown === activeDropdown ? null : dropdown);
  };

  useOutsideClick(dropdownRef, () => setActiveDropdown(null));

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`bg-gray-900 p-4 ${isSticky ? 'sticky top-0 z-50' : ''} transition-all duration-300`}>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl text-white">Aphrohera Games</h1>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isMenuOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path>
            </svg>
          </button>
        </div>
      </div>
      <nav className={`mt-2 space-x-4 relative ${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-4`}>
        <div className="md:hidden flex flex-col space-y-2">
          <button onClick={() => { scrollToRef(homeRef); setIsMenuOpen(false); }} className="text-white">Home</button>
          <button onClick={() => { scrollToRef(aboutRef); setIsMenuOpen(false); }} className="text-white">About us</button>
          <button onClick={() => { scrollToRef(contactRef); setIsMenuOpen(false); }} className="text-white">Contact Us</button>
          <button className="text-white" onClick={() => { handleDropdown('services'); setIsMenuOpen(false); }}>
            Our Services
          </button>
          <button className="text-white" onClick={() => { handleDropdown('portfolio'); setIsMenuOpen(false); }}>
            Portfolio
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <button onClick={() => scrollToRef(homeRef)} className="text-white">Home</button>
          <button onClick={() => scrollToRef(aboutRef)} className="text-white">About us</button>
          <button onClick={() => scrollToRef(contactRef)} className="text-white">Contact Us</button>
          <span className="cursor-pointer relative text-white" onClick={() => handleDropdown('services')}>
            Our Services
          </span>
          <span className="cursor-pointer relative text-white" onClick={() => handleDropdown('portfolio')}>
            Portfolio
          </span>
        </div>
        {activeDropdown && (
          <div ref={dropdownRef} className="absolute left-0 mt-2 w-48 shadow-lg p-4 z-50">
            <Dropdown content={activeDropdown} />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
