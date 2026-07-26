import React from 'react';
import styles from './ArrowTooltip.module.scss';
import classNames from 'classnames';

type ArrowTooltipProps = {
    title?: string;
    children: React.ReactNode;
    isOpen?: boolean;
};

export const ArrowTooltip: React.FC<ArrowTooltipProps> = ({ title = 'Copied!', children, isOpen = false }) => {
    const tooltipClassNames = classNames(styles.tooltip, isOpen && styles['tooltip--visible']);
    return (
        <div className={styles.wrapper}>
            {children}
            {isOpen && <div className={tooltipClassNames}>{title}</div>}
        </div>
    );
};
