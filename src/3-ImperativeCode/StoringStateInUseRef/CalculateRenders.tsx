import { useState, useRef, useEffect } from 'react';
import { CSSProperties } from 'react';
import { ChangeEventHandler } from 'react';
export function CalculateRenders() {
    const [text, setText] = useState('');

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setText(e.target.value);
    };

    console.log('rendered');

    return (
        <div style={{ padding: 24, position: 'relative' }}>
            <input type="text" value={text} onChange={handleChange} />
            <RendersCounter />
        </div>
    )
}

export function RendersCounter() {
    const refContainer = useRef<number>(1);

    const style: CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#0008',
        color: 'white',
        padding: '0px 4px',
    };

    useEffect(() => {
        refContainer.current = refContainer.current + 1;
        console.log('ref-render');
    })



    return (
        <div style={style}>
            {refContainer.current}
        </div>
    )
}