import Navbar from './components/Navbar/Navbar'
import LeftSection from './components/Sections/LeftSection'
import RightSection from './components/Sections/RightSection'

function App() {
  return (
    <>
      <Navbar />
      <div className='flex flex-wrap'>
        <LeftSection />
        <RightSection />
      </div>
    </>
  )
}

export default App
