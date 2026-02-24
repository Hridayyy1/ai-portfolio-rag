import { Moon, Sun } from "lucide-react";

type Props = {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
};

const Navbar = ({ darkMode, setDarkMode }: Props) => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-[#0d1117]/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 px-10 py-4 flex justify-between items-center z-50 font-mono text-sm">
      <span className="text-indigo-500">&lt;hriday.dev /&gt;</span>

      <div className="flex items-center gap-6">
        <a href="#about" className="hover:text-indigo-500 transition">
          about
        </a>
        <a href="#projects" className="hover:text-indigo-500 transition">
          projects
        </a>
        <a href="#skills" className="hover:text-indigo-500 transition">
          skills
        </a>
        <a href="#chat" className="hover:text-indigo-500 transition">
          chat
        </a>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md transition"
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;