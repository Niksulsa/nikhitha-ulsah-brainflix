import './App.scss';
import Header from './component/header/Header';
import React from 'react';
import HomePage from '../src/pages/home/HomePage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import UploadPage from './pages/upload/UploadPage';


function App() {
    return (
        <BrowserRouter className="App">
            <Header/>
            <Switch>
            <Route path="/upload" 
                    component={UploadPage}/>
                <Route path="/" exact
                    component={HomePage}/>
                <Route path="/:videoId"
                    component={HomePage}/>       
            </Switch>
        </BrowserRouter>
    );
};

export default App;
