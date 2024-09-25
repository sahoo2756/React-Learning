/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

function getDefaultColor() {
  return "bg-purple-600";
}



function App() {
  const [currentBackgroundColor, setCurrentBackgroundColor] = useState(getDefaultColor);




  function HandleBackgroundColorBtn({ bgColor, btnName }) {
    return (
      <button onClick={() => setCurrentBackgroundColor(bgColor)}
        className={`${bgColor} cursor-pointer text-white text-lg font-semibold py-1 px-4 rounded-lg`}>
        {btnName}
      </button>
    )
  }


  return (
    <div className={`w-screen h-screen ${currentBackgroundColor} `} style={{ textAlign: "center" }}>
      {/* Example of applying Tailwind classes dynamically */}

      <div
        style={{
          left: "50%",
          transform: "translate(-50%, 0)"
        }}
        className="flex gap-x-2  bg-white px-6 py-3 rounded-md fixed bottom-10 w-fit ">

        <HandleBackgroundColorBtn bgColor="bg-red-700" btnName="Red" />
        <HandleBackgroundColorBtn bgColor="bg-purple-700" btnName="Purple" />
        <HandleBackgroundColorBtn bgColor="bg-cyan-500" btnName="Cyan" />
        <HandleBackgroundColorBtn bgColor="bg-blue-700" btnName="Blue" />
        <HandleBackgroundColorBtn bgColor="bg-green-700" btnName="Green" />



      </div>


    </div>


  );
}

export default App;
