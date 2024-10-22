import React from 'react';


const SingleVideoWithMetaData = ({thumbnail , channelLogo }) => {
    return (
        <div className='w-[30%] cursor-pointer'>
            {/* Thumbnails & video duration */}
            <div className='relative rounded-md shadow-2xl'>
                <img
                    src={thumbnail}
                    className='relative w-[100%] rounded-lg shadow-2xl'
                    alt="Video thumbnail"
                />
                <span
                    style={{ userSelect: 'none' }}
                    className='absolute bottom-3 right-3 bg-gray-800 p-1 rounded-md shadow-lg'
                >
                    1:02:59
                </span>
            </div>

            {/* Video meta data */}
            <div className='flex mt-3'>
                <div
                    style={{ userSelect: 'none', pointerEvents: 'none' }}
                    className='w-[15%]'>
                    <img
                        src={channelLogo}
                        className='rounded-full'
                        alt="Channel logo"
                    />
                </div>

                <div className='ml-3 text-wrap w-full'>
                    <p
                        className='max-h-16 mb-2 overflow-hidden text-ellipsis line-clamp-1 cursor-pointer caret-slate-950 text-lg'
                        style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                        }}
                    >
                        Live | Syraputra Karna | Lorem ipsum dolor sit amet | Lorem, ipsum. | Lorem ipsum dolor sit amet.
                    </p>

                    <p
                        id="channel-name"
                        className='cursor-pointer mb-1 caret-gray-700 text-slate-400 text-md'>
                        Sur Tv Myhto
                    </p>
                    <p className='cursor-pointer caret-gray-700 text-slate-400 text-md'>
                        <span id="views">15M views</span> ,
                        <span id="video-upload-time">7 months ago</span>
                    </p>
                </div>
            </div>
        </div>
    )
}


function Videos() {
    let tempUrl = `https://i.ytimg.com/vi/RTePBZUrIBU/hqdefault.jpg?v=66f955a7&sqp=CLjYybgG-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBV4xPu0FUZcDn0vvGzD-V5ZjVwxA`;
    let channelLogo = `https://yt3.ggpht.com/TROQlM_ILGeDg6tXVgbsGoSLusZFCEYNubmKK4u4ORiy-KOgxmJ0CJNx6gNnq0lfPRfw_KgEhg=s68-c-k-c0x00ffffff-no-rj`;

    return (
        <div id="parent" className='w-fit flex flex-wrap  gap-y-10 justify-between '>
             <SingleVideoWithMetaData thumbnail={tempUrl} channelLogo={channelLogo} />
             <SingleVideoWithMetaData thumbnail={tempUrl} channelLogo={channelLogo} />
             <SingleVideoWithMetaData thumbnail={tempUrl} channelLogo={channelLogo} />
             <SingleVideoWithMetaData thumbnail={tempUrl} channelLogo={channelLogo} />
             <SingleVideoWithMetaData thumbnail={tempUrl} channelLogo={channelLogo} />
             <SingleVideoWithMetaData thumbnail={tempUrl} channelLogo={channelLogo} />
             <SingleVideoWithMetaData thumbnail={tempUrl} channelLogo={channelLogo} />
             <SingleVideoWithMetaData thumbnail={tempUrl} channelLogo={channelLogo} />
             <SingleVideoWithMetaData thumbnail={tempUrl} channelLogo={channelLogo} />
             <SingleVideoWithMetaData thumbnail={tempUrl} channelLogo={channelLogo} />
             <SingleVideoWithMetaData thumbnail={tempUrl} channelLogo={channelLogo} />
             <SingleVideoWithMetaData thumbnail={tempUrl} channelLogo={channelLogo} />
             <SingleVideoWithMetaData thumbnail={tempUrl} channelLogo={channelLogo} />
             <SingleVideoWithMetaData thumbnail={tempUrl} channelLogo={channelLogo} />
        </div>
    );
}

export default Videos;
