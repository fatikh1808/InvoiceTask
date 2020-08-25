import React from 'react';
import './App.css';
import SideBar from "./components/sideBar/SideBar";
import Routing from "./components/routing/Routing";
import {BrowserRouter as Router} from "react-router-dom";

const App = (props) => {

    const {data, getAvatar, userAvatar, isAuthenticated, logout, isCheating, addTerminal, deleteItem, terminalItems} = props;

    return (
        <div className="App">
            <div className={'sideBar'}>
                <SideBar userAvatar={userAvatar} isAuthenticated={isAuthenticated} logout={logout}/>
            </div>
            <div className={'content'}>
                <Router>
                    <Routing
                        isAuthenticated={isAuthenticated}
                        getAvatar={getAvatar}
                        data={data}
                        isCheating={isCheating}
                        addTerminal={addTerminal}
                        deleteItem={deleteItem}
                        terminalItems={terminalItems}
                    />
                </Router>
            </div>
        </div>
    );
}

export default App;
