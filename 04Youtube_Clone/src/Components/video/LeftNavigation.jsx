import { IoHome } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
// import { useContext, useState } from "react";


const MinimalLeftNavigation = () => {

  const defaultIconcss = "text-xl"
  const defaultIconParameterCss = "text-xs font-no"
  document.documentElement.style.setProperty('--leftNavigation_width', '5%');


  const Element = ({ icon, iconName }) => {
    return (
      <div className="hover:bg-white/10 rounded-lg py-2 text-center cursor-pointer">
        <button className={`${defaultIconcss}`}>{icon}</button>
        <p className={`${defaultIconParameterCss} font-normal`}>{iconName}</p>
      </div>
    )
  }

  return (
    <div
      style={{
        height: "calc(100vh - var(--navbar-height))",
        top: "var(--navbar-height)",
        width : "var(--leftNavigation_width)"
      }}
      className='sticky left-0  h-full text-left box-border pt-5 px-1 flex flex-col gap-y-10'
    >

      <Element icon={<IoHome />} iconName={"Home"} />
      <Element icon={<SiYoutubeshorts />} iconName={"Shorts"} />
      <Element icon={<MdSubscriptions />} iconName={"Subscription"} />
      <Element icon={<CgProfile />} iconName={"You"} />

    </div>
  )
}


import { PiGreaterThanBold  } from "react-icons/pi";
import { FaHistory } from "react-icons/fa";
import { RiPlayList2Fill } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { IoTrendingUpSharp } from "react-icons/io5";
import { GiSatelliteCommunication } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa6";
import { TfiCup } from "react-icons/tfi";
import { CgGirl } from "react-icons/cg";
import { MdOutlinePodcasts } from "react-icons/md";


const ExpandLeftNavigation = () => {

  document.documentElement.style.setProperty('--leftNavigation_width', '15%');


  const defaultIconcss = "text-lg"
  const defaultIconParameterCss = "text-md "

  const Element = ( { icon , iconName } ) => {
    return (
      <div className="hover:bg-white/10 border rounded-lg cursor-pointer py-3 px-3 flex items-center gap-x-5  text-center">
        <button className={`${defaultIconcss}`}>{icon}</button>
        <p className={`${defaultIconParameterCss} text-nowrap`}>{iconName}</p>
      </div>
    )
  }


  return (
    <div
      style={{
        height: "calc(100vh - var(--navbar-height))",
        top: "var(--navbar-height)",
        width : "var(--leftNavigation_width)"
      }}
      className='sticky overflow-y-auto scrollbar-hide  left-0 h-full text-left px-5 pt-5 flex flex-col gap-y-2'
    >

      <Element icon={<IoHome />} iconName={"Home"} />
      <Element icon={<SiYoutubeshorts />} iconName={"Shorts"} />
      <Element icon={<MdSubscriptions />} iconName={"Subscription"} />

      <span className="border-t-[1px] border-gray-600 pr-5 mb-2"></span>

      <div className="flex items-baseline  gap-x-2 hover:bg-white/10 rounded-lg cursor-pointer py-3 px-3 ">
        <span className="font-bold">You</span>
        <span className="font-thin text-gray-300 text-xs pt-2"><PiGreaterThanBold className="" /> </span>
      </div>

      
      <Element icon={<FaHistory />} iconName={"History"} />
      <Element icon={<RiPlayList2Fill />} iconName={"Playlist"} />
      <Element icon={<MdOutlineWatchLater />} iconName={"Watch Later"} />
      <Element icon={<AiFillLike />} iconName={"Liked Videos"} />

      <p className="hover:bg-white/10 rounded-lg cursor-pointer py-3 px-3 font-bold">Explore</p>

      <Element icon={<IoTrendingUpSharp />} iconName={"Trending"} />
      <Element icon={<GiSatelliteCommunication />} iconName={"Live"} />
      <Element icon={<IoGameController />} iconName={"Gaming"} />
      <Element icon={<FaRegNewspaper />} iconName={"News"} />
      <Element icon={<TfiCup />} iconName={"Sports"} />
      <Element icon={<CgGirl />} iconName={"Fashion & Beauty"} />
      <Element icon={<MdOutlinePodcasts />} iconName={"Podcast"} />

    </div>
  )
}

// import hamburgerContext from "../../context/HamburgerContext.jsx";
import { useSelector } from "react-redux";
function LeftNavigation() {
  
  // const {hamburgerIconClick} = useContext(hamburgerContext);
  const isHamburgerIconClicked = useSelector(state => state?.humburger?.isHamburgerIconClicked)

  return (
    <>
      {
        (isHamburgerIconClicked === true) ? <ExpandLeftNavigation /> : <MinimalLeftNavigation />
      }
    </>
  )
}

export default LeftNavigation