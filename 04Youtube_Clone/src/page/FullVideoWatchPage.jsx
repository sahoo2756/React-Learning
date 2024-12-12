import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import RecommendVideos from "../routes/watch_video/RecommendVideos";
import {
  formatNumberAbbreviation,
  getRelativeTimeDifference,
} from "../youtube_backend_logic/utils";
import FullVideo from "../routes/watch_video/FullVideo";
import ListOfComments from "../routes/watch_video/ListOfComments";

const api_key = `AIzaSyCoumdxeYA_ahUXGtBYagS_HagABefLNAg`; //react-testing key-1
// const api_key = `AIzaSyBiRRoliElqnYKitt8bL3ME9-uHedM8l28`  //  youtube
// const api_key = `AIzaSyDLONVKd2eWrkG8uhm9n5KgyYPntdM15AU` //  my-first-project key-1
// const api_key = `AIzaSyBE0cBn4X7UA4ynhn2HOIEb4rezvIr6TF8`;  // react-testing key-2
// const api_key = `AIzaSyBKgvGPflrKA27K7CONHWLxGt41_noaiaY` //  my-first-project key-2
// const api_key = 'AIzaSyD5bzP72UCMlsjHf4WBXI1Oo0M9am1fxBA';  // react-testing key-3

// channelLogo: "https://yt3.ggpht.com/aMY84Av3uqGN2LJB3RrmAP4bJaV_CbPNnbxWufjN10BQPijQVzbBlWisWom_SfOg2dt4M5a7B-w=s800-c-k-c0x00ffffff-no-rj";
// channelTitle: "HNS Movies";
// isShortsVideo: false;
// videoDuration: "2:17:34";
// videoId: "MpHaG3U2_Bo";
// videoLikeCount: "309K likes";
// videoPublishAt: "2 months ago";
// videoThumnail: "https://i.ytimg.com/vi/MpHaG3U2_Bo/maxresdefault.jpg";
// videoTitle: "New Released South Indian Hindi Dubbed Movie 2024 | New 2024 Hindi Dubbed Action Movie";
// videoUrl: "https://www.youtube.com/embed/MpHaG3U2_Bo";
// videosViewsCount: "59.9M views";

const fetchTotalCommentsOnAVideo = async () => {
  const videoId = "Nq4Mh_jTubA";
  let url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${api_key}`;
  const response = await fetch(url);
  let data = await response.json();

  const totalComments = data.items[0]?.statistics?.commentCount;

  console.log("totalComment = ", data);
};

const fetchComments = async () => {
  const videoId = "Nq4Mh_jTubA";

  // Construct the URL for the YouTube API request
  const url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=${100}&key=${api_key}`;

  try {
    // Make the API call to fetch comments
    const response = await fetch(url);

    // Check if the API call was successful; throw an error if not
    if (!response.ok) {
      throw new Error(
        `Failed to fetch comments: ${response.status} - ${response.statusText}`
      );
    }

    // Parse the response JSON
    const data = await response.json();

    // If no comments are found, log a warning and return an empty array
    if (!data.items || data.items.length === 0) {
      console.warn("No comments found for this video.");
      return [];
    }

    // Process the fetched comments into a readable format
    const formattedComments = data.items
      .map((commentThread) => {
        // Access the snippet of the top-level comment
        const commentSnippet = commentThread?.snippet?.topLevelComment?.snippet;

        // If the snippet is missing, skip this comment
        if (!commentSnippet) {
          return null; // Exclude invalid or incomplete data
        }

        // Format the comment data into a simplified structure
        return {
          authorName: commentSnippet.authorDisplayName, // Name of the comment's author
          authorProfileImageUrl: commentSnippet.authorProfileImageUrl, // Profile image of the author
          commentTextToDisplay: commentSnippet.textDisplay, // Comment text with formatting
          commentLikeCount: formatNumberAbbreviation(
            commentSnippet.likeCount || 0
          ), // Number of likes on the comment
          publishedTime: getRelativeTimeDifference(commentSnippet.publishedAt), // Relative time since published
          replyCount: formatNumberAbbreviation(
            commentThread.snippet.totalReplyCount || 0
          ), // Number of replies to the comment
        };
      })
      .filter((ele) => Boolean(ele)); // Remove null values from the array if exit

    console.log("Formatted Comments:", formattedComments);

    return formattedComments;
  } catch (error) {
    // Log any errors encountered during the process
    console.error("Error fetching comments:", error);
    return [];
  }
};


function FullVideoWatchPage() {
  useEffect(() => {
    const cb = async () => {
      let data = await fetchComments();
      console.log("sata = ", data);
    };

    // cb()

    // fetchTotalCommentsOnAVideo()
  }, []);

  return (
    <div className="relative text-white w-full  bg-[#0F0F0F]">
      {/* navbar takes height of style={{ height: "var(--navbar-height)" }} */}
      <Navbar />

      <div
        className="relative pt-5 px-14 w-full flex gap-x-5"
        // style={{ height: `calc(100% - var(--navbar-height))` }}
      >
        <div className="relative w-full flex flex-col">
          <FullVideo  />
          <ListOfComments />
        </div>
        <RecommendVideos />
      </div>
    </div>
  );
}

export default FullVideoWatchPage;
