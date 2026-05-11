import { IoIosSearch, IoIosMenu } from "react-icons/io";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "Features", "Layouts", "Pages", "Light Version"];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-end sm:justify-center px-4 py-4">
        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-orange-500"
            >
              {item}
            </a>
          ))}

          {/* Search */}
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search and hit enter"
              className="w-full border-b border-gray-300 py-2 pr-10 pl-2 text-sm italic transition-all focus:border-gray-500 focus:outline-none"
            />

            <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
              <IoIosSearch size={20} />
            </div>
          </div>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 lg:hidden"
        >
          <IoIosMenu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 border-t border-gray-200 bg-white px-4 py-4">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-orange-500"
            >
              {item}
            </a>
          ))}

          {/* Mobile Search */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search and hit enter"
              className="w-full border-b border-gray-300 py-2 pr-10 pl-2 text-sm italic transition-all focus:border-gray-500 focus:outline-none"
            />

            <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
              <IoIosSearch size={20} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
