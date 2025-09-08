import { ChapterWrapper } from "components";
import { FirstContextProvider, useFirstContext } from "../4-IntroToContext/FirstContext";

export function IntroToContextChapter() {
    return (
        <ChapterWrapper title='intro to Context' subtitle="Dependency injection with React.Context">
            <FirstContextProvider>
                <A/>
                <FirstContextConsumer/>
            </FirstContextProvider>

        </ChapterWrapper>
    )
}

function A() {
    return <B/>
}

function B() {
    return <C/>
}

function C() {
    return <FirstContextConsumer/>
}

function FirstContextConsumer() {
    const value = useFirstContext();
    return <h1>{value}</h1>
}