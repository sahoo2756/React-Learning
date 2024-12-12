import { useRef, useState } from "react";

export default function SingleVideoWithMetaData({ metaData }) {
    let {
        channelLogo,
        channelTitle,
        videoDuration,
        videoId,
        videoLikeCount,
        videoPublishAt,
        videoThumnail,
        videoTitle,
        videoUrl,
        videosViewsCount,
    } = metaData;
    // videoUrl = `https://www.youtube.com/embed/TIAC8BDIgdI`  (sample url coming from store videoCollectionArray)

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

    // Breakpoints defining the number of videos and shorts per row based on screen width:
    // 0 - 639px: (default) 1 video
    // 640px - 1023px: (sm-md) 2 videos
    // 1024px - 1535px: (lg-xl) 3 videos
    // 1536px and above: (2xl) 4 videos
    
    // 1280px - 1535px: (xl) 3 videos

    return (
        <div className="flex flex-col  w-[100%] sm:w-[48%] lg:w-[31%] 2xl:w-[23%] h-80 box-border boder cursor-pointer ">
            {/* Thumbnails & video duration */}
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
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
                    {/* 1:02:59 */} {videoDuration}
                </span>
            </div>

            {/* Video meta data */}
            <div className="flex mt-3">
                <div
                    style={{ userSelect: "none", pointerEvents: "none" }}
                    className="w-[10%] "
                >
                    <img
                        src={channelLogo}
                        className="rounded-full"
                        alt="Channel logo"
                        onError={(event) => {
                            event.target.className = "hidden";
                            event.target.parentNode.className = "hidden w-0";
                            event.onError = null;
                        }}
                    />
                </div>

                <div className="ml-3 text-wrap w-full text-xs">
                    <p
                        className="max-h-16 mb-1 overflow-hidden text-ellipsis cursor-pointer caret-slate-950 text-sm line-clamp-2"
                    >
                        {/* Live | Syraputra Karna | Lorem ipsum dolor sit amet | Lorem, ipsum. | Lorem ipsum dolor sit amet. */}
                        {videoTitle}
                    </p>

                    <p
                        id="channel-name"
                        className="cursor-pointer mb-0.5 caret-gray-700 text-slate-400 text-md"
                    >
                        {/* Sur Tv Myhto */} {channelTitle}
                    </p>
                    <p className="cursor-pointer caret-gray-700 text-slate-400 text-md">
                        <span id="views">
                            {/* 15M views */} {videosViewsCount}
                        </span>
                        <span id="video-upload-time">
                            {/* 7 months ago */} {videoPublishAt}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};