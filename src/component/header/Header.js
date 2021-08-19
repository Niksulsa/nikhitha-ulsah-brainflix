import React from 'react'
import SearchBox from '../search-box/SearchBox'
import './header.scss'


function Header() {
    return (
        <div className="header">
            <img src="../assets/logo/logo-brainflix.svg" alt="logo"/>
            <div>
                 <SearchBox/>
                 <button>Upload</button>
                 <img src="./assets/images/mohan-muruge.jpg"alt="mohan-muruge"/>
            </div>
        </div>
    )
}

export default Header
