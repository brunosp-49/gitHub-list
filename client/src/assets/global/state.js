import React, { createContext, useState } from "react";

export const StateContext = createContext({})

export const StateProvider = (props) => {
    const [search, setSearch] = useState("")

    return(
        <StateContext.Provider  value={{search, setSearch}}>
            {props.children}
        </StateContext.Provider>
    )
};