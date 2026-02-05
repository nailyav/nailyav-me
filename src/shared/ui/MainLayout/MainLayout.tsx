import React from 'react';
import { Tooltip } from 'shared';
import styles from './MainLayout.module.scss';
import { Outlet } from 'react-router-dom';

export const MainLayout: React.FC = () => {
    return (
        <Tooltip
            tooltipContent={
                <img
                    src="https://www.citypng.com/public/uploads/preview/lovely-fluffy-kitty-transparent-background-7358116966754929nosjbdkzd.png"
                    alt="Cat"
                    style={{ width: '50px' }}
                />
            }
            opacity={0}
        >
            <div className={styles.container}>
                <Outlet />
            </div>
        </Tooltip>
    );
};
