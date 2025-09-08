function colorValue(): string {
    const numVal = Math.round(100 + Math.random() * 100);
    const stringValue = numVal.toString(16);

    return stringValue.length < 2 ? '0' + stringValue : stringValue;
}

export function generateRandomColor(): string {
    const r = colorValue();
    const g = colorValue();
    const b = colorValue();

    return `#${r}${g}${b}`;
}