import { useMemo, useState, useRef } from 'react';

export function App() {
    const [numbers, ] = useState(() => generateRandomArray(1000));

    return <SquaresSum numbers={numbers} />;
}

export function SquaresSum({ numbers }: { numbers: number[] }) {
    const rendersCounterRef = useRef(0);

    const squaresSum = useMemo(() => numbers
        .map(val => val * val)
        .reduce((sum, val) => sum + val, 0), [numbers])

    // const [squaresSum, setSquaresSum] = useState(0);
    // useEffect(() => {
    //     setSquaresSum(() => numbers
    //         .map(val => val * val)
    //         .reduce((sum, val) => sum + val, 0)
    //     );
    // }, [numbers]);

    rendersCounterRef.current++;

    return (
        <>
            <h1>Squares sum: {squaresSum.toFixed(2)}</h1>
            <h2>Renders count: {rendersCounterRef.current}</h2>
        </>
    )
}

function generateRandomArray(size: number) {
    return new Array(size).fill(0).map(() => Math.random() * 100);
}