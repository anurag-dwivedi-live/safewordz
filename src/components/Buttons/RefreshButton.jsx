/**
 * RefreshButton Component
 * 
 * A button component that triggers password regeneration.
 * Provides visual feedback with hover effects and maintains consistent styling.
 * 
 * @param {function} generatePassword - Callback function to generate a new password
 * @returns {JSX.Element} A button component with refresh functionality
 */
import React from 'react'

function RefreshButton({ generatePassword }) {
    return (
        <button
            onClick={() => generatePassword()}
            className='border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white flex items-center justify-center py-2 rounded-sm w-full text-sm transition-colors cursor-pointer'
        >
            Refresh Password
        </button>
    )
}

export default RefreshButton
