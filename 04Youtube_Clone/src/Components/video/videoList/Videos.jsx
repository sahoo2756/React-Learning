import { useEffect, useRef } from "react";
import { useSearchVideoByKeyword } from "../../../youtube_backend_logic/custom_hook/useSearchVideoByKeyword";
import LoderGif from "../../../../assets/loader.gif";
import { useSelector } from "react-redux";
import MachineOfflineComp from "./utils.jsx/MachineOfflineComp";
import LoadYoutubeMedia from "./utils.jsx/LoadYoutubeMedia";


function Videos() {
  const searchVideoByKeyword = useSearchVideoByKeyword();

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

  // const isErrorDuringVideoFetching = useSelector(
  //   (state) => state.problemOnApp?.isErrorDuringVideoFetching
  // );

  const isVideoFetchingAllow_Ref = useRef(null)

  useEffect(() => {
    // Scroll To Top
    function scrollToTop() {
      let topLength =
        (document.documentElement.scrollHeight + window.innerHeight) / 2;
      window.scrollTo({ top: topLength, behavior: "smooth" });
    }

    const handleScroll = async () => {
      const windowHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;
      const documentEleHeight = document.documentElement.scrollHeight;

      // (scrollTop + windowHeight) should is bigger than documentEleHeight then only allow to make api call for more videos
      if (isVideoFetchingAllow_Ref.current === false || (scrollTop + windowHeight + 20 < documentEleHeight)) {
        return;
      }

      isVideoFetchingAllow_Ref.current = false;
      // isVideoFetchingAllow_Ref.current = true; is set after the file fully mounts. This is why the code is placed inside useEffect, as shown below
      console.log('keywordmanas = ', navbarSearchBoxValue)
      await searchVideoByKeyword({
        keyword: navbarSearchBoxValue,
        replaceFlag: false,
      });
      setTimeout(() => {
        scrollToTop();
      }, 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarSearchBoxValue, isVideoFetchingAllow_Ref]);

  useEffect(() => {
    // isVideoFetchingAllow_Ref.current = true, is in useEffect to enable API requests only after all videos render successfully.
    isVideoFetchingAllow_Ref.current = true;
  }, [videoCollectionArray]);



  return (

    <div className="w-full">
      <LoadYoutubeMedia />

      {totalMediaLength > 0 && totalMediaLength < 150 && (
        <img src={LoderGif} className="w-8 pb-5 m-auto" />
      )}
    </div>

  );
}

export default Videos;
