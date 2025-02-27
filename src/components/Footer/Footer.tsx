import Logo from '../Logo/Logo.tsx';
import NavFooter from '../NavFooter/NavFooter.tsx';

import styles from './Footer.module.scss';

function Footer() {
    console.log('Footer');

    return (
        <footer className={styles.Footer}>
            <div className={styles.Footer__container}>
                <Logo className={styles.Footer__Logo} />
                <NavFooter className={styles.Footer__NavFooter} />
            </div>
        </footer>
    );
}

export default Footer;
