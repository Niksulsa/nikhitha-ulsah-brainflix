import './App.scss';
import Header from './component/header/Header';
import React from 'react';
import HomePage from '../src/pages/home/HomePage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import UploadPage from './pages/upload/UploadPage';
import PopUp from './component/pop-up/PopUp';


function App() {
    return (
        <BrowserRouter className="App">
            <PopUp/>
            <Header/>
            <Switch>
            <Route path="/upload" 
                    component={UploadPage}/>
                <Route path="/home" 
                    component={HomePage}/>
                <Route path="/:videoId"
                    component={HomePage}/>   
                <Route path="/home/upload"
                render={(routerProps)=><PopUp message={"Video is published"}{...routerProps}/>}/>

            </Switch>
        </BrowserRouter>
    );
};

export default App;
