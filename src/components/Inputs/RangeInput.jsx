/**
 * RangeInput Component
 * 
 * A customizable range input component for selecting numeric values within a specified range.
 * Displays the current value and provides visual feedback through styling.
 * 
 * @param {function} onRangeChange - Callback function when range value changes
 * @param {number} rangeLength - Current value of the range input
 * @param {string} placeholderText - Text to display next to the range input
 * @param {number} minLength - Minimum allowed value (default: 4)
 * @param {number} maxLength - Maximum allowed value (default: 64)
 * @returns {JSX.Element} A range input component with value display
 */
import React from 'react'

function RangeInput({ onRangeChange, rangeLength, placeholderText, minLength = 4, maxLength = 64 }) {
    return (
        <div className="py-3 flex justify-between items-center text-sm">
            {/* Label text */}
            <span className='pr-4'>{placeholderText}</span>
            {/* Range input slider */}
            <input
                type="range"
                className='w-full h-1 bg-[#e2e8f0] rounded-lg appearance-none cursor-pointer'
                style={{ accentColor: '#2563eb' }}
                min={minLength}
                max={maxLength}
                onChange={onRangeChange}
                defaultValue={rangeLength}
            />
            {/* Current value display */}
            <span className='ml-4 border border-[#e2e8f0] dark:border-[#94a3b8] p-2 rounded'>{rangeLength}</span>
        </div>
    )
}

export default RangeInput
