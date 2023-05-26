import React from 'react';
import styles from "./Homepage.module.css";
import StartButtonComponent from './StartButtonComponent';
import Layout from './Layout';

const Homepage = () => {
    return(
        <Layout className={styles.homepage}>
            <StartButtonComponent/>
        </Layout>
    );
}

export default Homepage;