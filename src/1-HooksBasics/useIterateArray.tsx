import { useState } from 'react';

export const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function App() {
    const { current, next } = useIterateArray(DAYS_OF_WEEK);

    return (
        <>
            <h1>{`Current day of week: ${DAYS_OF_WEEK[current]}`}</h1>
            <button onClick={() => next()}>Next</button>
        </>
    )
}

type IterateArray = {
    current: number;
    next: () => void;
}

function useIterateArray(array: any[]): IterateArray {
    const [ index, setIndex ] = useState<number>(0);

    const next = () => setIndex((prev) => (prev + 1) % array.length)


    return  {current: index, next }
}
