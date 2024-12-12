/*
  Description: Arranging YouTube Videos and Shorts in Rows
    
  This file contains logic to arrange YouTube videos and shorts (media) in a specific sequence based on different output patterns:
    
 
    Pseudocode
    ----------
    Goal :- Return an array of objects that determines which component to render: VideoWithMetaData or ShortsWithMetaData.

    input :- videoCollectionArry , shortCollectionArray , videosPerRow , shortsPerRow , totalRowCount

     Output Patterns
     ----------------
    (1) Only Shorts: The output contains only rows of YouTube shorts.

    (2) Only Videos: The output contains only rows of YouTube videos.

    (3) Continuous Pattern: The output alternates between 2 rows of YouTube videos followed by 1 row of YouTube shorts. This pattern repeats until all media is arranged.

    (4) Dynamic Mixed Pattern (Tricky): This pattern starts with 2 rows of YouTube videos followed by 1 row of YouTube shorts. If either videos or shorts run out, the remaining media continues to fill rows until all rows are complete.

    Example:
        Assumptions:

        videosPerRow = 3
        shortsPerRow = 5
        totalRow = 8
        Given these inputs, the output will look like this:

        R1 - [V1, V2, V3]  
        R2 - [V4, V5, V6]  
        R3 - [S1, S2, S3, S4, S5]  
        R4 - [V7, V8, V9]  
        R5 - [S6, S7, S8, S9, S10]  
        R6 - [S11, S12, S13, S14, S15]  
        R7 - [S16, S17, S18, S19, S20]
    

    soluation for different output
    ------------------------------
        (1) Only Shorts: When (videosArray.length < videoPerRow) then only display shorts media.
        
        (2) Only Videos : When (shortsArray.length < shortsPerRow) then only display  video media
        
        (3) Continuous Pattern :- Use a Loop for (1 to totalRow) and inside use 2 inner loop for alternative execution of videos and shorts.
        (4) Dynamic Mixed Pattern (Tricky) : This position will introduce in code


        Algorithm :- 

        Step 1 : Start.

        Step 2 : Take variable like videosTime = true , shortsTime = false , result = [] , noOfVideoCanFill = Math.floor(videos.length / videosPerRow) * videosPerRow ,  noOfShortCanFill = Math.floor(shorts.length / shortsPerRow) * shortsPerRow , 
        videosCurrentIndex = 0 , shortsCurrentIndex = 0,

        Step 3: Check the following conditions:
            Case 1: If videosArray.length < videosPerRow
                    Add only shorts media to the result.
                    Exit the algorithm.

            Case 2: If shortsArray.length < shortsPerRow
                    Add only videos media to the result.
                    Exit the algorithm.

            Case 3: If neither of the above cases is true, proceed to arrange media using the given totalRow count and alternating patterns.

        Step 4 : Define Two Functions to Store Media Rows

                 Define two functions, storeSingleRowVideo and storeSingleRowShorts, which will handle storing one row of media depending on the function being called:

                 1. storeSingleRowVideo: This function will be responsible for adding one row of videos to the result array.

                 2. storeSingleRowShorts: This function will be responsible for adding one row of shorts to the result array.

                 These functions will be used to organize the media into rows based on the videosPerRow and shortsPerRow parameters, ensuring that the correct type of media is added to the result at each step.

        Step 5 : Loop Through Rows.

        Step 6 : Use a loop (for (let i = 1; i <= totalRow; i++)) to iterate through each row that needs to be filled.
        
        Step 7 : Add Videos to Rows
                
                Check if there are enough videos remaining to fill the current row:
               
                If true: Go ahead instead move to step 8

                Call storeVideo() to add a row of videos.
                
                If the current row index is even (i % 2 === 0), toggle videosTime to false and shortsTime to true to prepare for adding shorts in the next iteration.
     
        Step 8 : Handle Video Depletion

                If no more videos can be added (videosCurrentIndex >= noOfVideoCanFill) but videosTime is still true:

                Check if there are shorts available (shortsCurrentIndex < noOfShortCanFill).
              
                If true: Go ahead instead move to step 9

                Call storeShorts() to add a row of shorts.
                
                Log debug information to track this fallback logic.
                
                Do not toggle videosTime or shortsTime since the logic will automatically retry.

       Step 9 : Add Shorts to Rows
                Check if there are enough shorts remaining to fill the current row:

                Condition: shortsCurrentIndex < noOfShortCanFill && shortsTime === true.
                
                If true: go ahead instead go to step 10
                
                Call storeShorts() to add a row of shorts.
                
                Toggle videosTime to true and shortsTime to false to prepare for adding videos in the next iteration.

     Step 10 :  Handle Shorts Depletion

                If no more shorts can be added (shortsCurrentIndex >= noOfShortCanFill) but shortsTime is still true:

                Check if there are videos available (videosCurrentIndex < noOfVideoCanFill).

                If true: o ahead instead go to step 11

                Call storeVideo() to add a row of videos.

                Do not toggle videosTime or shortsTime since the logic will automatically retry.

     Step 11 : End Loop
               Continue iterating until all rows (totalRow) have been filled.

               After the loop ends, the result array contains the final arrangement of videos and shorts. 

    Step 12 : Return the Result
              Return the result array as the output of the function.

    Step 13 : End.


*/

