import React from 'react';

import './Header.css'
const Header = ()=> {
    return(
        
        <section className="Header">
            <form id="div">
            <section className="Header-top">
                <section className="Header-top-logo" id="logo">
                    MRPaw's
                    <p>Welcome to MRPaw's a place to keep Your Pets Healthy and Happy.Here you will find everything need to keep Pets Happy.</p>
                </section>
                <span id="nav">
                <span id="home">Home</span><span id="st">Menu</span><span id="in">Help</span><span id="prof">Profile</span>
                </span>
                
            </section>
            </form>
            
        </section>
    );
}

export default Header;
