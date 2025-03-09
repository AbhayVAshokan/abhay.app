import classNames from "classnames";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const handleThemeChange = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      className="flex items-center w-16 h-8 rounded-full bg-gray-300 dark:bg-gray-700 p-1 transition-all cursor-pointer fixed top-2 right-2"
      onClick={handleThemeChange}
    >
      <div
        className={classNames(
          "w-6 h-6 bg-white dark:bg-black rounded-full flex items-center justify-center shadow-md transform transition-transform duration-300",
          { "translate-x-8": isDark },
        )}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-yellow-400" />
        ) : (
          <Sun className="w-4 h-4 text-yellow-500" />
        )}
      </div>
    </button>
  );
};

export default ThemeSwitcher;
