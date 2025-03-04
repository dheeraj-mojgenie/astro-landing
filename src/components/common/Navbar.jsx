import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current path

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full py-4 px-4 sm:py-4 sm:px-8 md:py-8 md:px-16 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-lg bg-white/30 dark:bg-gray-900/30  dark:border-gray-700'
          : 'bg-transparent'
      }`}
    >
      <div className="flex flex-wrap items-start justify-between">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse md:pb-5 xl:pb-0"
        >
          <img
            src="/assets/img/png/logo.png"
            className="h-16 sm:h-20 md:h-28 lg:max-w-[358px]"
            alt="Logo"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto h-full`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col flex-wrap font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-900/90 md:dark:bg-transparent dark:border-gray-700 gap-5">
            {[
              { name: 'About', href: '/#about' },
              { name: 'Tariff', href: '/#message' },
              { name: 'Abstract', href: '/abstract' },
              { name: 'Scientific', href: '/scientific' },
              { name: 'Accommodations', href: '/accommodations' },
              { name: 'Attractions', href: '/attractions' },
              { name: 'Download', href: '/download' },
              { name: 'Contact Us', href: '/contact' },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`block py-2 px-3 md:p-0 text-base sm:text-lg md:text-base lg:text-lg text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent nav-link transition-colors duration-300 ${
                    location.pathname === item.href
                      ? 'text-blue-700 dark:text-blue-500 font-semibold'
                      : ''
                  }`}
                  onClick={() => setMenuOpen(false)} // Close menu on mobile when a link is clicked
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
