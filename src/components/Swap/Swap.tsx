import { useState } from 'react';

import Title from '../Title/Title.tsx';
import Swapper from '../Swapper/Swapper.tsx';
import Rate from '../Rate/Rate.tsx';
import Collapse from '../Collapse/Collapse.tsx';
import Button from '../Button/Button.tsx';
import ModalSwap from '../ModalSwap/ModalSwap.tsx';

import styles from './Swap.module.scss';

function Swap() {
    console.log('Swap');

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <section className={styles.Swap}>
            <div className={styles.Swap__container}>
                <Title
                    className={styles.Swap__Title}
                    tag="h1"
                    size="h1"
                >
                    Swap
                </Title>
                <Swapper className={styles.Swap__Swapper} />
                <Rate className={styles.Swap__Rate} />
                <Collapse className={styles.Swap__Collapse} />
                <Button
                    className={styles.Swap__Button}
                    color="primary"
                    onClick={() => setModalIsOpen(true)}
                >
                    Swap
                </Button>
                <ModalSwap
                    isOpen={modalIsOpen}
                    onClose={() => setModalIsOpen(false)}
                    title="Confirm Swap"
                />
            </div>
        </section>
    );
}

export default Swap;
