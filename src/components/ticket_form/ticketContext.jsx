import { createContext, useContext, useEffect, useState } from "react";

const INITIAL_FORM_STATE = {
    fullName: "",
    email: "",
    git: ""  
}

export const ticketContext = createContext();

export const TicketProvider = ({ children }) => {

    const [userData, setUserData] = useState(() => {
        const userData = localStorage.getItem("userData");
        return userData ? JSON.parse(userData) : INITIAL_FORM_STATE;
    });

    useEffect(() => {
        localStorage.setItem("userData", JSON.stringify(userData))
    }, [userData])

    const handleUpdate = (name, value) => {
        setUserData(prevUserData => ({
            ...prevUserData,
            [name]: value
        }));
    }

    return (
        <ticketContext.Provider value={{ userData, setUserData, handleUpdate}}>
            {children}
        </ticketContext.Provider>
    );
};

export const useDataUser = () => {
    const context = useContext(ticketContext);

    if (!context) {
        throw new Error("useDataUser must be used within a TicketProvider");
    }

    return context
}
