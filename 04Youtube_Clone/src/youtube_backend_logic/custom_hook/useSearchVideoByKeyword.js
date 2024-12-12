import { useDispatch, useSelector } from "react-redux";
import {
  addVideo_and_ShortsToCollectionArray,
  replaceVideo_and_ShortsCollectionArray,
  updateYoutubeApiMediaFetchingState_ToIdle,
  updateYoutubeApiMediaFetchingState_ToPending,
  updateNextPageToken,
} from "../../features/videoList/videoCollectionSlice.js";
import {
  formatNumberAbbreviation,
  format_iso_duration_to_HMS,
  getRelativeTimeDifference,
} from "../utils.js";
import { setErrorDuringVideoFetchingTrue } from "../../features/problemOnApp/problemOnAppSlice.js";



// let api_key = import.meta.env.VITE_api_key
const api_key = `AIzaSyCoumdxeYA_ahUXGtBYagS_HagABefLNAg`; //react-testing key-1
// const api_key = `AIzaSyBiRRoliElqnYKitt8bL3ME9-uHedM8l28`  //  youtube
// const api_key = `AIzaSyDLONVKd2eWrkG8uhm9n5KgyYPntdM15AU` //  my-first-project key-1
// const api_key = `AIzaSyBE0cBn4X7UA4ynhn2HOIEb4rezvIr6TF8`;  // react-testing key-2
// const api_key = `AIzaSyBKgvGPflrKA27K7CONHWLxGt41_noaiaY` //  my-first-project key-2
// const api_key = 'AIzaSyD5bzP72UCMlsjHf4WBXI1Oo0M9am1fxBA';  // react-testing key-3

async function fetchVideoSearchResults(keyword, nextPageToken) {
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&pageToken=${nextPageToken}&q=${keyword}&type=video&key=${api_key}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return [];
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

async function fetchVideoMetaData(videosId) {
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videosId.join(
    ","
  )}&key=${api_key}`;
  return await fetch(url).then((res) => res.json());
}

async function fetchChannelMetaData(channelsId) {
  const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelsId.join(
    ","
  )}&key=${api_key}`;
  return await fetch(url).then((res) => res.json());
}

