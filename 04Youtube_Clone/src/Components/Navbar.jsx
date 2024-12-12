import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube, FaSearch, FaMicrophone } from "react-icons/fa";
import { memo, useEffect, useState } from "react";
// import hamburgerContext from "../context/HamburgerContext.jsx";
import CaptureKeyword_BY_MicroPhone from "./microPhone/CaptureKeyword_BY_MicroPhone";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useSearchVideoByKeyword } from "../youtube_backend_logic/custom_hook/useSearchVideoByKeyword.js";
// import videoListContext from "../context/videoListContext.jsx";
// import navbarContext from "../context/NavbarContext.jsx";
import { useDispatch, useSelector } from "react-redux";
import { toggleHumburgerIconBooleanValue } from "../features/humburger/humburgerSlice.js";
import {
  updateNavbarSearchBoxValue,
} from "../features/navbar/navbarSearchBoxSlice.js";

// Reusable Input + Button Component for Search
const SearchBar = memo(({ dispatch }) => {
  const searchVideoByKeyword = useSearchVideoByKeyword();

  const navigate = useNavigate()
  
  const navbarSearchBoxValue = useSelector(
    (state) => state?.navbarSearchBox?.navbarSearchBoxValue
  );

  const [tempInputValue, setTempInputValue] = useState("");

  const handleUserInput = (event) => {
    event.preventDefault();
    if (tempInputValue.trim() === "") {
      return;
    }
    dispatch(updateNavbarSearchBoxValue({ search_query : tempInputValue }));

    let structure_search_query = tempInputValue.split(' ').filter(str => str.trim() !== "").join('+')

    // /result page only show case the video or shorts result fullScreen available in /watch and /shorts url
    navigate(`/result?search_query=${structure_search_query}`)
    
    searchVideoByKeyword({keyword : tempInputValue , replaceFlag: true });
  };

  useEffect(() => {
    if (navbarSearchBoxValue === tempInputValue) return;
    setTempInputValue(navbarSearchBoxValue);
  }, [navbarSearchBoxValue]);

  return (
    <form onSubmit={handleUserInput} className="relative flex w-full">
      <input
        className="relative w-full border-2 border-gray-500 border-r-0 rounded-l-full pl-3 py-2"
        type="search"
        placeholder="Search videos"
        spellCheck={false}
        value={tempInputValue}
        onChange={(e) => setTempInputValue(e.target.value)}
      // onKeyDown={e => (e.key === 'Enter') && handleUserInput()}
      />
      <button
        type="submit"
        className="px-3 border-2 border-gray-500 rounded-r-full bg-gray-800 hover:bg-gray-700"
      >
        <FaSearch />
      </button>
    </form>
  );
});

// Navbar Component
function Navbar() {
  // const { setHamburgerIconCLick } = useContext(hamburgerContext)
  const [isVoiceSearchEnabled, setIsVoiceSearchEnabled] = useState(false);

  const dispatch = useDispatch();
  // toggleHumburgerIconBooleanValue

  return (
    <nav
      style={{ height: "var(--navbar-height)" }}
      className="sticky z-[2000] top-0 flex items-center justify-between px-5 py-2 bg-[#0F0F0F]"
    >
      {/* Left Section - Hamburger Menu and Logo */}

      <div className="flex items-center space-x-3 ">
        <button
          onClick={() => dispatch(toggleHumburgerIconBooleanValue())}
          className="hover:bg-gray-700 px-3 py-3 hover:rounded-full"
        >
          <RxHamburgerMenu className="text-2xl" />
        </button>
        <div className="flex items-center gap-x-2">
          <FaYoutube className="text-red-500 text-3xl" />
          <span className="text-2xl font-thin">MyTube</span>
        </div>
      </div>

      {/* Middle Section - Search Bar and Microphone */}
      <div className="flex items-center gap-x-4 w-1/2 ">
        <SearchBar dispatch={dispatch} />
        <div
          onClick={() => setIsVoiceSearchEnabled(!isVoiceSearchEnabled)}
          className="px-4 py-4 rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer"
          title="search with your voice"
        >
          <FaMicrophone />
        </div>
      </div>

      {isVoiceSearchEnabled && (
        <CaptureKeyword_BY_MicroPhone
          setIsVoiceSearchEnabled={setIsVoiceSearchEnabled}
        />
      )}

      {/* Right Section - Profile or Initial */}
      <div className="flex flex-row-reverse items-center w-[15%]  ">
        {/* <h1 className="text-lg font-bold px-4 py-3 rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer">M</h1> */}

        <Link to="/signin">
          <div className="flex gap-x-2 items-center border-[1px] border-gray-600 hover:bg-gray-700 px-2 py-1 rounded-full cursor-pointer">
            <FaRegCircleUser />
            <span className="text-sm font-semibold">Sign in</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
