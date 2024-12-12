import { createSlice } from "@reduxjs/toolkit";


const videoCollectionSlice = createSlice({
  name: "videoCollection",
  initialState: {
    youtubeMedias : {
      videoCollectionArray : [] , 
      shortsCollectionArray : []
    },
    // videoCollectionArrayLength : 0,
    youtubeMediaTotalLength : 0,
    nextPageToken: "",
    // youtubeApiVideoFetchingState: 'idle',
    youtubeApiMediaFetchingState: 'idle',
  },
  reducers: {
    addVideo_and_ShortsToCollectionArray: (state, action) => {
      // add newData to exiting videoCollection data
      let newVideoData = action.payload.videos || [];
      let newShortsData = action.payload.shorts || [];

      if (Array.isArray(newVideoData) === false || Array.isArray(newShortsData) === false) {
        return 
      }
      let totalMediaCount = newVideoData.length + newShortsData.length

      if(totalMediaCount === 0) {
        return ;
      }

      let previousVideos =  state.youtubeMedias.videoCollectionArray;
      let previousShorts =  state.youtubeMedias.shortsCollectionArray;

      state.youtubeMedias.videoCollectionArray = [...previousVideos , ...newVideoData];
      state.youtubeMedias.shortsCollectionArray = [...previousShorts , ...newShortsData];

      state.youtubeMediaTotalLength = totalMediaCount
      // state.videoCollectionArray = [...state.videoCollectionArray , ...action.payload.videos];
      // state.videoCollectionArrayLength = state.videoCollectionArray.length
      return;
    },
    replaceVideo_and_ShortsCollectionArray: (state, action) => {
      // reset videoCollectionArray by newData
      let newVideoData = action.payload.videos || [];
      let newShortsData = action.payload.shorts || [];

      if (Array.isArray(newVideoData) === false || Array.isArray(newShortsData) === false) {
        return 
      }
      let totalMediaCount = newVideoData.length + newShortsData.length
      if(totalMediaCount === 0) {
        return ;
      }

      state.youtubeMedias.videoCollectionArray = [...newVideoData];
      state.youtubeMedias.shortsCollectionArray = [...newShortsData];

      state.youtubeMediaTotalLength = totalMediaCount
      return;
    },
    updateNextPageToken: (state, action) => {
      let newPageToken = action?.payload?.pageToekn;
      if (!newPageToken) {
        return;
      }
      // state.nextPageToken = newPageToken
    },
    updateYoutubeApiMediaFetchingState_ToPending: (state, action) => {
      state.youtubeApiMediaFetchingState = 'pending'
    },
    updateYoutubeApiMediaFetchingState_ToIdle: (state, action) => {
      state.youtubeApiMediaFetchingState = 'idle'
    }
  },
});

export const {
  addVideo_and_ShortsToCollectionArray,
  replaceVideo_and_ShortsCollectionArray,
  updateNextPageToken,
  updateYoutubeApiMediaFetchingState_ToPending,
  updateYoutubeApiMediaFetchingState_ToIdle
} = videoCollectionSlice.actions;

const videoCollectionReducer = videoCollectionSlice.reducer;



export default videoCollectionReducer;
