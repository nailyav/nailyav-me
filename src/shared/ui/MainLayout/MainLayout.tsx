import React from 'react';
import { GradientBackground, Tooltip } from 'shared';
import styles from './MainLayout.module.scss';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from 'widgets';

export const MainLayout: React.FC = () => {
    const location = useLocation();
    const isProjectPage = location.pathname === '/';

    return (
        <>
            {/* {isProjectPage && <GradientBackground />} */}
            <GradientBackground />
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
                <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }} id="about">
                    <Header />
                    <Outlet />
                </div>
            </Tooltip>
        </>
    );
};
