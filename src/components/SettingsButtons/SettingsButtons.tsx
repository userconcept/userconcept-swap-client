import { useAtom } from 'jotai';
import clsx from 'clsx';

import { activeSlippageAtom } from '../../store/atoms.ts';

import Title from '../Title/Title.tsx';
import Text from '../Text/Text.tsx';
import Button from '../Button/Button.tsx';

import { SlippageButtons } from '../../data/SlippageButtons.data.ts';

import type { SlippageButtonType } from '../../types/SlippageButton.types.ts';

import styles from './SettingsButtons.module.scss';

function SettingsButtons({ className }: { className: string; }) {
    console.log('SettingsButtons');

    const [activeSlippage, setActiveSlippage] = useAtom(activeSlippageAtom);

    function handleButtonClick(item: SlippageButtonType) {
        setActiveSlippage(item.percents);
    }

    console.log('activeSlippage:', activeSlippage);

    const renderButtons = SlippageButtons.map((item: SlippageButtonType) =>
        <Button
            key={item.id}
            className={clsx(
                styles.SettingsButtons__Button,
                activeSlippage ===
                    item.percents && styles.SettingsButtons__Button_active
            )}
            color="base"
            onClick={() => handleButtonClick(item)}
        >
            {item.text}
        </Button>
    );

    return (
        <div
            className={clsx(
                styles.SettingsButtons,
                className
            )}
        >
            <Title
                className={styles.SettingsButtons__Title}
                tag="h3"
                size="h3"
            >
                Slippage
            </Title>
            <Text className={styles.SettingsButtons__Text}>
                Your transaction will revert if the price changes unfavorably by more than this percentage.
            </Text>
            <div className={styles.SettingsButtons__buttons}>
                {renderButtons}
            </div>
        </div>
    );
}

export default SettingsButtons;
