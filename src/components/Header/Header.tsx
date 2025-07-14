import React, { useState } from 'react';
import clsx from 'clsx';

import Logo from '../Logo/Logo.tsx';
import NavHeader from '../NavHeader/NavHeader.tsx';
import ButtonNav from '../ButtonNav/ButtonNav.tsx';
import ButtonSquare from '../ButtonSquare/ButtonSquare.tsx';
import ButtonConnect from '../ButtonConnect/ButtonConnect.tsx';

import IconModeLight from '../../assets/images/icon_mode_light.svg?react';

import styles from './Header.module.scss';

function Header() {
    console.log('Header');

    const [navIsOpen, setNavIsOpen] = useState<boolean>(false);

    function handleNavOpen() {
        setNavIsOpen(!navIsOpen);
    }

    function handleClick(e: React.MouseEvent<HTMLElement>) {
        if (navIsOpen && e.target instanceof HTMLAnchorElement) {
            setNavIsOpen(!navIsOpen);
        }
    }

    return (
        <header
            className={clsx(
                styles.Header,
                navIsOpen && styles.Header_NavHeader_open
            )}
        >
            <div className={styles.Header__container}>
                <Logo className={styles.Header__Logo} />
                <NavHeader
                    className={styles.Header__NavHeader}
                    onClick={handleClick}
                />
                <ButtonNav
                    className={styles.Header__ButtonNav}
                    isActive={navIsOpen}
                    onClick={handleNavOpen}
                >
                    Open navigation
                </ButtonNav>
                <ButtonSquare
                    className={styles.Header__ButtonSquare}
                    color="base"
                    text="Change light and dark mode"
                >
                    <IconModeLight />
                </ButtonSquare>
                <ButtonConnect />
            </div>
            {navIsOpen &&
                <div
                    className={styles.Header__overlay}
                    onClick={handleNavOpen}
                ></div>
            }
        </header>
    );
}

export default Header;
