import styles from "./ChatBox.module.css";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ChatBox = () => {    

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
        setInputText("");
    }

    const handleChange = (e) => {
        e.preventDefault();
        if(e.target.value !== "") {
            setInputText(e.target.value);
        }
    }

    const handleReset = () => {
        console.log("i am getting reset now")
        setInputText("");
    }

    return(
        <div className={styles.chatBoxParentContainer}>
            <input 
                type="text" 
                className={styles.textBox} 
                placeholder="Start typing here.."
                onChange={handleChange}
                onReset={isClicked ? handleReset : null}
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