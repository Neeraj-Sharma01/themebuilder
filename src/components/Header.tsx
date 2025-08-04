import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md p-4 z-10 flex justify-between items-center">
      <div className="text-xl font-bold">MultiThemeApp</div>
      <select
        className="p-2 rounded border"
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}
      >
        <option value="theme1">Theme 1</option>
        <option value="theme2">Theme 2</option>
        <option value="theme3">Theme 3</option>
      </select>
    </header>
  );
};

export default Header;
