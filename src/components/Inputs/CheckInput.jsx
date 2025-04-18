/**
 * CheckInput Component
 * 
 * A custom styled checkbox input component with toggle functionality.
 * Features smooth transitions and supports both light and dark themes.
 * 
 * @param {string} id - Unique identifier for the checkbox input
 * @param {string} placeholderText - Text label for the checkbox
 * @param {function} onValueChange - Callback function when checkbox state changes
 * @param {boolean} valueText - Initial checked state of the checkbox
 * @returns {JSX.Element} A styled checkbox input with label
 */
function CheckInput({ id, placeholderText, onValueChange, valueText }) {
    return (
        <div className='flex mr-4 items-center'>
            {/* Checkbox label */}
            <span>{placeholderText}</span>
            {/* Custom styled checkbox container */}
            <div className="relative inline-block w-9 h-5 ml-2">
                {/* Hidden checkbox input */}
                <input
                    id={id}
                    type="checkbox"
                    className="peer appearance-none w-9 h-5 rounded-full bg-slate-200 dark:bg-slate-700 checked:bg-[#2563eb] cursor-pointer transition-colors duration-300"
                    onChange={onValueChange}
                    defaultChecked={valueText}
                />
                {/* Custom toggle switch appearance */}
                <label
                    htmlFor={id}
                    className="absolute top-0 left-0 w-5 h-5 rounded-full bg-white dark:bg-slate-300 border border-slate-200 dark:border-slate-500 shadow-sm transition-transform duration-300 peer-checked:translate-x-4 peer-checked:border-blue-600 dark:peer-checked:border-blue-400 cursor-pointer"
                ></label>
            </div>
        </div>
    )
}

export default CheckInput
