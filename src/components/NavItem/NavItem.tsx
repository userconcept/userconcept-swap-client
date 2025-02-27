import { PropsWithChildren } from 'react';
import {
    useMatch,
    NavLink
} from 'react-router';
import clsx from 'clsx';

import styles from './NavItem.module.scss';

type Props = {
    className: string;
    href: string;
}

function NavItem({
    className,
    href,
    children
}: PropsWithChildren<Props>) {
    console.log('NavItem');

    const match = useMatch(href);

    return (
        <li className={clsx(
            styles.NavItem,
            match && styles.NavItem_active,
            className
        )}>
            <NavLink className={styles.NavItem__link} to={href}>
                {children}
            </NavLink>
        </li>
    );
}

export default NavItem;
