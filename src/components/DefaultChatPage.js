import { useState } from "react";
import styles from "./DefaultChatPage.module.css";
import {io} from "socket.io-client";

const DefaultChatPage = (props) => {
    const [displayText,setDisplayText] = useState([]);
    let isDisplayTextPresent = false;
    const baseMessage = "No messages to display";

    //CHAT MESSAGE LOGIC
    const socket = io("http://localhost:3001");
    socket.on('receive-message',message => {
        setDisplayText([...displayText,message]);
    })

    if(displayText.length > 0) {
        isDisplayTextPresent = true;
    }
    return(
        <div className={styles.chatHistoryBg}>
            {!isDisplayTextPresent && <p className={styles.baseMessage}>{baseMessage}</p>}
            {displayText.map(text => (
                (isDisplayTextPresent && 
                    <div key={text.length*Math.random()} className={styles.chatBoxItemContainer}>
                        <span className={styles.chatBoxCone}>
                        </span>
                        <p  className={styles.chatItemBox}>{text}</p>
                    </div>
                )
            ))}
        </div>
        
    );
}

export default DefaultChatPage;
