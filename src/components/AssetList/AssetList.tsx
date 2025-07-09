import clsx from 'clsx';

import AssetItem from '../AssetItem/AssetItem.tsx';

import type { AssetItemType } from '../../types/AssetItem.types.ts';

import styles from './AssetList.module.scss';

type Props = {
    className: string;
    items: AssetItemType[];
    onSelect: (item: AssetItemType) => void;
}

function AssetList({
    className,
    items,
    onSelect
}: Props) {
    console.log('AssetList');

    const renderItems = items.map((item: AssetItemType) =>
        <AssetItem
            key={item.id}
            className={styles.AssetList__AssetItem}
            {...item}
            onSelect={() => onSelect(item)}
        />
    );

    return (
        <ul
            className={clsx(
                styles.AssetList,
                className
            )}
        >
            {renderItems}
        </ul>
    );
}

export default AssetList;
