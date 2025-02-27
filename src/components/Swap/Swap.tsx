import Title from '../Title/Title.tsx';

import styles from './Swap.module.scss';

function Swap() {
    console.log('Swap');

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
            </div>
        </section>
    );
}

export default Swap;
