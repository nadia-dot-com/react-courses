import { ChapterWrapper, FlexFiller, Toolbar, ValueLabel } from "components";
import {JSX} from 'react';

const MAX_RENDERED_NUM = 11;

type ConditionalContentProps = {
    value: number;
};

function ConditionalContent({ value }: ConditionalContentProps): JSX.Element | null {
    //an early return
    if (value > MAX_RENDERED_NUM) {
        return null;
    }

    const butterfly = value === 1 ? '🐛' : '🦋';
    const greaterThanFive = value > 5;

    return(
        <div style={{fontSize: 48}}>
            <Toolbar>
                <ValueLabel value={value}/>
                <FlexFiller/>

                <span>{value % 2 === 0 ?  '🐈' : '🐈‍⬛'}</span>
                <span>{butterfly}</span>
                {value === 6 ? <span>🐬</span> : null}
                 {value % 3 === 0 && <span>🦔</span>}
                 <span id="Dino">{greaterThanFive && '🦕'}</span>

                 {/* DON'T DO THAT, value is a number and can be 0 */}
                <span>{!!value && '🦩'}</span>
                {/* this is the right way (or even better - just always use ternary operator) */}
                <span>{value ? '🐙': null}</span>
            </Toolbar>
        </div>
    )
}

export function Conditional(){
    const numbers = new Array(MAX_RENDERED_NUM + 5).fill(0).map((value, index) => index);

    return(
        <ChapterWrapper title="Conditional rendering" subtitle="Introduction to JSX">
            {numbers.map((num) =>(
                <ConditionalContent key={num} value={num}/>
            ))}
        </ChapterWrapper>
    )
}