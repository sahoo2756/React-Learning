import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SomthingWentWrongUI from "./SomthingWentWrongUI";
import SingleShortsMediaWithMetaData from "./SingleShortsMediaWithMetaData";
import SingleVideoWithMetaData from "./SingleVideoWithMetaData";
import { arrangeYoutubeMedia } from "../../../../customAlgo/arrangeYoutubeMedia";

function LoadYoutubeMedia() {
  const youtubeApiMediaFetchingState = useSelector(
    (state) => state.videoCollection?.youtubeApiMediaFetchingState
  );
  const youtubeMedias = useSelector(
    (state) => state?.videoCollection?.youtubeMedias || []
  );
  const { videoCollectionArray, shortsCollectionArray } = youtubeMedias;

  const isErrorDuringVideoFetching = useSelector(
    (state) => state.problemOnApp?.isErrorDuringVideoFetching
  );

  // Additional variable for video/shorts display configuration
  const clientBrowserFullInnerWidth = window.innerWidth;
  let videosPerRow = null;
  let shortsPerRow = null;
  let totalMediaRows = null;

  // Breakpoints defining the number of videos and shorts per row based on screen width
  if (clientBrowserFullInnerWidth <= 639) {
    videosPerRow = 1;
    shortsPerRow = 2;
  } else if (clientBrowserFullInnerWidth <= 1023) {
    videosPerRow = 2;
    shortsPerRow = 3;
  } else if (clientBrowserFullInnerWidth <= 1279) {
    videosPerRow = 3;
    shortsPerRow = 4;
  } else if (clientBrowserFullInnerWidth <= 1535) {
    videosPerRow = 3;
    shortsPerRow = 5;
  } else {
    videosPerRow = 4;
    shortsPerRow = 6;
  }

  totalMediaRows =
    Math.round(videoCollectionArray.length / videosPerRow) +
    Math.round(shortsCollectionArray.length / shortsPerRow);

  const [resultToDisplay, setResultToDisplay] = useState([]);

  useEffect(() => {
    if (videoCollectionArray.length + shortsCollectionArray.length === 0) {
      return;
    }
    const result = arrangeYoutubeMedia(
      videoCollectionArray,
      shortsCollectionArray,
      videosPerRow,
      shortsPerRow,
      totalMediaRows
    );
    setResultToDisplay(result);
  }, [videoCollectionArray, shortsCollectionArray , videosPerRow,
    shortsPerRow,
    totalMediaRows]);

  useEffect(() => {
    // Resize handler for window resizing
    const handleResize = () => {
      const result = arrangeYoutubeMedia(
        videoCollectionArray,
        shortsCollectionArray,
        videosPerRow,
        shortsPerRow,
        totalMediaRows
      );
      setResultToDisplay(result);
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup resize event listener on unmount or when dependencies change
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [
    videoCollectionArray,
    shortsCollectionArray,
    videosPerRow,
    shortsPerRow,
    totalMediaRows,
  ]);

  return (
    <div
      id="parent"
      className="w-full flex flex-wrap gap-y-8 gap-x-5 justify-between"
    >
      {resultToDisplay.map((item, index) => {
        if (item.isShortsVideo === true) {
          return <SingleShortsMediaWithMetaData metaData={item} key={index} />;
        }
        return <SingleVideoWithMetaData key={index} metaData={item} />;
      })}

      {youtubeApiMediaFetchingState === "pending" && (
        <p
          className={`text-2xl font-mono absolute left-[50%] translate-x-[-50%] ${
            resultToDisplay.length === 0
              ? "top-[50%] translate-y-[-50%]"
              : "bottom-2"
          }`}
        >
          Loading ....
        </p>
      )}

      {isErrorDuringVideoFetching === true && <SomthingWentWrongUI />}
    </div>
  );
}

export default LoadYoutubeMedia;
