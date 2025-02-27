import {
    ComponentProps,
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    PropsWithChildren
} from 'react';
import { Link } from 'react-router';
import clsx from 'clsx';

import styles from './ButtonSquare.module.scss';

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
}

type Props = ComponentProps<typeof Link>
    | AnchorProps
    | ButtonHTMLAttributes<HTMLButtonElement>

type CustomProps = {
    color: "base";
    text: string;
}

function ButtonSquare({
    className,
    children,
    color,
    text,
    ...props
}: PropsWithChildren<Props> & CustomProps) {
    console.log('ButtonSquare');

    const cnGroup = clsx(
        styles.ButtonSquare,
        styles[`ButtonSquare_${color}`],
        className
    );

    if ('to' in props) {
        return (
            <Link
                className={cnGroup}
                {...props}
            >
                {children}
                <span className={styles.ButtonSquare__text}>{text}</span>
            </Link>
        );
    }

    if ('href' in props) {
        return (
            <a
                className={cnGroup}
                {...props}
            >
                {children}
                <span className={styles.ButtonSquare__text}>{text}</span>
            </a>
        );
    }

    return (
        <button
            className={cnGroup}
            {...props}
        >
            {children}
            <span className={styles.ButtonSquare__text}>{text}</span>
        </button>
    );
}

export default ButtonSquare;
