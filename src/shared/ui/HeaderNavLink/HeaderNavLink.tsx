import React from 'react';
import styles from './HeaderNavLink.module.scss';
import classNames from 'classnames';

type HeaderNavLinkProps = {
    name: string;
    to?: string;
    className?: string;
    isActive?: boolean;
};

export const HeaderNavLink: React.FC<HeaderNavLinkProps> = ({ name, to, className, isActive = false }) => {
    return (
        <a href={to} className={classNames(styles.link, { [styles.active]: isActive }, className)}>
            {name}
        </a>
    );
};
