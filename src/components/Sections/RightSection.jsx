/**
 * RightSection Component
 * 
 * The right section of the application's main layout.
 * Contains the password generation interface with tabs for different types.
 * Features responsive design, dark mode support, and tab-based navigation.
 * 
 * @returns {JSX.Element} A section containing password generation tools
 */
import { useState } from 'react'
import { FaShuffle, FaHashtag } from "react-icons/fa6";
import RandomCard from '../Cards/RandomCard';
import PinCard from '../Cards/PinCard';

function RightSection() {
  // State for managing active tab (RANDOM or PIN)
  const [tab, switchTab] = useState("RANDOM")

  return (
    <div className='w-full md:w-1/2 pb-8 md:pb-0 md:min-h-[91.2vh] flex justify-center items-center md:bg-[#f0f4f8] text-[#1e293b] dark:text-[#f8fafc] dark:bg-[#0f172a] transition-colors duration-300 ease-in-out select-none'>
      <div className='max-w-[600px] flex justify-center items-center'>
        {/* Main card container */}
        <div className='bg-white dark:bg-[#1e293b] rounded-2xl p-8 w-screen'>
          <div className='flex flex-col'>
            {/* Tab section header */}
            <span className='text-sm'>Choose Password Type</span>
            {/* Tab navigation */}
            <div className='bg-[#e2e8f0] dark:bg-[#334155] px-1.5 py-1.5 mt-4 rounded-sm flex justify-between space-x-3'>
              {/* Random password tab */}
              <div
                onClick={() => tab !== "RANDOM" && switchTab("RANDOM")}
                className={`flex items-center justify-center py-2.5 rounded-sm w-full text-sm cursor-pointer ${tab === "RANDOM" ? "bg-white dark:bg-[#1e293b]" : ""}`}
              >
                <FaShuffle className='mr-1' />
                Random
              </div>
              {/* PIN tab */}
              <div
                onClick={() => tab !== "PIN" && switchTab("PIN")}
                className={`flex items-center justify-center py-2.5 rounded-sm w-full text-sm cursor-pointer ${tab === "PIN" ? "bg-white dark:bg-[#1e293b]" : ""}`}
              >
                <FaHashtag className='mr-1' />
                PIN
              </div>
            </div>
            {/* Tab content - Conditional rendering based on active tab */}
            {tab === "RANDOM" && (
              <RandomCard />
            )}
            {tab === "PIN" && (
              <PinCard />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSection;
