import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { GoDownload } from "react-icons/go";

async function fetchVideoMetaData(videosId) {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videosId.join(
        ","
    )}&key=${api_key}`;
    let res = await fetch(url).then((res) => res.json());

    if (!res.ok) {
        return []
    }

    // res.items.forEach((item) => {
    //     video_Duration_Views_Like_DataMap.set(item.id, {
    //         videoId: item.id,
    //         videoThumnail:
    //             item.snippet.thumbnails.maxres?.url ||
    //             item.snippet.thumbnails.medium?.url ||
    //             "",
    //         videoDuration: format_iso_duration_to_HMS(
    //             item.contentDetails.duration
    //         ),
    //         videosViewsCount:
    //             formatNumberAbbreviation(item.statistics.viewCount) + " views",
    //         videoLikeCount:
    //             formatNumberAbbreviation(item.statistics.likeCount || 0) + " likes",
    //     });
    // });
}

export default function FullVideo() {
    const channelLogo = `https://yt3.ggpht.com/CtGV_B8MeX828s5O92l3fI1WSSfPMji3XAuhOC0mYORktfpu9R8uxYF7OlRZeu5d6YS5vIpM6A=s88-c-k-c0x00ffffff-no-rj`;

    let videoId = null

    // if (document.location.pathname === '/watch') {
    //     let params = new URLSearchParams(document.location.pathname)
    //     videoId = params.get('v');

    //     if (!videoId) {
    //         return;
    //         // do somthing
    //     }
    // }

    return (
        <div className={`relative w-full h-[35rem] pb-5 flex flex-col`}>
            <iframe
                className="w-full h-full rounded-xl"
                style={{ boxShadow: "0 -3px 6px #433D36" }}
                // src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&rel=0&modestbranding=1&amp&controls=0&showinfo=0&fs=0`}
                src="https://www.youtube.com/embed/tpCDwnmkeoY?si=RXllTNeOiX-DakHz"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>

            <div id="videoMetaData">
                <p id="video-title" className="text-xl font-semibold py-5">
                    Good Vibes Music 🍇 Spotify Playlist Chill Vibes | Latest English
                    Songs With Lyrics
                </p>

                <div className="flex items-center justify-between">
                    <div id="leftSide" className="flex items-center gap-x-3">
                        <img
                            className="rounded-full w-10 h-10 bg-cover"
                            src={channelLogo}
                            alt=""
                        />
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold">Pen Movies</span>
                            <span className="text-sm text-gray-300">332k Suscribers</span>
                        </div>

                        <button
                            className="bg-white text-black px-4 py-2 rounded-full text-sm ml-5"
                            style={{ fontWeight: "500" }}
                        >
                            Subscribe
                        </button>
                    </div>

                    <div id="rightSide" className="flex gap-x-3">
                        <div
                            id="like_and_dislike"
                            className="bg-[#454444] text-xl text-white/80 px-4 py-2 rounded-full flex gap-x-3"
                        >
                            <button className="border-r-[0.5px] border-gray-400 pr-3">
                                <AiOutlineLike />
                            </button>
                            <button>
                                <BiDislike />
                            </button>
                        </div>

                        <div className="bg-[#454444] text-base text-white/80 px-3  flex items-center gap-x-2 rounded-full">
                            <IoIosShareAlt className="text-2xl" />
                            <span>Share</span>
                        </div>

                        <div className="bg-[#454444] text-base text-white/80 px-3  flex items-center gap-x-2 rounded-full">
                            <GoDownload />
                            <button>Download</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};