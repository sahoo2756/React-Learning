import { useRef, useState } from "react";
import { useSelector } from "react-redux"


function SingleVideoWithMetaDataAtWatchVideo({ metaData }) {
    // let {
    //     channelLogo,
    //     channelTitle,
    //     videoDuration,
    //     videoId,
    //     videoLikeCount,
    //     videoPublishAt,
    //     videoThumnail,
    //     videoTitle,
    //     videoUrl,
    //     videosViewsCount,
    // } = metaData;
    const youtubeMedia = useSelector(state => state.videoCollection?.youtubeMedias);
    const { videoCollectionArray, shortsCollectionArray } = youtubeMedia;

    const videoThumnail = `https://i.ytimg.com/vi/wGZevrqB5Ys/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGE4gWyhlMA8=&rs=AOn4CLAqrsDbplC_xIxqCKhliUjwZ3SpiA`

    const [isImgeHiding, setIsImageHiding] = useState(false);
    const setTimeOutRef = useRef();

    const handleMouseEnter = () => {
        setTimeOutRef.current = setTimeout(() => {
            setIsImageHiding(true);
        }, 500);
    };

    const handleMouseLeave = () => {
        setIsImageHiding(false);
        clearInterval(setTimeOutRef.current);
    };

    return (
        <div className="flex  w-[100%] h-28 box-border boder cursor-pointer ">
            {/* Thumbnails & video duration */}
            <div
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
                className="relative w-full  h-full  rounded-md shadow-2xl "
            >
                {isImgeHiding === false ? (
                    <img
                        src={videoThumnail}
                        className={`relative object-cover w-[100%] h-[100%] rounded-lg shadow-2xl z-10`}
                        alt="Video thumbnail"
                    />
                ) : (
                    <iframe
                        className={`w-[100%] h-[100%] rounded-lg shadow-2xl absolute top-0 left-0 z-0`}
                        src={`${videoUrl}?autoplay=1&mute=1&rel=0&modestbranding=1&amp&controls=0&showinfo=0&fs=0`}
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                )}

                <span
                    style={{ userSelect: "none" }}
                    className="absolute bottom-2 right-3 text-sm bg-gray-800 px-1 pb-0.5 rounded-md shadow-lg z-10 "
                >
                    1:02:59
                    {/* {videoDuration} */}
                </span>
            </div>

            {/* Video meta data */}
            <div className="flex mt-3 w-full">
                <div className="ml-3 text-wrap w-full text-xs">
                    <p
                        className="max-h-16 mb-1 overflow-hidden text-ellipsis line-clamp-1 cursor-pointer caret-slate-950 text-sm"
                        style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                        }}
                    >
                        Live | Syraputra Karna | Lorem ipsum dolor sit amet | Lorem, ipsum. | Lorem ipsum dolor sit amet.
                        {/* {videoTitle} */}
                    </p>

                    <p
                        id="channel-name"
                        className="cursor-pointer mb-0.5 caret-gray-700 text-slate-400 text-md"
                    >
                        Sur Tv Myhto
                        {/* {channelTitle} */}
                    </p>
                    <p className="cursor-pointer caret-gray-700 text-slate-400 text-md">
                        <span id="views">
                            15M views
                            {/* {videosViewsCount} */}
                        </span>
                        <span id="video-upload-time">
                            7 months ago
                            {/* {videoPublishAt} */}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

function RecommendVideos() {
    return (
        <div className="w-[50%] flex flex-col gap-y-5">
            <p className="text-lg font-semibold font-mono caret-black">Recommend Video</p>
            <SingleVideoWithMetaDataAtWatchVideo metaData={{}} />
            <SingleVideoWithMetaDataAtWatchVideo metaData={{}} />
            <SingleVideoWithMetaDataAtWatchVideo metaData={{}} />
            <SingleVideoWithMetaDataAtWatchVideo metaData={{}} />
            <SingleVideoWithMetaDataAtWatchVideo metaData={{}} />
            <SingleVideoWithMetaDataAtWatchVideo metaData={{}} />

            
            <p className="mt-5 text-center font-semibold">Loading ...</p>
        </div>
    )
}

export default RecommendVideos