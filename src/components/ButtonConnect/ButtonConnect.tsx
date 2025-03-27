import {
    useState,
    HTMLAttributes,
    PropsWithChildren
} from 'react';
import clsx from 'clsx';
import {
    useTonAddress,
    useTonConnectUI
} from '@tonconnect/ui-react';

import IconWalletConnect from '../../assets/images/icon_wallet_connect.svg?react';

import styles from './ButtonConnect.module.scss';

type Props = HTMLAttributes<HTMLDivElement>

function ButtonConnect({
    children,
    ...props
}: PropsWithChildren<Props>) {
    console.log('ButtonConnect');

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const address = useTonAddress();
    const [tonConnectUI] = useTonConnectUI();

    const shortAddress = address ?
        `${address.slice(0, 4)}...${address.slice(-4)}` :
        address;

    function handleClick() {
        if (!address) {
            handleConnect();
        } else {
            setIsOpen(!isOpen);
        }
    }

    async function handleConnect() {
        await tonConnectUI.openModal();
    }

    async function handleDisconnect() {
        await tonConnectUI.disconnect();
    }

    return (
        <div
            className={styles.ButtonConnect}
            {...props}
        >
            <button
                className={styles.ButtonConnect__button}
                onClick={handleClick}
            >
                <IconWalletConnect />
                {address ?
                    <>
                        <span className={styles.ButtonConnect__textConnected}>
                            $55888.55
                        </span>
                        <span className={clsx(
                            styles.ButtonConnect__textConnected,
                            styles.ButtonConnect__textConnected_desktop
                        )}>
                            {shortAddress}
                        </span>
                    </> : <>
                        <span className={styles.ButtonConnect__textDefault}>
                            Connect
                        </span>
                        <span className={clsx(
                            styles.ButtonConnect__textDefault,
                            styles.ButtonConnect__textDefault_desktop
                        )}>
                            Wallet
                        </span>
                    </>
                }
            </button>
            {address && isOpen &&
                <div className={styles.ButtonConnect__body}>
                    <div className={styles.ButtonConnect__item}>
                        <img
                            src="https://userconcept.github.io/userconcept-swap-client/images/image_ton.png"
                            width="120"
                            height="120"
                            alt="TON"
                        />
                        <span>{shortAddress}</span>
                    </div>
                    <button
                        className={styles.ButtonConnect__buttonDisconnect}
                        onClick={handleDisconnect}
                    >
                        Disconnect
                    </button>
                </div>
            }
        </div>
    );
}

export default ButtonConnect;
