import { Link } from 'react-router';
import clsx from 'clsx';

import IconLogoUserconcept from '../../assets/images/icon_logo_userconcept.svg?react';
import IconLogoText from '../../assets/images/icon_logo_text.svg?react';

import styles from './Logo.module.scss';

function Logo({ className }: { className: string; }) {
    console.log('Logo');

    return (
        <Link
            className={clsx(
                styles.Logo,
                className
            )}
            to="/"
        >
            <IconLogoUserconcept />
            <IconLogoText />
            <span className={styles.Logo__text}>userconcept</span>
        </Link>
    );
}

export default Logo;
