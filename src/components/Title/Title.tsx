import {
    createElement,
    PropsWithChildren
} from 'react';
import clsx from 'clsx';

import styles from './Title.module.scss';

type Props = {
    className?: string;
    tag: "h1" | "h2" | "h3" | "div";
    size?: "h1" | "h2" | "h3";
    hidden?: boolean;
}

function Title({
    className,
    tag,
    size,
    children,
    hidden
}: PropsWithChildren<Props>) {
    console.log('Title');

    const cnGroup = clsx(
        hidden ? styles.Title_hidden : styles.Title,
        styles[`Title_${size}`],
        className
    );

    return createElement(
        `${tag}`,
        { className: cnGroup },
        children
    );
}

export default Title;
