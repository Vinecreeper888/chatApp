import { useContext, useState } from "react";
import styles from "./DefaultChatPage.module.css";
import {io} from "socket.io-client";
import { NewInstanceContext } from "../context/NewInstanceProvider";

const DefaultChatPage = (props) => {
    const [displayText,setDisplayText] = useState([]);
    const {instance} = useContext(NewInstanceContext);
    let isDisplayTextPresent = false;
    const baseMessage = "No messages to display";
    const newUserNotificationMessage = "A new user has joined the chat.";

    //CHAT MESSAGE LOGIC
    const socket = io("http://localhost:3001");
    socket.on('receive-message',message => {
        //setDisplayText();
        //console.log(message);
        setDisplayText([...displayText, message]);
    })

    if(displayText.length > 0) {
        console.log(instance);
        console.log(displayText);
        console.log(displayText.map((data) => data[0].message));
        isDisplayTextPresent = true;
    }
    return(
        <div className={styles.chatHistoryBg}>
            {!isDisplayTextPresent && <p className={styles.baseMessage}>{baseMessage}</p>}
            {props.displayNotification && <p className={styles.newInstanceChatNotification}>{newUserNotificationMessage}</p>}
            {displayText.map(data => (
                (isDisplayTextPresent && 
                    <div key={5*Math.random()} className={instance === data[0].instanceNumber ? styles.chatBoxItemContainer : styles.chatBoxItemNewInstanceContainer}>
                        <p  className={instance === data[0].instanceNumber ? styles.chatItemBox : styles.chatItemBoxForNewInstance }>{data[0].message}</p>
                    </div>
                )
            ))}
        </div>
        
    );
}

export default DefaultChatPage;
