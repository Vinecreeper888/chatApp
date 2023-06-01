import styles from "./ChatBox.module.css";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useContext } from "react";
import { NewInstanceContext } from "../context/NewInstanceProvider";

const ChatBox = (props) => {    
    
    const [isShake,setIsShake] = useState(false);
    const [inputText,setInputText] = useState("");
    const [isClicked, setIsClicked] = useState(false);
    const {sendMessage, populateSocketId} = useContext(NewInstanceContext);

    const handleHover = () => {
        setIsShake(!isShake);
    }
    
    const handleClick = () => {
        setIsClicked(!isClicked);
        if(inputText !== "") {
            console.log(inputText);
            populateSocketId();
            sendMessage(inputText);
        }
        setInputText("");
    }

    const handleChange = (e) => {
        e.preventDefault();
        //setIsself(prevState => !prevState);
        setInputText(e.target.value);
    }

    const handleKeyDown = (e) => {
        //e.preventDefault();
        if(e.keyCode === 13) {
            setIsClicked(!isClicked);
            if(inputText !== "") {
                console.log(inputText);
                populateSocketId();
                sendMessage(inputText);
            }
            setInputText("");   
        }
    }


    return(
        <div className={styles.chatBoxParentContainer}>
            <input 
                type="text" 
                className={styles.textBox} 
                placeholder="Start typing here.."
                onChange={handleChange}
                value={inputText}
                onKeyDown={handleKeyDown}
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