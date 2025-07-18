import {
    useNavigate,
    useLocation
} from 'react-router';
import { useSetAtom } from 'jotai';
import {
    fromAssetAtom,
    toAssetAtom,
    fromValueAtom,
    toValueAtom,
    fromCurrencyAtom,
    toCurrencyAtom
} from '../../store/atoms.ts';

import ModalBase from '../ModalBase/ModalBase.tsx';
import InputIcon from '../InputIcon/InputIcon.tsx';
import AssetList from '../AssetList/AssetList.tsx';

import IconSearch from '../../assets/images/icon_search.svg?react';

import { AssetItems } from '../../data/AssetItems.data.ts';

import type { AssetItemType } from '../../types/AssetItem.types.ts';

import styles from './ModalAssets.module.scss';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    direction: "from" | "to";
}

function ModalAssets({
    isOpen,
    onClose,
    title,
    direction
}: Props) {
    console.log('ModalAssets');

    const navigate = useNavigate();
    const location = useLocation();

    const setFromAsset = useSetAtom(fromAssetAtom);
    const setToAsset = useSetAtom(toAssetAtom);
    const setFromValue = useSetAtom(fromValueAtom);
    const setToValue = useSetAtom(toValueAtom);
    const setFromCurrency = useSetAtom(fromCurrencyAtom);
    const setToCurrency = useSetAtom(toCurrencyAtom);

    function handleInputChange() {
        console.log('Hi! from ModalAssets.tsx');
    }

    function handleSelect(item: AssetItemType) {
        const searchParams = new URLSearchParams(location.search);

        if (direction === 'from') {
            setFromAsset(item);
            searchParams.set('from', item.symbol);
        } else {
            setToAsset(item);
            searchParams.set('to', item.symbol);
        }

        navigate({ search: searchParams.toString() }, { replace: true });

        setFromValue('');
        setToValue('');
        setFromCurrency(0);
        setToCurrency(0);

        onClose();
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
                    id="search-token"
                    name="search-token"
                    onChange={handleInputChange}
                    autoComplete="off"
                    placeholder="Search by name"
                >
                    <IconSearch />
                </InputIcon>
                <AssetList
                    className={styles.ModalAssets__AssetList}
                    items={AssetItems}
                    onSelect={handleSelect}
                />
            </div>
        </ModalBase>
    );
}

export default ModalAssets;
