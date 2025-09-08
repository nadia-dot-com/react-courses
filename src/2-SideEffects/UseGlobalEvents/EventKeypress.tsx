import {useEffect, useState} from 'react';

export function App() {
    const [text, setText] = useState('');

    useEffect(()=> {
        const onKeyPress = (event: KeyboardEvent) => {
            setText((prev) => prev + event.key)
        };

        document.addEventListener('keypress', onKeyPress);

        return () => {
            document.removeEventListener('keypress', onKeyPress)
        }
    }, [])

    return (
        <>
        <h1>{text}</h1>
        <button onClick={() => setText('')}>Clear</button>
        </>
    )
}