export function useSearchVideoByKeyword() {
  // const { videoCollectionArray, nextPageToken = "" } = useSelector(
  //   (state) => state?.videoCollection
  // );
  
  const youtubeMedias = useSelector(
    (state) => state?.videoCollection?.youtubeMedias || []
  );
  const {videoCollectionArray , shortsCollectionArray} = youtubeMedias

  const nextPageToken = useSelector(state => state.videoCollection.nextPageToken || "")

  const dispatch = useDispatch();
 


  // I am returning the below function which will fetch videos from youtube api server by using user keyqord (q) searchVideoByKeyword

  return async ({ keyword = '' , replaceFlag = true }) => {
    try {
     
      
      console.log("keyword = ", keyword , replaceFlag);

      // if(!keyword || prevState.length >= 150) return false;
      if (!keyword || videoCollectionArray?.length >= 150) {
        return false;
      }

      // below 1 line for converting 'south+hindi+movie' into 'south hindi movie'
      // keyword = search_query.split('+').join(' ')
    
      let channelLogoUrlsMap = new Map(); 
      let video_Duration_Views_Like_DataMap = new Map();

      dispatch(updateYoutubeApiMediaFetchingState_ToPending());

      // step 1 search basic result (videoId , channelId , channelName, videoThumnails , videoTitle , videoPublishAt)
      const searchResponse = await fetchVideoSearchResults(
        keyword,
        nextPageToken
      );

      // console.log('searchResponse = ' , searchResponse)

      const newNextPageToken = searchResponse.nextPageToken || "";
      const videosId = searchResponse?.items?.map((item) => item.id.videoId);
      const channelsId = searchResponse?.items?.map(
        (item) => item.snippet.channelId
      );

      // step 2 get all remaining videos meta data (videosDuration , viewsCount)
      const videosMetaDataResponse = await fetchVideoMetaData(videosId);
      const channelMetaDataResponse = await fetchChannelMetaData(channelsId);

      console.log('videosMetaDataResponse = ' , videosMetaDataResponse)

      // achievement - 1
      let videosInfo = searchResponse.items.map((item) => ({
        videoId: item.id.videoId,
        channelId: item.snippet.channelId,
        channelTitle: item.snippet.channelTitle,
        // videoThumnail: item.snippet.thumbnails.high.url,
        videoTitle: item.snippet.title,
        videoPublishAt: getRelativeTimeDifference(item.snippet.publishedAt),
      }));

      // achievement - 2
      videosMetaDataResponse.items.forEach((item) => {
        video_Duration_Views_Like_DataMap.set(item.id, {
          videoId: item.id,
          videoThumnail:
            item.snippet.thumbnails.maxres?.url ||
            item.snippet.thumbnails.medium?.url ||
            "",
          videoDuration: format_iso_duration_to_HMS(
            item.contentDetails.duration
          ),
          videosViewsCount:
            formatNumberAbbreviation(item.statistics.viewCount) + " views",
          videoLikeCount:
            formatNumberAbbreviation(item.statistics.likeCount || 0) + " likes",
        });
      });

      // achievement - 3
      channelMetaDataResponse.items.forEach((item) => {
        channelLogoUrlsMap.set(item.id, {
          channelId: item.id,
          channelLogo: item.snippet.thumbnails.high.url || "",
        });
      });

      // console.log('prevState = ' , prevState )
      let result = null;
      let videoResult = [];
      let shortsResult = [];


      videosInfo.forEach((item) => {
        let videoId = item.videoId;
        let channelId = item.channelId;
        
        let channelDetails = channelLogoUrlsMap.get(channelId);
        let videoMetaDetails = video_Duration_Views_Like_DataMap.get(videoId);
        
        if (!(channelDetails && videoMetaDetails)) {
          return false;
        }

        result = {
            videoId,
            videoUrl: `https://www.youtube.com/embed/${videoId}`,
            videoTitle: item.videoTitle,
            videoPublishAt: item.videoPublishAt,
            videoThumnail: videoMetaDetails.videoThumnail,
            videoDuration: videoMetaDetails.videoDuration,
            videosViewsCount: videoMetaDetails.videosViewsCount,
            videoLikeCount: videoMetaDetails.videoLikeCount,
            channelTitle: item.channelTitle,
            channelLogo: channelDetails.channelLogo
        }

        if(videoMetaDetails.videoDuration.includes(':')) {
          // if true means it is not a short video
          videoResult.push({...result , isShortsVideo : false});
        } else {
          // if false it means it is a shorts video
          shortsResult.push({...result , isShortsVideo : true})
        }
      });



      // below code will store the data in state

      if (replaceFlag === true) {
        // resetFlag === true means store only newComing data
        dispatch(replaceVideo_and_ShortsCollectionArray({ videos: videoResult , shorts : shortsResult }));
      } else {
        dispatch(addVideo_and_ShortsToCollectionArray({ videos: videoResult , shorts : shortsResult }));
      }
      dispatch(updateNextPageToken({ pageToken: newNextPageToken }));

      console.log("videoresult = ", videoResult);
      console.log("shortsResult = ", shortsResult);
      return true;
      
      
      
      
    } catch (error) {
      // 403 -- forbidden (api key reach limit)
        dispatch(setErrorDuringVideoFetchingTrue());
        console.log('error ' , error.message)
    } finally {
        dispatch(updateYoutubeApiMediaFetchingState_ToIdle());
    }
  };
}

/*

video-details [by videoId] = GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY] 


channel-details [by channelId] = GET https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=[channel id]&key=[YOUR_API_KEY] 

fetch video&channel id by search keyword = GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&type=video&key=[YOUR_API_KEY] 


*/
