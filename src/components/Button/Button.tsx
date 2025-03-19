import {
    ComponentProps,
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    PropsWithChildren
} from 'react';
import { Link } from 'react-router';
import clsx from 'clsx';

import styles from './Button.module.scss';

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
}

type Props = ComponentProps<typeof Link>
    | AnchorProps
    | ButtonHTMLAttributes<HTMLButtonElement>

type CustomProps = {
    color: "primary";
}

function Button({
    className,
    color,
    children,
    ...props
}: PropsWithChildren<Props> & CustomProps) {
    console.log('Button');

    const cnGroup = clsx(
        styles.Button,
        styles[`Button_${color}`],
        className
    );

    if ('to' in props) {
        return (
            <Link
                className={cnGroup}
                {...props}
            >
                {children}
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
            </a>
        );
    }

    return (
        <button
            className={cnGroup}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
