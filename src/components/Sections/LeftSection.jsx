/**
 * LeftSection Component
 * 
 * The left section of the application's main layout.
 * Contains the main heading, description, and GitHub link.
 * Features responsive design and dark mode support.
 * 
 * @returns {JSX.Element} A section containing the application's introduction and GitHub link
 */
import { FaGithub, FaArrowRightLong } from "react-icons/fa6";
import { LINKS } from '../../constants/constants';

function LeftSection() {
  return (
    <div className="md:min-[91.2vh] w-full md:w-1/2 flex p-28 md:pt-0 md:items-center justify-center bg-[#f0f4f8] px-6 select-none dark:bg-[#0f172a] transition-colors duration-300 ease-in-out">
      <div className="w-full md:max-w-[80%] items-center">
        {/* Main content container */}
        <div className="text-left space-y-6">
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] dark:text-[#f8fafc] leading-tight">
            Secure. Smart. Effortless.
          </h1>
          {/* Description text */}
          <p className="text-base md:text-lg text-[#475569] dark:text-[#94a3b8]">
            Instantly generate strong, secure passwords with just one click.
            Take control of your online safety with iPass.
          </p>

          {/* GitHub link button */}
          <div className="flex space-x-6">
            <a href={LINKS.github} target='_blank' className="flex justify-center items-center bg-[#2563eb] hover:bg-[#3b82f6] text-white px-5 py-3 rounded text-sm font-medium transition-all">
              <FaGithub className="text-lg" />
              <span className='mx-2'>View GitHub</span>
              <FaArrowRightLong />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSection
