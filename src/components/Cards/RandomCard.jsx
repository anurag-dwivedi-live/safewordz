/**
 * RandomCard Component
 * 
 * A component for generating and customizing random passwords.
 * Features length customization, character type selection (numbers, symbols),
 * copy functionality, and refresh capability.
 * 
 * @returns {JSX.Element} A card containing password generation and customization options
 */
import { useCallback, useEffect, useState } from 'react'
import Divider from '../Inputs/Divider'
import OutputCard from '../Cards/OutputCard'
import RangeInput from '../Inputs/RangeInput';
import CheckInput from '../Inputs/CheckInput';
import CopyButton from '../Buttons/CopyButton';
import RefreshButton from '../Buttons/RefreshButton';

function RandomCard() {
    // State management for password generation
    const [length, setLength] = useState(8)
    const [isNumber, setIsNumber] = useState(false);
    const [isSymbols, setIsSymbols] = useState(false);
    const [password, setPassword] = useState("");
    const [isCopied, setIsCopied] = useState(false);

    /**
     * Generates a random password based on selected criteria
     * Supports letters, numbers, and symbols based on user selection
     */
    const generatePassword = useCallback(() => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const nums = "1234567890";
        const symbols = "!@#$%^&*()-_=+[]{}|;:',./<>?~`";

        // Build character set based on user selections
        let finalString = "";
        finalString += chars
        if (isNumber) finalString += nums
        if (isSymbols) finalString += symbols

        // Generate random password
        let randomString = "";
        for (let i = 0; i < length; i++) {
            let randomNumber = Math.floor(Math.random() * finalString.length)
            let randomChar = finalString.charAt(randomNumber)
            randomString += randomChar;
        }

        setPassword(randomString)
    }, [length, isNumber, isSymbols])

    // Generate new password when criteria changes
    useEffect(() => {
        generatePassword()
    }, [length, isNumber, isSymbols])

    return (
        <div className='flex flex-col'>
            {/* Card header */}
            <span className='my-4 text-sm'>Customize your new password</span>
            <Divider />
            
            {/* Length customization */}
            <RangeInput
                onRangeChange={(e) => setLength(Number(e.target.value))}
                rangeLength={length}
                placeholderText="Characters"
                minLength={4}
                maxLength={64}
            />
            <Divider />
            
            {/* Character type selection */}
            <div className="flex py-4 text-sm">
                <CheckInput
                    id="numbers"
                    placeholderText="Numbers"
                    onValueChange={() => setIsNumber((prev) => !prev)}
                    valueText={isNumber}
                />
                <CheckInput
                    id="symbols"
                    placeholderText="Symbols"
                    onValueChange={() => setIsSymbols((prev) => !prev)}
                    valueText={isSymbols}
                />
            </div>
            <Divider />
            
            {/* Generated password display */}
            <OutputCard password={password} />
            
            {/* Action buttons */}
            <div className="flex space-x-2 mt-5">
                <CopyButton
                    isCopied={isCopied}
                    onCopy={() => {
                        setIsCopied(true);
                        setTimeout(() => setIsCopied(false), 2000);
                    }}
                    copyText={password}
                />
                <RefreshButton generatePassword={generatePassword} />
            </div>
        </div>
    )
}

export default RandomCard
