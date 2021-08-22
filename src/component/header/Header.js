import React from 'react'
import SearchBox from '../search-box/SearchBox'
import './header.scss';
import Logo from '../../assets/logo/logo-brainflix.svg';
import Avatar from '../../assets/Images/mohan-muruge.jpg'

function Header() {
    return (
        <div className="header">
            <img src={Logo} alt="logo"/>
            <div>
                <SearchBox/>
            </div>
            <div className="header__uploadbox">
                 <button className="header__upload">Upload</button>
                 <img className="header__avatar" src={Avatar}alt="mohan-muruge"/>
            </div>    
        
        </div>
    )
}

export default Header
