import { ChapterWrapper } from "components/ChapterWrapper/ChapterWrapper";
import { Fragment } from "react/jsx-runtime";
import {JSX} from 'react'
import { color } from "storybook/internal/theming";

function Fruits(): JSX.Element {
    return (
        <Fragment >
            <li>apple  🍎</li>
            <li>pear 🍐</li>
            <li>orange 🍊</li>
            <li>banana 🍌</li>
            <li>watermelon 🍉</li>
        </Fragment>
    );
}

function Vegetables(): JSX.Element {
    return (
        <>
        <li>tomato 🍅</li>
        <li>eggplant 🍆</li>
        <li>avocado 🥑</li>
        <li>cucumber 🥒</li>
        <li>pepper 🌶</li>
        </>
    )
}

export function Fragments(): JSX.Element {
    return (
        <ChapterWrapper title="Fragments" subtitle='Introduction to JSX'>
            List of fruits and vegetables:
            <ul>
                <Fruits/>
                <Vegetables/>
            </ul>
        </ChapterWrapper>
    )
}