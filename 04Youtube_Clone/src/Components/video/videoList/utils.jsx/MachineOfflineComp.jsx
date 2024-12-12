import { useDispatch } from "react-redux";
import { useState } from "react";
import InternetNotConnectedCoolPic from "../../../../../assets/InternetNotConnectedCoolPic.png";
import {
  setMachineOffline,
  setMachineOnline,
} from "../../../../features/machineInternet/clientMachineInternet";

function MachineOfflineComp() {
  const dispatch = useDispatch();
  const [
    isCheckingConnectionUnderProgress,
    setIsCheckingConnectionUnderProgress,
  ] = useState(false);

  const handleRetryClick = () => {
    console.log("Retrying Internet Connection...");
    setIsCheckingConnectionUnderProgress(true);

    if (navigator.onLine) {
      dispatch(setMachineOnline());
    } 
    
    // Reset the loading state after 1 second
    setTimeout(() => {
      setIsCheckingConnectionUnderProgress(false);
    }, 1000);
  };

  if (isCheckingConnectionUnderProgress === true) {
    return (
      <p className="text-2xl font-mono absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Loading...
      </p>
    );
  }

  return (
    <div>
      <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src={InternetNotConnectedCoolPic}
          alt="No Internet Connection"
          className="mx-auto w-20 h-16 rounded-xl"
        />
        <p className="text-2xl mt-3 mb-2">Connect to the Internet</p>
        <p className="text-sm mb-4">You're offline. Check your connection.</p>
        <button
          className="text-sm text-green-400 border border-gray-500 px-3 py-2 rounded-full hover:bg-gray-700 transition duration-300"
          onClick={handleRetryClick}
        >
          Retry
        </button>
      </div>

      <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-gray-200 text-sm">
        No Internet Connection
      </p>
    </div>
  );
}

export default MachineOfflineComp;
