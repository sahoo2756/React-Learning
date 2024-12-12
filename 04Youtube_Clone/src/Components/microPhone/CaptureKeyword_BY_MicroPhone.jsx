import { ImCross } from "react-icons/im";
import { HiMicrophone } from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";
import { useSearchVideoByKeyword } from "../../youtube_backend_logic/custom_hook/useSearchVideoByKeyword";
import { useDispatch } from "react-redux";
import { updateNavbarSearchBoxValue } from "../../features/navbar/navbarSearchBoxSlice";
// import hamburgerContext from "../../context/HamburgerContext";
// import microphoneAudio from "../../../assets/VoiceBackgroundAudio.mp3"
// import navbarContext from "../../context/NavbarContext";



// const playVoiceBgAudio = () => {
//   const voiceClickAudio = new Audio(microphoneAudio);
//   voiceClickAudio.volume = 1.0;
//   voiceClickAudio.play()
// }



function CaptureKeyword_BY_MicroPhone({ setIsVoiceSearchEnabled }) {
  // const { setNavbarSearchBoxValue } = useContext(navbarContext);

  // updateNavbarSearchBoxValue

  const dispatch = useDispatch();
  const searchVideoByKeyword = useSearchVideoByKeyword();




  const [tempVoiceValue , setTempVoiceValue] = useState("")
  const [isListening, setIsListening] = useState(true);
  const userSpokeRef = useRef(false);
  let vioceObj = ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) ? new (window.SpeechRecognition || window.webkitSpeechRecognition)() : null
  const [voiceRecognitionObj, setVoiceRecognitionObj] = useState(vioceObj);
  const timeFixRef_forVoiceRecognition = useRef(null);

  const stopVoiceRecognition = () => {
    clearInterval(timeFixRef_forVoiceRecognition?.current)
    voiceRecognitionObj.continuous = false;
    voiceRecognitionObj.stop();
  }

  // Toggle animation on microphone click
  const handleMicrophoneClick = () => {
    let isUserWantToSpeak = !isListening;

    setIsListening(isUserWantToSpeak);

    if (isUserWantToSpeak === false) {
      stopVoiceRecognition();
    }

    if (isUserWantToSpeak === true) {
      startVoiceRecognition();
    }
  };

  const startVoiceRecognition = () => {
    voiceRecognitionObj.continuous = true; // Keep listening
    voiceRecognitionObj.lang = 'en-US'; // Set language\

    voiceRecognitionObj.start();

    timeFixRef_forVoiceRecognition.current = setTimeout(() => {
      voiceRecognitionObj.continuous = false;
      voiceRecognitionObj.stop();
    }, 10000);

    voiceRecognitionObj.onresult = (event) => {
      userSpokeRef.current = true;
      const userVoiceTranscript = event.results[0][0].transcript;
      setTempVoiceValue(userVoiceTranscript || "Error Occured")
      dispatch(updateNavbarSearchBoxValue({search_query : userVoiceTranscript || "Error Occured"}))
      
      setTimeout(() => {
        setIsVoiceSearchEnabled(false)
      }, 3000);
    }

    voiceRecognitionObj.onspeechend = () => {
      stopVoiceRecognition();
    }

    voiceRecognitionObj.onend = () => {
      if (userSpokeRef.current === false) {
        setIsListening(false)
      }

      stopVoiceRecognition()
    }
  }

  useEffect(() => {
    if(tempVoiceValue === "") {
      return ; 
    }
    searchVideoByKeyword({keyword : tempVoiceValue  , replaceFlag : true});
  } , [tempVoiceValue]);

  useEffect(() => {
    startVoiceRecognition();
  }, [])


  return (
    <div className="bg-black/20  fixed top-10 left-0 w-full h-full">
      <div
        // style={{ left: "50%", transform: "translate(-50%)" }}
        className="relative w-[50%] h-[70%] m-auto top-4  p-10 shadow-2xl rounded-md text-start z-[200] bg-[#212121] text-white"
      >
        <button onClick={() => {
          stopVoiceRecognition();
          setIsVoiceSearchEnabled(prev => !prev);
        }} className="absolute right-10 text-sm hover:bg-gray-700 hover:rounded-full p-3">
          <ImCross />
        </button>


        <p className="text-2xl font-semibold tracking-wide py-10">
          {isListening === true ? ( tempVoiceValue !== "" ? tempVoiceValue : "Listening .....") : "Didn't hear that. Try again."}
        </p>

        {/* Animated scaling div */}
        <div
          style={{ left: "50%", transform: "translate(-50%)" }}
          className={`w-fit absolute bottom-20`}
          onClick={handleMicrophoneClick}
        >
          {/* Microphone button remains constant */}
          <div
            className={`p-4 w-20 h-20 rounded-full bg-gray-700 flex justify-center items-center ${isListening && 'animate-pulse-bg'}`}
          />

          <button
            style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            className={`absolute text-4xl p-5 ${isListening ? "bg-red-500" : "bg-gray-700"}  rounded-full`}
          >
            <HiMicrophone />
          </button>
        </div>

        {isListening === false && <p style={{ left: "50%", transform: "translate(-50%)" }} className="absolute bottom-10 font-thin text-gray-300 text-center">Tap the microphone  to try again</p>}

      </div>
    </div>
  );
}

export default CaptureKeyword_BY_MicroPhone;



