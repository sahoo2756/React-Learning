import { RxHamburgerMenu } from "react-icons/rx"
import { FaYoutube, FaSearch, FaMicrophone } from "react-icons/fa";
import { memo, useContext, useState } from "react";
import hamburgerContext from "../context/HamburgerContext.jsx";
import CaptureKeyword_BY_MicroPhone from "./microPhone/CaptureKeyword_BY_MicroPhone";

// Reusable Input + Button Component for Search
const SearchBar = memo(() => {
  const { navbarSearchBoxvalue , setNavbarSearchBoxValue} = useContext(hamburgerContext)

  return (
    <div className="relative flex w-full">
      <input
        className="relative w-full border-2 border-gray-500 border-r-0 rounded-l-full pl-3 py-2"
        type="search"
        placeholder="Search videos"
        spellCheck={false}
        value={navbarSearchBoxvalue}
        onChange={(e) => setNavbarSearchBoxValue(e.target.value)}
      />
      <button className="px-3 border-2 border-gray-500 rounded-r-full bg-gray-800 hover:bg-gray-700">
        <FaSearch />
      </button>
    </div>
  )
})


// Navbar Component
function Navbar() {
  const { setHamburgerIconCLick } = useContext(hamburgerContext)
  const [isVoiceSearchEnabled, setIsVoiceSearchEnabled] = useState(false);

  return (
    <nav
      style={{ height: "var(--navbar-height)" }}
      className="sticky z-[2000] top-0 flex items-center justify-between px-5 py-2 bg-[#0F0F0F]"
    >
      {/* Left Section - Hamburger Menu and Logo */}

      <div className="flex items-center space-x-3 ">
        <button onClick={() => setHamburgerIconCLick(prev => !prev)} className="hover:bg-gray-700 px-3 py-3 hover:rounded-full"><RxHamburgerMenu className="text-2xl" /></button>
        <div className="flex items-center gap-x-2">
          <FaYoutube className="text-red-500 text-3xl" />
          <span className="text-2xl font-thin">MyTube</span>
        </div>
      </div>

      {/* Middle Section - Search Bar and Microphone */}
      <div className="flex items-center gap-x-4 w-1/2 ">
        <SearchBar />
        <div onClick={() => setIsVoiceSearchEnabled(!isVoiceSearchEnabled)} className="px-4 py-4 rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer" title="search with your voice">
          <FaMicrophone />
        </div>
      </div>

      {isVoiceSearchEnabled && <CaptureKeyword_BY_MicroPhone setIsVoiceSearchEnabled={setIsVoiceSearchEnabled} />}

      {/* Right Section - Profile or Initial */}
      <div className="flex flex-row-reverse items-center w-[15%]  ">
        <h1 className="text-lg font-bold px-4 py-3 rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer">M</h1>
      </div>
    </nav>
  );
}

export default Navbar;
