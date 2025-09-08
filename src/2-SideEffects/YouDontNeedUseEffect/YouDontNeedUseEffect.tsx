import { ChapterWrapper, TextBlock } from "components";
import { useRerender } from "hooks/useRerender";
import { CSSProperties, useMemo } from "react";
import { useBallPosition } from "./UseBallPosition";

export function YouDontNeedUseEffect() {
    const [left, top] = useBallPosition(MIN_STEP, MAX_STEP);
    const rerender = useRerender();
    const style = useMemo(() => buildStyle(left, top), [left, top])

    // const style = buildStyle(left, top);
    // const [style, setStyle] = useState<CSSProperties>(() => buildStyle(left, top));
    // useEffect(() => {
    //     setStyle(buildStyle(left, top))
    // }, [left, top])
    
    return (
        <ChapterWrapper title="You don't need useEffect" subtitle="Side effects, useEffect" rerender={rerender}>
            <TextBlock type="info">Use ⬅️ ⬆️ ➡️ ⬇️ to move the ball</TextBlock>

            <div style={{ position: 'relative' }}>
                <div style={style}>⚽️</div>
            </div>
        </ChapterWrapper>
    )
}

const MIN_STEP = 20;
const MAX_STEP = 100;

function buildStyle(left: number, top: number): CSSProperties {
    return {
        position: 'absolute',
        fontSize: 64,
        transition: 'all 0.5s ease-in-out',
        transform: `rotate(${Math.random() * 360}deg)`,
        left,
        top,
    }
}