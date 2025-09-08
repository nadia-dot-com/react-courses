import { ChapterWrapper, Toolbar } from 'components';
import { useToggle } from 'hooks/useToggle';
import { EmojiToggle } from './EmojiToggle';

export function ToggleReducerChapter() {
    const [isHappy, toggleHappy] = useToggle(true);
    const [isOk, toggleOk] = useToggle(true);
    const [isDay, toggleDay] = useToggle(false);

    return (
        <ChapterWrapper title="useReducer" subtitle="useToggle">
            <Toolbar>
                <EmojiToggle emojiOn='😊' emojiOff='😢' value={isHappy} toggle={toggleHappy}/>
                <EmojiToggle emojiOn="👍" emojiOff="👎" value={isOk} toggle={toggleOk} />
                <EmojiToggle emojiOn="🌞" emojiOff="🌚" value={isDay} toggle={toggleDay} />
            </Toolbar>
        </ChapterWrapper>
    )
}