/**
 * OutputCard Component
 * 
 * A component that displays generated password or PIN with appropriate styling.
 * Supports text selection and wraps long content.
 * 
 * @param {string} placeholderText - Label text for the output (default: "Password")
 * @param {string} password - The generated password or PIN to display
 * @returns {JSX.Element} A styled container displaying the generated output
 */
function OutputCard({ placeholderText = "Password", password}) {
    return (
        <>
            {/* Output label */}
            <span className='my-4 text-sm'>Generated { placeholderText }</span>
            {/* Output display with styling for selection and wrapping */}
            <span className='py-2 text-lg text-center border border-[#e2e8f0] dark:border-[#94a3b8] rounded wrap-anywhere select-text'>{password}</span>
        </>
    )
}

export default OutputCard
