import { useEffect, useImperativeHandle, useState, useRef, forwardRef } from "react";

type BeaconRef = {
    animate: () => void;
}

export function App() {
    const beaconRef = useRef<BeaconRef>(null);

    const animate = () => {
        beaconRef.current?.animate();
    }

    return (
        <>
            <button onClick={animate}>Animate</button>
            <Beacon ref={beaconRef} />
        </>
    )
}

export const Beacon = forwardRef((props, ref) => {
    const [key, setKey] = useState(0);

    //added code
    useImperativeHandle(ref, () => ({
        animate: () => {
            setKey((prev) => prev + 1)
        }
    }))

    return <AnimatedSquare key={key} />
});

function AnimatedSquare() {
    const [bgColor, setBgColor] = useState('yellow');

    useEffect(() => {
        setBgColor('red');
    }, []);

    return (
        <div
            data-testid="animated"
            style={{
                backgroundColor: bgColor,
                width: 20,
                height: 20,
                borderRadius: 3,
                margin: 5,
                transition: 'all 0.5s ease-in-out',
            }}
        />
    )
}