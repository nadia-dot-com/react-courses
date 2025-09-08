import { Modal } from './Modal';

type Props = {
    points: number;
    prevHightScore: number;
    onPlayAgain: () => void;
};

export function GameOverModal({ points, prevHightScore, onPlayAgain }: Props) {
    const message = (
        <>
            You scored <b>{points}</b> points!
            {points > prevHightScore ? (
                <p>
                    <b>This is a new hight score!</b>
                </p>
            ) : (
                <p>Hight score: {prevHightScore}</p>
            )}
        </>
    );

    return (
        <Modal
            title='Game Over'
            message={message}
            buttons={{
                'Play Again': onPlayAgain,
            }}
        />
    )
}