import { createContext, useState } from "react";

const hamburgerContext = createContext(false)

function HamburgerContextProvider({ children }) {
    const [hamburgerIconClick, setHamburgerIconCLick] = useState(false);

    return (
        <>
            <hamburgerContext.Provider value={{hamburgerIconClick, setHamburgerIconCLick}}>
                {children}
            </hamburgerContext.Provider>
        </>
    )
}


export default hamburgerContext

export { HamburgerContextProvider }