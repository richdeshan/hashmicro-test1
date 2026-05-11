import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-center gap-8 border-b border-gray-200 bg-white p-4">
        {["Home", "Features", "Layouts", "Pages", "Light Version"].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-orange-500"
            >
              {item}
            </a>
          ),
        )}
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Search and hit enter"
            className="w-full border-b border-gray-300 py-2 pr-10 pl-2 italic focus:border-gray-500 focus:outline-none transition-all"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:cursor-pointer">
            <IoIosSearch size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
