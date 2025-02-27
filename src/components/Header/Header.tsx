import { useState } from 'react';

import Logo from '../Logo/Logo.tsx';
import NavHeader from '../NavHeader/NavHeader.tsx';
import ButtonNav from '../ButtonNav/ButtonNav.tsx';
import ButtonSquare from '../ButtonSquare/ButtonSquare.tsx';
import ButtonConnect from '../ButtonConnect/ButtonConnect.tsx';

import IconSettings from '../../assets/images/icon_settings.svg?react';

import styles from './Header.module.scss';

function Header() {
    console.log('Header');

    const [navIsOpen, setNavIsOpen] = useState<boolean>(false);

    function handleNavOpen() {
        setNavIsOpen(!navIsOpen);
    }

    function handleClick(e: React.MouseEvent<HTMLElement>) {
        if (
            navIsOpen &&
            (
                e.target instanceof HTMLAnchorElement ||
                e.target instanceof SVGElement
            )
        ) {
            setNavIsOpen(!navIsOpen);
        }
    }

    return (
        <header className={styles.Header} onClick={handleClick}>
            <div className={styles.Header__container}>
                <Logo className={styles.Header__Logo} />
                <NavHeader
                    className={styles.Header__NavHeader}
                    isActive={navIsOpen}
                />
                <ButtonNav
                    className={styles.Header__ButtonNav}
                    isActive={navIsOpen}
                    onClick={handleNavOpen}
                >
                    Open Navigation
                </ButtonNav>
                <ButtonSquare
                    className={styles.Header__ButtonSquare}
                    color="base"
                    text="Open Settings"
                >
                    <IconSettings />
                </ButtonSquare>
                <ButtonConnect />
            </div>
        </header>
    );
}

export default Header;
