import { IoIosWarning } from "react-icons/io";
import { useSearchVideoByKeyword } from "../../../../youtube_backend_logic/custom_hook/useSearchVideoByKeyword";
import { useDispatch, useSelector } from "react-redux";
import { setErrorDuringVideoFetchingFalse } from "../../../../features/problemOnApp/problemOnAppSlice";

function SomthingWentWrongUI() {
  const searchVideoByKeyword = useSearchVideoByKeyword();
  const youtubeMedias = useSelector(
    (state) => state?.videoCollection?.youtubeMedias || []
  );
  const {videoCollectionArray , shortsCollectionArray} = youtubeMedias
  let totalMediaLength = videoCollectionArray + shortsCollectionArray

  const keyword = useSelector(state => state.navbarSearchBox?.navbarSearchBoxValue);
  const dispatch = useDispatch();


  const handleRetry = async () => {
    const replaceFlag = totalMediaLength === 0;
    await searchVideoByKeyword({ keyword, replaceFlag });
    dispatch(setErrorDuringVideoFetchingFalse())
  };

 
  return (
    <div className="text-center flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {totalMediaLength === 0 && (
        <>
          <IoIosWarning className="text-8xl text-red-500" />
          <p className="text-2xl mt-3 mb-4">Somthing Went Wrong !</p>
        </>
      )}

      <button
        className="text-sm text-green-400 border border-gray-500 px-3 py-2 rounded-full hover:bg-gray-700 transition duration-300"
        onClick={handleRetry}
      >
        Retry
      </button>
    </div>
  );
}

export default SomthingWentWrongUI;
