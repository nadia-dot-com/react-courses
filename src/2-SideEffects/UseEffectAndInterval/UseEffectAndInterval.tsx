import { ChapterWrapper } from "components";
import {EmojiSection} from './EmojiSection';

const MOON_EMOJIS = ['🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔'];
const EARTH_EMOJIS = ['🌎', '🌍', '🌏'];
const CLOCK_EMOJIS = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛'];


export function UseEffectAndInterval() {
    return(
        <ChapterWrapper title="useEffect + setInterval" subtitle="Side effect, useEffect">
            <EmojiSection emojis={MOON_EMOJIS}/>
            <EmojiSection emojis={EARTH_EMOJIS}/>
            <EmojiSection emojis={CLOCK_EMOJIS}/>
        </ChapterWrapper>
    )
}