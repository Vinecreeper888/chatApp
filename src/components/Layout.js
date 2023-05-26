import React from "react";
import Nav from "./Nav";

const Layout = (props) => {
    return(
        <React.Fragment>
            <Nav/>
            <main>
                {props.children}
            </main>
        </React.Fragment>
    );
}

export default  Layout;