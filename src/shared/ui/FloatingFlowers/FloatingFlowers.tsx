import React from 'react';
import styles from './FloatingFlowers.module.scss';

const flowers = Array.from({ length: 12 }, (_, i) => i);

type FloatingFlowersProps = {
    className?: string;
    variant?: 'hero' | 'soft';
};

const opacityMap = {
    hero: [0.6, 0.85, 0.45, 0.9, 0.65, 0.8, 0.5, 0.88, 0.6, 0.82, 0.45, 0.75],
    soft: [0.25, 0.4, 0.2, 0.45, 0.3, 0.38, 0.22, 0.42, 0.28, 0.35, 0.2, 0.32],
};

export const FloatingFlowers: React.FC<FloatingFlowersProps> = ({ className = '', variant = 'hero' }) => {
    return (
        <div className={`${styles.flowers} ${className}`} aria-hidden="true">
            {flowers.map((flower) => (
                <span
                    key={flower}
                    className={styles.flower}
                    style={
                        {
                            '--flower-opacity': opacityMap[variant][flower],
                        } as React.CSSProperties
                    }
                >
                    🌸
                </span>
            ))}
        </div>
    );
};
