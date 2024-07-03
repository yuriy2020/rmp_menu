import TopBar from "./components/Topbar/Topbar";
import Menu from "./components/Menu/Menu";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import './App.css'
import React from "react";

function App() {
    return (
        <div className="App">
            <TopBar/>
            <div className="main__container">
                <Menu/>
                <Main/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
