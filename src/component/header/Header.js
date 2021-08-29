import React from 'react'
import SearchBox from '../search-box/SearchBox'
import './header.scss';
import Logo from '../../assets/logo/logo-brainflix.svg';
import Avatar from '../../assets/Images/mohan-muruge.jpg';
import {Link} from 'react-router-dom';


function Header() {
    return (
        <div className="header">
            <Link to="/" className="header__logolink">
                <img className="header__logo"
                    src={Logo}
                    alt="logo"/>
            </Link>
            <div className="header__uploadbox">
                <SearchBox/>
                <div className="header__avatarbox">
                    <Link to="/upload" className="header__uploadlink">
                        <button className="header__upload">
                            <span className="header__uploadsign">&#43;</span>Upload
                        </button>
                    </Link>
                    <img alt="mohan-muruge" className="header__avatar"
                        src={Avatar}/>
                </div>
            </div>

        </div>
    )
}

export default Header
