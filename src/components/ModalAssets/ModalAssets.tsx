import ModalBase from '../ModalBase/ModalBase.tsx';
import InputIcon from '../InputIcon/InputIcon.tsx';
import AssetList from '../AssetList/AssetList.tsx';

import IconSearch from '../../assets/images/icon_search.svg?react';

import { AssetItems } from '../../data/AssetItems.data.ts';

import styles from './ModalAssets.module.scss';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
}

function ModalAssets({ isOpen, onClose, title }: Props) {
    console.log('ModalAssets');

    function handleInputChange() {
        console.log('ModalAssets__InputIcon');
    }

    return (
        <ModalBase
            isOpen={isOpen}
            onClose={onClose}
            title={title}
        >
            <div className={styles.ModalAssets}>
                <InputIcon
                    className={styles.ModalAssets__InputIcon}
                    type="text"
                    id={`search-token`}
                    name={`search-token`}
                    onChange={handleInputChange}
                    autoComplete="off"
                    placeholder="Search by name"
                >
                    <IconSearch />
                </InputIcon>
                <AssetList
                    className={styles.ModalAssets__AssetList}
                    items={AssetItems}
                />
            </div>
        </ModalBase>
    );
}

export default ModalAssets;
