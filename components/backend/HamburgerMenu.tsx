import { useState } from 'react';
import { MenuIcon } from 'lucide-react';
import { useRouter } from 'next/router';

const HamburgerMenu: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    toggleMenu(); // Close menu after navigation
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
      >
        <MenuIcon className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75">
          <div className="absolute inset-y-0 left-0 flex flex-col w-64 bg-white shadow">
            <div className="p-4">
              <button
                onClick={() => handleNavigation('/')}
                className="block w-full py-2 text-left text-gray-800 hover:bg-gray-100"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('/about')}
                className="block w-full py-2 text-left text-gray-800 hover:bg-gray-100"
              >
                About
              </button>
              {/* Add more menu items as needed */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;