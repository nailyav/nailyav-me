import React from 'react';
import styles from './App.module.scss';
import './styles/styles.scss';
import { Tooltip } from 'shared';

const App: React.FC = () => {
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
                <div className={styles.text}>Привет!!! Скоро тут будет контент :0</div>
            </div>
        </Tooltip>
    );
};

export default App;
