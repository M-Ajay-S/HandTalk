import React, { useContext, useEffect, useReducer } from "react";
import data from "./letter"
import reducer from "./reducer";


const AppContext = React.createContext()

const initialState = {
    letters: []
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const getLetters = () => {
        return dispatch({
            type: "GET_LETTERS",
            payload: data
        }

        )
    }



    useEffect(() => {
        getLetters()
    }, [])


    return (<AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>)
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, useGlobalContext }