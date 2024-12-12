import { useRef, useState } from "react";

const SingleShortsMediaWithMetaData = ({ metaData }) => {
    // let url = `https://www.youtube.com/embed/3ucTDrHz9uE`
    // let videoThumnail = `https://i.ytimg.com/vi/h4_e4Pnebac/maxresdefault.jpg`
    // let videoTitle = "That One Rich Student in School 💰😎 #shorts #comedy #teratrigun #schoollife #richstudent"


    // let videosViewsCount = "3.6M views"
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
    // 0 - 639px: (default) 2 shorts per row
    // 640px - 1023px: (sm-md)  3 shorts per row
    // 1024px - 1279px: (lg)  4 shorts per row
    // 1280px - 1535px: (xl) 5 shorts per row
    // 1536px and above: (2xl) 6 shorts per row
   
    return (
        <div className="mb-2 w-[48%] sm:w-[30%]  lg:w-[23%] xl:w-[18%] 2xl:w-[14%] h-[470px] flex flex-col border-[0.5px] border-gray-700 box-border  cursor-pointer">
            {/* Thumbnails & video duration */}
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative  w-[100%] h-[100%]  rounded-md shadow-2xl "
            >
                {isImgeHiding === false ? (
                    <img
                        src={videoThumnail}
                        className={`relative object-cover  w-[100%] h-[100%] rounded-lg shadow-2xl z-10`}
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
            </div>

            {/* Video meta data */}
            <div className="mt-3 pl-2">
                <p
                    className="max-h-16 mb-1 overflow-hidden text-ellipsis line-clamp-2 cursor-pointer caret-slate-950 text-sm font-semibold">
                    {/* Live | Syraputra Karna | Lorem ipsum dolor sit amet | Lorem, ipsum. | Lorem ipsum dolor sit amet. */}
                    {videoTitle}
                </p>
                <span className="text-sm">
                    {/* 15M views */} {videosViewsCount}
                </span>

            </div>
        </div>
    );
};

export default SingleShortsMediaWithMetaData