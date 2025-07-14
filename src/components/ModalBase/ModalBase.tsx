import React, { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

import Title from '../Title/Title.tsx';
import ButtonClose from '../ButtonClose/ButtonClose.tsx';

import type { ReactNode } from 'react';

import styles from './ModalBase.module.scss';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

function ModalBase({
    isOpen,
    onClose,
    title,
    children
}: PropsWithChildren<Props>) {
    console.log('ModalBase');

    const modalRoot = document.body;

    if (!isOpen) return null;

    function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    return ReactDOM.createPortal(
        <div
            className={styles.ModalBase}
            onClick={handleOverlayClick}
        >
            <div className={styles.ModalBase__container}>
                <div className={styles.ModalBase__modal}>
                    <div className={styles.ModalBase__header}>
                        <Title
                            className={styles.ModalBase__title}
                            tag="h2"
                            size="h2"
                        >
                            {title}
                        </Title>
                        <ButtonClose
                            className={styles.ModalBase__ButtonClose}
                            onClick={onClose}
                        >
                            Close modal
                        </ButtonClose>
                    </div>
                    <div className={styles.ModalBase__body}>
                        {children}
                    </div>
                </div>
            </div>
        </div>,
        modalRoot
    );
}

export default ModalBase;
