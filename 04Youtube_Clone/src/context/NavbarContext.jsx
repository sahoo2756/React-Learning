import { createContext, useState } from "react";

const navbarContext = createContext("")


function NavbarContextProvider({ children }) {
    const [navbarSearchBoxvalue, setNavbarSearchBoxValue] = useState('');

    return (
        <navbarContext.Provider value={{ navbarSearchBoxvalue, setNavbarSearchBoxValue }}>
            {children}
        </navbarContext.Provider>
    )
}

export default navbarContext

export { NavbarContextProvider }