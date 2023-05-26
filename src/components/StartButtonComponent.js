import styles from "./StartButtonComponent.module.css";
import { useNavigate } from "react-router-dom";

const StartButtonComponent = () => {
    const navigate = useNavigate();
    const navigateToChat = () => {
        navigate("/chat")
    }

    return(
        <div className={styles.startBtnContainer}>
            <button className={styles.startBtn} onClick={navigateToChat}>Let's Start!</button>
        </div>
    );
}

export default StartButtonComponent;