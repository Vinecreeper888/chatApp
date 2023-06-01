import Layout from "./Layout";
import ChatBox from "./ChatBox";
import styles from "./ChatComponent.module.css";
import DefaultChatPage from "./DefaultChatPage";
import { useContext, useEffect, useState } from "react";
import { NewInstanceContext } from "../context/NewInstanceProvider";

const ChatComponent = (props) => {
    const [displayText,setDisplayText] = useState([]);
    const {newInstance,setNewInstance,setInstanceNumber} = useContext(NewInstanceContext);
    const [displayNotification,setDisplayNotification] = useState(false);

    useEffect(() => {
        setInstanceNumber(Math.random().toString(36).substring(7));
    },[])
  
    useEffect(() => {
        if(newInstance) {
            console.log("this is a new instance of the chat. New message should appear on the chat window.");
            //console.log("the instance id is:",id);
            //setInstanceNumber(id);
            setDisplayNotification(prevState => !prevState);
            setNewInstance(prevState => !prevState);
        }
    },[newInstance,setNewInstance]);

    const displayTextHandler = (dspText) => {
        setDisplayText(dspText);
    }

    return(
        <Layout>
            <div className={styles.parentBox}>
                <div className={styles.parentChatBox}>
                    <DefaultChatPage displayText={displayText} displayNotification={displayNotification}/>
                    <ChatBox onDisplayText={displayTextHandler}/>
                </div>
            </div>
        </Layout>
    );
}

export default ChatComponent;