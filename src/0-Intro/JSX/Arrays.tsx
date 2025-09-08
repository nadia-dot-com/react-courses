import { ChapterWrapper } from "components/ChapterWrapper/ChapterWrapper";
import { ReactElement, JSX } from "react";

const TRANSPORT_EMOJIS = ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎', '🚓', '🚑', '🚒', '🚐', '🛻', '🚚'];
const   BALLS_EMOJIS = ['⚽️', '🏀', '🏈', '⚾️', '🎾', '🏐', '🏉'];

type EmojisListProps = {
    emojis: string[];
    ordered?: boolean;
}

function EmojisList(props: EmojisListProps): JSX.Element {
    const {emojis, ordered = false} = props;
    const listItems = emojis.map((emoji) => <li key={emoji}>{emoji}</li> );

    const ListComponent = ordered ? 'ol': 'ul';
    return <ListComponent>{listItems}</ListComponent>
}

function EmojiTable({emojis}: {emojis: string[]}): JSX.Element {
    const rows= new Array<JSX.Element>(); //JSX.Element[]

    for (let i = 0; i < emojis.length; i++){
        const emoji = emojis[i];
        rows.push(
            <tr key={i}>
                <td>{i + 1}</td>
                <td>{emoji}</td>
                <td>
                    {emoji
                        .split('')
                        .map((ch) => ch.charCodeAt(0))
                        .join(' + ')}
                </td>
            </tr>,
        );
    }

    return (
        <table>
            <thead>
                <th>#</th>
                <th>Emoji</th>
                <th>Char codes</th>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

export function Arrays () {
    return (
        <ChapterWrapper title="Rendering arrays" subtitle="Introduction to JSX">
            <p>Balls emojis: {BALLS_EMOJIS}</p>
            <p>Transport emojis: {TRANSPORT_EMOJIS.join(' ')}</p>

            <div style={{display: 'flex', gap: 20}}>
                <EmojisList emojis={BALLS_EMOJIS}/>
                <EmojisList emojis={TRANSPORT_EMOJIS} ordered/>
                <EmojiTable emojis={BALLS_EMOJIS}/>
                <EmojiTable emojis={TRANSPORT_EMOJIS}/>
            </div>
        </ChapterWrapper>
    )
}