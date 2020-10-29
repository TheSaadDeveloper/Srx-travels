import React, { createContext, useContext, useReducer } from 'react';

export const stateContext = createContext();

export const StateProvider = ({children ,initialState , reducer}) =>(
    <stateContext.Provider value={useReducer(reducer ,initialState)}>
        {children}
    </stateContext.Provider>
)

export const useStateValue = () => useContext(stateContext);