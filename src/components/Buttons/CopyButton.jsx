/**
 * CopyButton Component
 * 
 * A reusable button component that handles copying text to clipboard.
 * Supports both modern clipboard API and fallback method for older browsers.
 * 
 * @param {boolean} isCopied - Indicates if the text has been copied
 * @param {function} onCopy - Callback function to execute after successful copy
 * @param {string} copyText - The text to be copied to clipboard
 * @returns {JSX.Element} A button component with copy functionality
 */
function CopyButton({ isCopied, onCopy, copyText }) {
    /**
     * Handles the copy to clipboard operation
     * Uses modern clipboard API if available, falls back to document.execCommand
     * Shows success/error feedback to the user
     */
    const copyToClipboard = async () => {
        try {
            // Try using modern clipboard API first
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(copyText);
            } else {
                // Fallback method for older browsers
                const textarea = document.createElement('textarea');
                textarea.value = copyText;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.focus();
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
            }

            onCopy();
        } catch (err) {
            alert("Failed to copy!");
            console.error(err);
        }
    };

    return (
        <button
            onClick={() => copyToClipboard()}
            className={`${isCopied ? "bg-green-700 hover:bg-green-800" : "bg-[#2563eb] hover:bg-[#3b82f6]"} text-white flex items-center justify-center py-2 rounded-sm w-full text-sm transition-colors cursor-pointer`}
        >
            {isCopied ? "Copied \u2713" : "Copy Password"}
        </button>
    )
}

export default CopyButton
