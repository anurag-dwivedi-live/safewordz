/**
 * PinCard Component
 * 
 * A component for generating and customizing PIN numbers.
 * Features length customization, copy functionality, and refresh capability.
 * 
 * @returns {JSX.Element} A card containing PIN generation and customization options
 */
import { useCallback, useEffect, useState } from 'react'
import Divider from '../Inputs/Divider';
import RangeInput from '../Inputs/RangeInput';
import OutputCard from './OutputCard';
import CopyButton from '../Buttons/CopyButton';
import RefreshButton from '../Buttons/RefreshButton';

function PinCard() {
    // State management for PIN generation
    const [length, setLength] = useState(6);
    const [password, setPassword] = useState("");
    const [isCopied, setIsCopied] = useState(false);

    /**
     * Generates a random PIN of specified length
     * Uses only numeric characters (0-9)
     */
    const generatePIN = useCallback(() => {
        const nums = "1234567890";

        let randomString = "";
        for (let i = 0; i < length; i++) {
            let randomNumber = Math.floor((Math.random() * nums.length) + 1)
            let randomChar = nums.charAt(randomNumber)
            randomString += randomChar;
        }

        setPassword(randomString)
    }, [length])

    // Generate new PIN when length changes
    useEffect(() => {
        generatePIN()
    }, [length])

    return (
        <div className='flex flex-col'>
            {/* Card header */}
            <span className='my-4 text-sm'>Customize your new PIN</span>
            <Divider />
            
            {/* Length customization */}
            <RangeInput
                onRangeChange={(e) => setLength(Number(e.target.value))}
                rangeLength={length}
                placeholderText="Characters"
                minLength={4}
                maxLength={32}
            />
            <Divider />
            
            {/* Generated PIN display */}
            <OutputCard
                placeholderText="PIN"
                password={password}
            />
            
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
                <RefreshButton generatePassword={generatePIN} />
            </div>
        </div>
    )
}

export default PinCard
