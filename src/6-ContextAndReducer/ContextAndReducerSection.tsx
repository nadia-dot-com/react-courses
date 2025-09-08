import { Chapter, Section } from 'components';
import { RouterPath } from 'config/RouterPath';
import { CounterReducerChapter } from './0-CounterReducer';
import { LazyInit2Chapter } from './LazyItit2'; 
import { ToggleReducerChapter } from './2-UseTogge'; 
import { RerenderReducerChapter } from './3-UseRerender';
import { IntroToContextChapter } from './4-IntroToContext';
import { NestedContextsChapter } from './5-NestedContexts';
import { MultipleContextsChapter } from './6-MultipleContexts';
import { ContactBookChapter } from './7-ContactBook';
import { VeganDragonChapter } from './8-VeganDragon';

export function ContextAndReducerSection() {
    return (
        <Section title="Context and reducer">
            <Section title="useReducer">
                <Chapter
                    emoji="🧮"
                    title="Counter reducer"
                    path={RouterPath.COUNTER_REDUCER}
                    element={<CounterReducerChapter />}
                />
                <Chapter
                    emoji="🦥"
                    title="Lazy init 2"
                    path={RouterPath.REDUCER_LAZY_INIT}
                    element={<LazyInit2Chapter />}
                />
                <Chapter
                    emoji="✅"
                    title="Toggle reducer"
                    path={RouterPath.TOGGLE_REDUCER}
                    element={<ToggleReducerChapter />}
                />
                <Chapter
                    emoji="🔄"
                    title="Rerender reducer"
                    path={RouterPath.RERENDER_REDUCER}
                    element={<RerenderReducerChapter />}
                />
            </Section>
            <Section title="Context">
                <Chapter
                    emoji="🔝"
                    title="Intro to Context"
                    path={RouterPath.INTRO_TO_CONTEXT}
                    element={<IntroToContextChapter />}
                />
                <Chapter
                    emoji="🗃️"
                    title="Nested Contexts"
                    path={RouterPath.NESTED_CONTEXTS}
                    element={<NestedContextsChapter />}
                />
                <Chapter
                    emoji="🎨"
                    title="Multiple Contexts"
                    path={RouterPath.MULTIPLE_CONTEXTS}
                    element={<MultipleContextsChapter />}
                />
            </Section>
            <Section title="useContext && useReducer">
                <Chapter
                    emoji="📒"
                    title="Contact book"
                    path={RouterPath.CONTACT_BOOK}
                    element={<ContactBookChapter />}
                />
                <Chapter
                    emoji="🐲"
                    title="Vegan Dragon"
                    path={RouterPath.VEGAN_DRAGON}
                    element={<VeganDragonChapter />}
                />
            </Section>
        </Section>
    );
}
