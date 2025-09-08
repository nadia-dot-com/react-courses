import { useEffect, useState, JSX } from 'react';
const ONE_SECOND = 1000;

export function Timer(): JSX.Element {
    const [seconds, setSeconds] = useState<number>(0);
    const [active, setActive] = useState<boolean>(false);

    const toggleActive = () => {
        setActive((val) => !val)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (active) {
                setSeconds((prev) => prev + 1)
            }
        }, ONE_SECOND);

        return () => {
            clearInterval(interval)
        }
    }, [active])

    return (
        <>
            <h1>{seconds}s</h1>
            <button onClick={toggleActive}>
                {active ? "Stop Timer" : "Start Timer"}
            </button>
        </>
    )
}