import { Sparkles } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-4 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <h2 className="flex items-center gap-2 text-purple-400 text-2xl sm:text-3xl md:text-4xl font-extrabold cursor-pointer hover:scale-110 hover:text-purple-500 transition duration-300">
            <Sparkles className="text-yellow-600 animate-pulse" />
            AI Master Ji
            <Sparkles className="text-yellow-600 animate-pulse" />
          </h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
