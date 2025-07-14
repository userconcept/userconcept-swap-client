import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './Text.module.scss';

type Props = {
    className?: string;
}

function Text({
    className,
    children
}: PropsWithChildren<Props>) {
    console.log('Text');

    return (
        <p className={clsx(styles, className)}>
            {children}
        </p>
    );
}

export default Text;
