import React from 'react';

function Header(props){
    return (
        <div>
            <div className='Header'>
                <img className='Logo' src={require('../imgs/logo.png')} alt=""/>
                <span className='Title'> : Wand Builder </span>
            </div>
        </div>
    );
}

export default Header;