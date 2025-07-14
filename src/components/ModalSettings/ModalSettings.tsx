import ModalBase from '../ModalBase/ModalBase.tsx';
import SettingsButtons from '../SettingsButtons/SettingsButtons.tsx';

import styles from './ModalSettings.module.scss';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
}

function ModalSettings({ isOpen, onClose, title }: Props) {
    console.log('ModalSettings');

    return (
        <ModalBase
            isOpen={isOpen}
            onClose={onClose}
            title={title}
        >
            <div className={styles.ModalSettings}>
                <SettingsButtons
                    className={styles.ModalSettings__SettingsButtons} />
            </div>
        </ModalBase>
    );
}

export default ModalSettings;
