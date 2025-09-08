import {useEffect, useState} from 'react'
type Props = {
    emojis: string[];
    delay: number;
    fontSize: number;
}

export function AnimatedEmoji({emojis, delay, fontSize}: Props) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        console.log('start interval' + delay)
        const intervalId = setInterval(() => {
            setCurrentIndex((value) => {
                const newValue = value + 1;
                return newValue >= emojis.length ? 0: newValue;
            });
        }, delay);

        return () => {
            console.log('clear interval ' + delay)
            clearInterval(intervalId);
        };
    }, [delay, emojis.length]);

    return <div style={{fontSize}}>{emojis[currentIndex]}</div>
}