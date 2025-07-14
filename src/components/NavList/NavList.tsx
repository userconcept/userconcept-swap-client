import clsx from 'clsx';

import NavItem from '../NavItem/NavItem.tsx';

import { NavItems } from '../../data/NavItems.data.ts';

import type { NavItemType } from '../../types/NavItem.types.ts';

import styles from './NavList.module.scss';

function NavList({ className }: { className: string; }) {
    console.log('NavList');

    const renderItems = NavItems.map((item: NavItemType) =>
        <NavItem
            key={item.id}
            className={styles.NavList__NavItem}
            href={item.href}
        >
            {item.text}
        </NavItem>
    );

    return (
        <ul className={clsx(
            styles.NavList,
            className
        )}>
            {renderItems}
        </ul>
    );
}

export default NavList;
