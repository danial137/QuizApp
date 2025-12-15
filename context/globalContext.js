"use client";
import React, { createContext, useContext } from "react";
import useCategories from "./useCategories"

const GlobalContext = createContext(null);

export const GlobalContextProvider = ({ children }) => {

    const { loading, categories } = useCategories()

    console.log("Global", categories)

    return (
        <GlobalContext.Provider value={{
            loading,
            categories
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
