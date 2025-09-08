import { Button, ChapterWrapper, Toolbar } from "components";
import { ChangeEvent, ChangeEventHandler, Dispatch, SetStateAction, useState } from "react";

type MathFunction = (a: number, b: number) => number;
type Setter = Dispatch<SetStateAction<number>>;


const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;
const multiply = (a: number, b: number) => a * b;
const divide = (a: number, b: number) => a / b;

const map = new Map<string, MathFunction>([
    ['➕', add],
    ['➖', subtract],
    ['➗', divide],
    ['✖️', multiply]
]);

const buildOnChange = (setter: Setter): ChangeEventHandler<HTMLInputElement> => {
    return (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setter(value ? parseFloat(value) : 0);
    };
};

export function StoringFunctions() {
    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);
    const [sign, setSign] = useState<string>('➕');

    const mathFn = map.get(sign);

    const buildClickHandler = (fnSigh: string) => {
        return () => {
            setSign(fnSigh);
        };
    };

    return (
        <ChapterWrapper title="Storing function in useState" subtitle="Hooks basics, useState">
            <Toolbar>
                <Button onClick={buildClickHandler('➕')} text="➕ Add" disabled={sign === '➕'} />
                <Button onClick={buildClickHandler('➖')} text="➖ Subtract" disabled={sign === '➖'}/>
                <Button onClick={buildClickHandler('➗')} text="➗ Divide" disabled={sign === '➗'}/>
                <Button onClick={buildClickHandler('✖️')} text="✖️ Multiply" disabled={sign === '✖️'} />
            </Toolbar>

            <Toolbar>
                <input type="number" value={a} onChange={buildOnChange(setA)} />
                <div style={{ minWidth: 10, textAlign: 'center' }}>{sign}</div>
                <input type="number" value={b} onChange={buildOnChange(setB)} />
                {/* <span> = {mathFn ? mathFn(a, b) : ''}</span> */}
                <span>= {mathFn ? (sign === '➗' && b === 0 ? '❌' : mathFn(a, b)) : ''}</span>
            </Toolbar>
        </ChapterWrapper>
    )
}