import { createContext, useState } from "react";

const hamburgerContext = createContext(false)

function HamburgerContextProvider({ children }) {
    const [hamburgerIconClick, setHamburgerIconCLick] = useState(false);
    const [navbarSearchBoxvalue, setNavbarSearchBoxValue] = useState('');


    const finalPropToBePassed = {
        hamburgerIconClick,
        setHamburgerIconCLick,
        navbarSearchBoxvalue,
        setNavbarSearchBoxValue
    };

    return (
        <>
            <hamburgerContext.Provider value={finalPropToBePassed}>
                {children}
            </hamburgerContext.Provider>
        </>
    )
}


export default hamburgerContext

export { HamburgerContextProvider }