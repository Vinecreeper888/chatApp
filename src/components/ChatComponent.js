import Layout from "./Layout";
import ChatBox from "./ChatBox";
import styles from "./ChatComponent.module.css";
import DefaultChatPage from "./DefaultChatPage";

const ChatComponent = () => {
    return(
        <Layout>
            <div className={styles.parentBox}>
                <div className={styles.parentChatBox}>
                    <DefaultChatPage/>
                    <ChatBox/>
                </div>
            </div>
        </Layout>
    );
}

export default ChatComponent;