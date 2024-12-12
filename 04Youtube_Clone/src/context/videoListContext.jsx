import { createContext, useState } from "react"

const videoListContext = createContext()

function VideoListContextProvider({ children }) {
    let [videoList, setVideoList] = useState([])
    return (
        <videoListContext.Provider value={{ videoList, setVideoList }}>
            {children}
        </videoListContext.Provider>
    )
}

export { VideoListContextProvider }
export default videoListContext