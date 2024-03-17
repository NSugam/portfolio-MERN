import { useEffect, useState } from 'react';
import { createContext } from "react";

const Context = createContext();

const SharedState = (props) => {

    const hostname = process.env.REACT_APP_LOCALHOST

    // Dark Mode toggle
    const [mode, setMode] = useState( localStorage.getItem('mode') || 'light');
    const switchMode = () => {
        if (mode === 'dark') {
            setMode('light')
        }
        else {
            setMode('dark')
        }
    };
    useEffect(()=> {
        localStorage.setItem('mode', mode)
    },[mode])

    // For Alert Message
    const [alert, setAlert] = useState();
    const showAlert = (message, type, timer) => {
        setAlert({
            msg: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null);
        }, timer);
    };

    return (
        <Context.Provider value={{
            hostname,
            mode, switchMode,
            alert, showAlert,
        }}>

            {props.children}

        </Context.Provider>
    );
};

export { Context, SharedState };