export function arrangeYoutubeMedia(videos, shorts, videosPerRow, shortsPerRow, totalRow) {

    try {
        // The 2 lines below are useful only if (shorts.length / shortsPerRow) results in a fractional number; otherwise, they are unnecessary.
        const noOfVideoCanFill = Math.floor(videos.length / videosPerRow) * videosPerRow;
        const noOfShortCanFill = Math.floor(shorts.length / shortsPerRow) * shortsPerRow;

        // Only Shorts
        if (videos.length < videosPerRow) {
            let result = shorts.slice(0, noOfShortCanFill);
            return result;
        }

        // Only Videos
        if (shorts.length < shortsPerRow) {
            let result = videos.slice(0, noOfVideoCanFill);
            return result;
        }

        let result = [];
        let videosTime = true;
        let shortsTime = false;

        let videosCurrentIndex = 0;
        let shortsCurrentIndex = 0;

        console.log('videosLen = ', videos.length, ' shortsLen = ', shorts.length, ' vpr = ', videosPerRow, ' spr = ', shortsPerRow, ' totalRow = ', totalRow, ' noOfVideoCanFill = ', noOfVideoCanFill, ' noOfShortCanFill = ', noOfShortCanFill);

        let debugResultArr = []; // for debug purpose in future correctly code is working or not
        let duplicateVideosCurrentIndex = 0
        let duplicateShortsCurrentIndex = 0

        // Function to store a single row of videos
        const storeSingleRowVideo = () => {
            let tempArr = [] // for future testing purpose
            for (let j = 1; j <= videosPerRow; j++) {
                  tempArr.push(`v+${duplicateVideosCurrentIndex++}`); // for future testing purpose
                result.push(videos[videosCurrentIndex++]);
            }
            debugResultArr.push(tempArr) // for future testing purpose
            return;
        };

        // Function to store a single row of shorts
        const storeSingleRowShorts = () => {
               let tempArr = [] // for future testing purpose
            for (let j = 1; j <= shortsPerRow; j++) {
                  tempArr.push(`s+${duplicateShortsCurrentIndex++}`); // for future testing purpose
                result.push(shorts[shortsCurrentIndex++]);
                debugResultArr.push(tempArr) // for future testing purpose
            }
            return;
        };

        // Main loop to fill the rows
        for (let i = 1; i <= totalRow; i++) {
            // Store video rows
            if (videosCurrentIndex < noOfVideoCanFill && videosTime === true) {
                storeSingleRowVideo();
                if (i % 2 === 0) {
                    videosTime = false;
                    shortsTime = true;
                }
            } else {
                if (videosCurrentIndex >= noOfVideoCanFill && videosTime === true) {
                    // No more videos to add, start adding shorts
                    if (shortsCurrentIndex < noOfShortCanFill) {
                        storeSingleRowShorts();
                    }
                }
            }

            // Store shorts rows
            if (shortsCurrentIndex < noOfShortCanFill && shortsTime === true) {
                storeSingleRowShorts();
                videosTime = true;
                shortsTime = false;
            } else {
                if (shortsCurrentIndex >= noOfShortCanFill && shortsTime === true) {
                    // No more shorts to add, start adding videos
                    if (videosCurrentIndex < noOfVideoCanFill) {
                        storeSingleRowVideo();
                    }
                }
            }
        }

        console.log('debugerResultArr = ' , debugResultArr)

        return result;

    } catch (error) {
        console.log('error = ', error.message)
        return []
    }

}
