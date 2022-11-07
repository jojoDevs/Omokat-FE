import React from 'react';
import logoBlack from '../../assets/logo/logo_black.svg'
import profile from '../../assets/icons/default_profile.svg'
import '../../shared/styles/header.scss'

const Header = () => {
    return (
        <div className='headerWrapper'>
            <img className='headerLogo' src={logoBlack} alt="logo"/>
            <p>귀여운 고양이들과 함께 하는 오목 한 판!</p>
            <img className='headerProfile' src={profile} alt="profile"/>
        </div>
    )
}

export default Header