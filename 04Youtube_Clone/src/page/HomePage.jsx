import Navbar from "../Components/Navbar.jsx";
import VideoSection from "../Components/video/VideoSection";
import { HamburgerContextProvider } from "../context/HamburgerContext.jsx";


function HomePage() {
  return (
    <div style={{ boxSizing: "border-box" }} className="box-border bg-[#0F0F0F] text-white">
      <HamburgerContextProvider>
        <Navbar />
        <VideoSection />
      </HamburgerContextProvider>
    </div>
  )
}

export default HomePage