import Layout from "./Layout";
import ChatBox from "./ChatBox";
import styles from "./ChatComponent.module.css";
import DefaultChatPage from "./DefaultChatPage";
import { useState } from "react";

const ChatComponent = (props) => {
    const [displayText,setDisplayText] = useState([]);

    const displayTextHandler = (dspText) => {
        setDisplayText(dspText);
    }

    return(
        <Layout>
            <div className={styles.parentBox}>
                <div className={styles.parentChatBox}>
                    <DefaultChatPage displayText={displayText}/>
                    <ChatBox onDisplayText={displayTextHandler}/>
                </div>
            </div>
        </Layout>
    );
}

export default ChatComponent;