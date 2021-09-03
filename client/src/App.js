import Header from './component/header/Header';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import UploadPage from './pages/upload/UploadPage';
import HomePage from './pages/home/HomePage';
import './styles/App.scss';


function App() {
    return (
        <BrowserRouter className="App">
            <Header/>
            <Switch>
            <Route path="/upload" 
                    component={UploadPage}/>
                <Route path="/" exact 
                    component={HomePage}/>
                <Route path="/videos/:id"
                    component={HomePage}/>       
            </Switch>
        </BrowserRouter>
    );
};

export default App;
