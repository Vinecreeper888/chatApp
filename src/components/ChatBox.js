import styles from "./ChatBox.module.css";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {io} from "socket.io-client";



//socket.emit('custom-event',10,"Hi",{a:'a'})
//socket.emit('send-message',message);

const ChatBox = (props) => {    
    
    const [isShake,setIsShake] = useState(false);
    const [inputText,setInputText] = useState("");
    const [isClicked, setIsClicked] = useState(false);
    
    
    const handleHover = () => {
        setIsShake(!isShake);
    }
    
    const handleClick = () => {
        setIsClicked(!isClicked);
        if(inputText !== "") {
            console.log(inputText);
        }
        const socket = io("http://localhost:3001");
        socket.on("connect", () => {
            //console.log("You connected with id:",socket.id);
            socket.emit('send-message',inputText);
        })
        //props.onDisplayText(inputText)
        setInputText("");
    }

    const handleChange = (e) => {
        e.preventDefault();
        setInputText(e.target.value);
    }

    return(
        <div className={styles.chatBoxParentContainer}>
            <input 
                type="text" 
                className={styles.textBox} 
                placeholder="Start typing here.."
                onChange={handleChange}
                value={inputText}
            />
            <button className={styles.sendBtn} onClick={handleClick}>
                <FontAwesomeIcon icon={faPlay} 
                    className={styles.playBtnBg} 
                    size="2xl"
                    onMouseEnter={handleHover}
                    onMouseLeave={() => setIsShake(false)}
                    shake={isShake ? true : false}
                />
            </button>
        </div>
    );
}

export default ChatBox;