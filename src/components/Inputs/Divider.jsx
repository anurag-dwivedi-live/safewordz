/**
 * Divider Component
 * 
 * A simple horizontal divider line component.
 * Supports both light and dark themes with appropriate color schemes.
 * 
 * @returns {JSX.Element} A horizontal divider line
 */
function Divider() {
    return (
        <div className='w-full h-[1px] bg-[#e2e8f0] dark:bg-[#94a3b8]'></div>
    )
}

export default Divider
