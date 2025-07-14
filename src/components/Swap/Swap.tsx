import { useState } from 'react';

import Title from '../Title/Title.tsx';
import ButtonSquare from '../ButtonSquare/ButtonSquare.tsx';
import Swapper from '../Swapper/Swapper.tsx';
import Rate from '../Rate/Rate.tsx';
import Collapse from '../Collapse/Collapse.tsx';
import Button from '../Button/Button.tsx';
import ModalSettings from '../ModalSettings/ModalSettings.tsx';
import ModalSwap from '../ModalSwap/ModalSwap.tsx';

import IconSettings from '../../assets/images/icon_settings.svg?react';

import styles from './Swap.module.scss';

function Swap() {
    console.log('Swap');

    const [modalSettingsIsOpen, setModalSettingsIsOpen] = useState(false);
    const [modalSwapIsOpen, setModalSwapIsOpen] = useState(false);

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
                <ButtonSquare
                    className={styles.Swap__ButtonSquare}
                    color="base"
                    text="Open settings"
                    onClick={() => setModalSettingsIsOpen(true)}
                >
                    <IconSettings />
                </ButtonSquare>
                <Swapper className={styles.Swap__Swapper} />
                <Rate className={styles.Swap__Rate} />
                <Collapse className={styles.Swap__Collapse} />
                <Button
                    className={styles.Swap__Button}
                    color="surface_container"
                    onClick={() => setModalSwapIsOpen(true)}
                >
                    Swap
                </Button>
                <ModalSettings
                    isOpen={modalSettingsIsOpen}
                    onClose={() => setModalSettingsIsOpen(false)}
                    title="Advanced settings"
                />
                <ModalSwap
                    isOpen={modalSwapIsOpen}
                    onClose={() => setModalSwapIsOpen(false)}
                    title="Confirm swap"
                />
            </div>
        </section>
    );
}

export default Swap;
