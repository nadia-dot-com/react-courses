import { ChapterWrapper, TextBlock } from 'components';
import { useRerender } from 'hooks/useRerender';
import { Child } from './Child';
import { RandomContainer } from './RandomContainer';

const EMOJIS = ['🏍', '✈️', '🚀', '🏎'];

export function RandomRendering() {
    const rerender = useRerender();

    return (
        <ChapterWrapper
            title="Random container"
            subtitle="Components lifecycle"
            rerender={rerender}
        >
            <TextBlock type="info">
                <div>
                    ℹ️ If you pass a child component to some custom container component, there is no
                    guarantee it'll be rendered.
                </div>
                <div>ℹ️ It fully depends on the rendering logic of container component.</div>
            </TextBlock>

            <RandomContainer>
                {EMOJIS.map((emoji) => (
                    <Child key={emoji} tag={emoji} />
                ))}
            </RandomContainer>
        </ChapterWrapper>
    )
}