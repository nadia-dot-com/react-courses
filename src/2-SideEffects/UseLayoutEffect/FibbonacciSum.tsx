import { useState, useMemo} from 'react';

export function FibonacciSum() {
    const [fibonacci, setFibonacci] = useState([0, 1]);

    // const [sum, setSum ] = useState(1);

    const sum = useMemo(()=> fibonacci.reduce((a, b) => a + b, 0), [fibonacci] )

    // useEffect(() => {
    //     setSum(fibonacci.reduce((a, b) => a + b, 0));
    // }, [fibonacci]);

    const addNextNumber = () => {
        setFibonacci((array) => {
            const beforeLast = array[array.length - 2];
            const last = array[array.length - 1];
            return [...array, beforeLast + last];
        });
    };

    return (
        <>
            <h1>Fibonacci sequence:</h1>
            <h2>[{fibonacci.join(", ")}]</h2>
            <h2>Total: {sum}</h2>
            <button onClick={addNextNumber}>Add Next</button>
        </>
    )
}