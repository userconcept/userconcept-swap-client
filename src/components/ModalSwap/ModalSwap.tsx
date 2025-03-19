import ModalBase from '../ModalBase/ModalBase.tsx';

import styles from './ModalSwap.module.scss';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
}

function ModalSwap({ isOpen, onClose, title }: Props) {
    console.log('ModalSwap');

    return (
        <ModalBase
            isOpen={isOpen}
            onClose={onClose}
            title={title}
        >
            <div className={styles.ModalSwap}>
                Hi!
            </div>
        </ModalBase>
    );
}

export default ModalSwap;
