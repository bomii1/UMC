import clsx from "clsx";
import { THEME, useTheme } from "../context/ThemeProvider";

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();

    const isLightMode = theme === THEME.LIGHT;

    return (
        <button 
            className={clsx('px-4 py-2 nt-4 rounded-md transition-all', {
                'bg-black text-white': !isLightMode,
                'bg-white text-black': isLightMode
            })}
            onClick={toggleTheme}
        >
            {isLightMode ? '🌙 다크모드' : '☀️ 라이트모드'}
        </button>
    );
}

export default ThemeToggleButton;