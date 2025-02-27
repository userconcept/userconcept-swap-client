import Title from '../Title/Title.tsx';

import styles from './About.module.scss';

function About() {
    console.log('About');

    return (
        <section className={styles.About}>
            <div className={styles.About__container}>
                <Title
                    className={styles.About__Title}
                    tag="h1"
                    size="h1"
                >
                    About
                </Title>
            </div>
        </section>
    );
}

export default About;
