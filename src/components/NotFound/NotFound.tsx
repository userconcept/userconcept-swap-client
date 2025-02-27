import Title from '../Title/Title.tsx';

import styles from './NotFound.module.scss';

function NotFound({ text }: { text: string; }) {
    console.log('NotFound');

    return (
        <section className={styles.NotFound}>
            <div className={styles.NotFound__container}>
                <Title
                    className={styles.NotFound__Title}
                    tag="h1"
                    size="h1"
                >
                    {text}
                </Title>
            </div>
        </section>
    );
}

export default NotFound;
