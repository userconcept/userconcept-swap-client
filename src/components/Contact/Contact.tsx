import Title from '../Title/Title.tsx';

import styles from './Contact.module.scss';

function Contact() {
    console.log('Contact');

    return (
        <section className={styles.Contact}>
            <div className={styles.Contact__container}>
                <Title
                    className={styles.Contact__Title}
                    tag="h1"
                    size="h1"
                >
                    Contact
                </Title>
            </div>
        </section>
    );
}

export default Contact;
