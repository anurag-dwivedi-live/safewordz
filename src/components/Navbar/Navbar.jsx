/**
 * Navbar Component
 * 
 * The main navigation bar of the application.
 * Features the app logo, title, and theme toggle button.
 * Supports dark mode with smooth transitions.
 * 
 * @returns {JSX.Element} A responsive navigation bar with theme toggle
 */
import ThemeButton from "../Buttons/ThemeButton";
import LogoImage from "../Logo/LogoImage";

function Navbar() {
    return (
        <nav className='w-full py-5 flex justify-around items-center sticky top-0 z-50 bg-[#f0f4f8] shadow select-none dark:bg-[#0f172a] transition-colors duration-300 ease-in-out'>
            {/* App logo and title */}
            <a href='/' className='text-2xl font-bold flex items-center text-[#2563eb] dark:text-[#f8fafc]'>
                <LogoImage />
            </a>
            {/* Theme toggle button */}
            <ThemeButton />
        </nav>
    )
}

export default Navbar;
