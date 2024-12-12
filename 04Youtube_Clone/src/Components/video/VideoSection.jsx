import { Outlet } from "react-router-dom"
import LeftNavigation from "./Leftnavigation"
import VideoList from "./videoList/VideoList"
import MachineOfflineComp from "./videoList/utils.jsx/MachineOfflineComp";
import { useSelector } from "react-redux";

function VideoSection() {

  const isClientMachineOnline = useSelector(
    (state) => state.machineInternetInfo?.isMachineOnline
  );

  const navbarSearchBoxValue = useSelector(
    (state) => state?.navbarSearchBox?.navbarSearchBoxValue
  );

  const youtubeMedias = useSelector(
    (state) => state?.videoCollection?.youtubeMedias || []
  );
  const { videoCollectionArray, shortsCollectionArray } = youtubeMedias
  const totalMediaLength = videoCollectionArray.length + shortsCollectionArray.length


  if (isClientMachineOnline === false) {
    return (
      <div className="w-full box-border  flex  justify-between ">
        <LeftNavigation />
        <MachineOfflineComp />
      </div>
    )
  }

  let currentPath = document.location.pathname

  if (
    Boolean(navbarSearchBoxValue) === false &&
    totalMediaLength === 0 &&
    currentPath === '/'
  ) {
    // it means it is intial render so show "try searching result"
    return (
      <div className="w-full box-border  flex  justify-between ">
        <LeftNavigation />

        {/* execute at intial render if user not signe in */}
        <div className="mt-10 px-10 py-5 bg-[#212121] shadow-lg border-[0.1px] border-gray-500 rounded-lg text-center absolute left-[50%] translate-x-[-50%]">
          <p className="font-semibold text-xl text-center mb-2">
            Try Searching to Get Started At MyTube Web App
          </p>
          <span className="text-sm text-gray-300">
            Start watching videos to help us build a feed of videos you'll love.
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full box-border  flex  justify-between ">
      <LeftNavigation />



      <Outlet />
      {/* <VideoList /> */}
    </div>
  )
}

export default VideoSection