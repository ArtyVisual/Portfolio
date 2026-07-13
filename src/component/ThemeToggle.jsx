import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const getTheme = () => {
    return localStorage.getItem("theme") || "dark";
};

export default function ThemeToggle() {

    const [theme, setTheme] = useState(getTheme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === "dark" ? "light" : "dark");
    };

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
        >
            {theme === "dark"
                ? <FiSun size={18} />
                : <FiMoon size={18} />
            }
        </button>
    );
}