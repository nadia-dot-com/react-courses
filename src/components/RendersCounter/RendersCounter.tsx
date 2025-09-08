import { ReactNode, useEffect, useRef } from 'react';
import classes from './RendersCounter.module.css';

export type RendersCounterProps = {
    children: ReactNode;
};

export function RendersCounter({children}: RendersCounterProps) {
    const RendersCounterRef = useRef<number>(1);

    useEffect(() => {
        RendersCounterRef.current++;
    });

    return (
        <div className={classes.container}>
            {children}
            <div className={classes.RendersCounter}>R: {RendersCounterRef.current}</div>
        </div>
    )
}