import React from 'react'
import SearchBox from '../search-box/SearchBox'
import './header.scss';
import Logo from '../../assets/logo/logo-brainflix.svg';
import Avatar from '../../assets/Images/mohan-muruge.jpg'

function Header() {
    return (
        <div className="header">
            <img className="header__logo"src={Logo} alt="logo"/>
            <div className="header__uploadbox">
                <SearchBox/>
                <div className="header__avatarbox">
                     <button className="header__upload"><span classname="header__uploadsign">&#43;</span>Upload</button>
                    <img className="header__avatar" src={Avatar}alt="mohan-muruge"/>
                </div>
            </div>    
        
        </div>
    )
}

export default Header
