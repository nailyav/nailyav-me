import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import styles from './Tooltip.module.css';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import { hexToRgba } from '../../utils/colorUtils';

export interface TooltipProps {
    /** Текст подсказки */
    tooltipContent: string | React.ReactNode;
    /** Дочерние элементы */
    children: React.ReactNode;
    /** Дополнительный класс */
    className?: string;
    /** Стиль подсказки */
    style?: CSSProperties;
    /** Время, через которое будет показана подсказка */
    displayDelay?: number;
    /** Время, через которое будет скрыта подсказка */
    hideDelay?: number;
    /** Прозрачность подсказки (значение от 0 до 1) */
    opacity?: number;
    /** Цвет подсказки */
    color?: string;
}

interface ChildrenRect {
    x: number;
    y: number;
    width: number;
    height: number;
    contentX: number;
    contentY: number;
    contentWidth: number;
    contentHeight: number;
}

export const Tooltip: FC<TooltipProps> = ({
    tooltipContent,
    children,
    className,
    style,
    displayDelay = 200,
    hideDelay = 500,
    opacity = 0.4,
    color,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [childrenRect, setChildrenRect] = useState<ChildrenRect>({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        contentX: 0,
        contentY: 0,
        contentWidth: 0,
        contentHeight: 0,
    });
    const timeoutRef = useRef<number | null>(null);
    const mousePositionRef = useRef({ x: 0, y: 0 });
    const childrenRef = useRef<HTMLDivElement>(null);
    const tooltipElementRef = useRef<HTMLDivElement>(null);

    const updateContainerRect = () => {
        if (childrenRef.current) {
            const childElement = childrenRef.current.firstElementChild as HTMLElement;
            const rect = childElement.getBoundingClientRect();

            const computedStyle = window.getComputedStyle(childElement);

            const paddingTop = parseFloat(computedStyle.paddingTop);
            const paddingBottom = parseFloat(computedStyle.paddingBottom);
            const paddingLeft = parseFloat(computedStyle.paddingLeft);
            const paddingRight = parseFloat(computedStyle.paddingRight);

            const contentX = rect.left + paddingLeft;
            const contentY = rect.top + paddingTop;
            const contentHeight = rect.height - paddingTop - paddingBottom;
            const contentWidth = rect.width - paddingLeft - paddingRight;

            setChildrenRect({
                x: rect.left,
                y: rect.top,
                width: rect.width,
                height: rect.height,
                contentX: contentX,
                contentY: contentY,
                contentWidth: contentWidth,
                contentHeight: contentHeight,
            });
        }
    };

    useEffect(() => {
        updateContainerRect();
        window.addEventListener('resize', updateContainerRect);
        window.addEventListener('scroll', updateContainerRect);

        return () => {
            window.removeEventListener('resize', updateContainerRect);
            window.removeEventListener('scroll', updateContainerRect);
        };
    }, []);

    const adjustToViewPort = (posX: number, posY: number) => {
        if (tooltipElementRef.current) {
            const OFFSET = 15;

            const tooltipWidth = tooltipElementRef.current.offsetWidth;
            const tooltipHeight = tooltipElementRef.current.offsetHeight;

            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            if (posX + tooltipWidth > viewportWidth) {
                posX = viewportWidth - tooltipWidth - OFFSET;
            }

            if (posY + tooltipHeight > viewportHeight) {
                posY = mousePositionRef.current.y - tooltipHeight - OFFSET;
            }
        }

        return [posX, posY];
    };

    const updateCoords = (mouseX?: number, mouseY?: number) => {
        const OFFSET_X = 8;
        const OFFSET_Y = 15;

        const cursorX = mouseX !== undefined ? mouseX : mousePositionRef.current.x;
        const cursorY = mouseY !== undefined ? mouseY : mousePositionRef.current.y;

        let posX = cursorX + OFFSET_X;
        let posY = cursorY + OFFSET_Y;

        // Проверяем границы экрана
        [posX, posY] = adjustToViewPort(posX, posY);

        setCoords({
            x: posX,
            y: posY,
        });

        if (!isOpen) {
            setIsOpen(true);
            setTimeout(() => {
                setIsVisible(true);
            }, 10);
        }
    };

    const handleMouseEnter = (e: React.MouseEvent) => {
        updateContainerRect();
        mousePositionRef.current = {
            x: e.clientX,
            y: e.clientY,
        };

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = window.setTimeout(() => {
            updateCoords();
        }, displayDelay);
    };

    const handleMouseLeave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        setIsVisible(false);

        setTimeout(() => {
            setIsOpen(false);
        }, hideDelay);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        mousePositionRef.current = {
            x: e.clientX,
            y: e.clientY,
        };

        if (isOpen) {
            updateCoords(e.clientX, e.clientY);
        }
    };
    const isString = typeof tooltipContent === 'string';

    const tooltipStyles = {
        ...style,
        position: 'fixed',
        left: `${coords.x}px`,
        top: `${coords.y}px`,
        zIndex: 1500,
        backgroundColor: isString ? (color ? hexToRgba(color, opacity) : `rgba(0, 0, 0, ${opacity})`) : 'none',
        boxShadow: isString ? '0 4px 14.9px -3px rgba(0, 0, 0, 0.3)' : 'none',
        backdropFilter: isString ? 'blur(5px)' : 'none',
    } as CSSProperties;

    const tooltipClassNames = classNames(styles.tooltip, isVisible && styles['tooltip--visible'], className);

    return (
        <>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                className={styles.wrapper}
                ref={childrenRef}
            >
                {children}
            </div>
            {isOpen &&
                ReactDOM.createPortal(
                    <div ref={tooltipElementRef} className={tooltipClassNames} style={tooltipStyles}>
                        {isString ? (
                            <div style={{ fontSize: '14px', fontFamily: 'var(--font-family-head)' }}>
                                {tooltipContent}
                            </div>
                        ) : (
                            tooltipContent
                        )}
                    </div>,
                    document.body
                )}
        </>
    );
};
