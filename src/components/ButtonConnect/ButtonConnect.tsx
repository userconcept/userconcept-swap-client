import {
    HTMLAttributes,
    PropsWithChildren
} from 'react';
import clsx from 'clsx';

import IconWalletConnect from '../../assets/images/icon_wallet_connect.svg?react';

import styles from './ButtonConnect.module.scss';

type Props = HTMLAttributes<HTMLDivElement>

function ButtonConnect({
    children,
    ...props
}: PropsWithChildren<Props>) {
    console.log('ButtonConnect');

    return (
        <div
            {...props}
        >
            <button
                className={styles.ButtonConnect__button}
            >
                <IconWalletConnect />
                <span className={styles.ButtonConnect__text}>
                    Connect
                </span>
                <span className={clsx(
                    styles.ButtonConnect__text,
                    styles.ButtonConnect__text_desktop
                )}>
                    Wallet
                </span>
            </button>
        </div>
    );
}

export default ButtonConnect;
