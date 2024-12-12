import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setMachineOffline,
  setMachineOnline,
} from "../features/machineInternet/clientMachineInternet.js";
import Navbar from "../Components/Navbar.jsx";
import VideoSection from "../Components/video/VideoSection";
import { updateNavbarSearchBoxValue } from "../features/navbar/navbarSearchBoxSlice.js";
import { useSearchVideoByKeyword } from "../youtube_backend_logic/custom_hook/useSearchVideoByKeyword.js";

function HomePage() {
  const dispatch = useDispatch();
  const searchVideoByKeyword = useSearchVideoByKeyword()

  useEffect(() => {
    // Function to handle connection status
    const updateConnectionStatus = () => {
      if (navigator.onLine) {
        dispatch(setMachineOnline());
      } else {
        dispatch(setMachineOffline());
      }
    };

    // Initial check
    updateConnectionStatus();

    // Add event listeners
    window.addEventListener("online", updateConnectionStatus);
    window.addEventListener("offline", updateConnectionStatus);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("online", updateConnectionStatus);
      window.removeEventListener("offline", updateConnectionStatus);
    };
  }, [dispatch]);

  useEffect(() => {
    // function to check if search_query is available in browser url
    if(document.location.pathname === '/result') {
      let params = new URLSearchParams(document.location.search);
      let search_query = params.get('search_query');
      if(search_query.trim() !== "") {
        // The line below is essential because the search URL always formats the query like "south+hindi+movies". This code converts it to 'south hindi movies'.
        search_query = search_query.split('+').join(' ');
        dispatch(updateNavbarSearchBoxValue({search_query}));
        searchVideoByKeyword({keyword : search_query , replaceFlag : true})
      }
    }
  } , [dispatch , updateNavbarSearchBoxValue])

  return (
    <div className="box-border bg-[#0F0F0F] text-white">
      <Navbar />
      <VideoSection />
    </div>
  );
}

export default HomePage;
