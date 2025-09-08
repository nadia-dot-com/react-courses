import { HandShape } from "./HandShape"; //enum;
import { HandShapeSelectable } from "./HandShapeSelectable";

type Props = {
    currentValue: HandShape;
    onChange: (newValue: HandShape) => void;
};

const HAND_SHAPE = Object.values(HandShape) as HandShape[];

export function RockScissorsPaperInput({ currentValue, onChange }: Props) {
    return (
        <>
            {HAND_SHAPE.map((shape) => (
                <HandShapeSelectable
                    key={shape}
                    value={shape}
                    isSelected={shape === currentValue}
                    onClick={() => onChange(shape)}
                />
            ))}
        </>
    );
}