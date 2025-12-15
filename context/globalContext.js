import React from "react";


const GlobalContext = React.createContext();

export const GlobalContextProvider = ({ }) => {

    const [globalState, setGlobalState] = React.useState({
        user: null,
        isAuth: true
    })

}