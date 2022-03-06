import React, { createContext, useReducer } from "react"

export const TestContext = createContext({})

const initialState = {
    userLoginData: null,
    uiControlData: {
        currentMenu: 'engagement',
    },
    selectedDate : {},
    selectedTabs : 'Daily',
    dateCalendar : [],
    grapgType : "1"
}

const testReducer = (state, { type, payload }) => {
    switch (type) {
        case 'SELECTED_MENU':
            return {
                ...state,
                uiControlData: {
                    ...state.uiControlData,
                    currentMenu: payload
                }
        }
        case 'SELECTED_DATE':
            return {
            ...state,
            selectedDate : payload
        }   
        case 'SELECTED_TABMENU':
            return {
            ...state,
            selectedTabs : payload
        } 
        case 'SET_DATECALENDAR':
            return {
            ...state,
            dateCalendar : payload
        }  
        case 'SET_GRAPH':
            return {
            ...state,
            grapgType : payload
        }    
        default:
            return state
    }
}

export const TestProvider = ({ children }) => {
    const [testState, testDispatch] = useReducer(
        testReducer,
        initialState
    )

    const {uiControlData,selectedDate , selectedTabs , dateCalendar ,grapgType} = testState
    const selectedMenu = payload => 
        testDispatch({
            type: "SELECTED_MENU",
            payload
    })
    const setSelectedDate = payload => 
        testDispatch({
            type: "SELECTED_DATE",
            payload
    })
    const setSelectedTabs = payload => 
        testDispatch({
            type: "SELECTED_TABMENU",
            payload
    })
    const setDateCalendar = payload => 
        testDispatch({
            type: "SET_DATECALENDAR",
            payload
    })
    const setGrapgType = payload => 
        testDispatch({
            type: "SET_GRAPH",
            payload
    })

    return (
        <TestContext.Provider value={
                { 
                    selectedMenu, 
                    uiControlData,
                    setSelectedDate,
                    selectedDate,
                    setSelectedTabs,
                    selectedTabs,
                    setDateCalendar,
                    dateCalendar,
                    setGrapgType,
                    grapgType
                }
            }
        >
            {children}

        </TestContext.Provider>
    )
}

