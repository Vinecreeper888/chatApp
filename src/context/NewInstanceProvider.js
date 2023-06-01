import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const NewInstanceContext = createContext({});

export const NewInstanceContextProvider = (props) => {
    const [newInstance,setNewInstance] = useState(true);
    const [socketId,setSocketId] = useState('');
    const socket = io("http://localhost:3001");
    const [socketIdFlag,setSocketIdFlag] = useState(false);
    const [instance,setInstance] = useState(""); 
    
    const populateSocketId = () => {
        setSocketIdFlag(prevState => !prevState);
    }

    useEffect(() => {
        socket.on("connect", () => {
            setSocketId(socket.id);
        })
    },[socketIdFlag])

    const sendMessage = (inputText) => {
        let messageObj = [{
            instanceNumber: instance,
            message: inputText,
            timestamp: getTime(),
            socketId: socketId
        }]
        socket.emit('send-message',messageObj);
    }

    const setInstanceNumber = (instance) => {
        setInstance(instance);
    }

    const getTime = () => {
        let time = new Date();
        let hours = appendTrailingZero(time.getHours());
        let minutes = appendTrailingZero(time.getMinutes());
        let seconds = appendTrailingZero(time.getSeconds());
        let amOrPm = hours > 12 ? 'PM' : 'AM';
        let timeInHHMMSS = `${hours}:${minutes}:${seconds} ${amOrPm}`;
        return timeInHHMMSS;
    }

    const appendTrailingZero = (time) => {
        return time < 10 ? `0${time}`: time;
    }

    return(
        <NewInstanceContext.Provider value={{newInstance,setNewInstance,populateSocketId,sendMessage,setInstanceNumber,instance}}>
            {props.children}
        </NewInstanceContext.Provider>
    );
}