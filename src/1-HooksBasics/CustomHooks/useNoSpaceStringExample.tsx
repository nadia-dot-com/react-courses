
//завдання створити хук
import React, { useState, JSX } from 'react';

export default function UseNoSpaceStringExample(): JSX.Element {
    const [value, setValue] = useNoSpaceString('');

    return <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />;
}

function useNoSpaceString(initialValue: string): [string, (newValue: string) => void] {
    const [value, setValue] = useState<string>(initialValue);

    const noSpace = (newValue: string) => setValue(newValue.trim())

    return [value, noSpace]
}
