import { Chapter, Section } from 'components';
import { RouterPath } from 'config/RouterPath';
import { UseCounterExample } from './CustomHooks/useCounterExample';
import { UseMergedStateExample } from './CustomHooks/UseMergedStateExample';
import { DirectDomChanges } from './DirectDomChanges';
import { DirectStateMutation } from './DirectStateMutation';
import { LazyInitialization } from './LazyInitialization/LazyInitialization';
import { PreviousStateUpdate } from './PreviousStateUpdate';
import { StoringFunctions } from './StoringFunctions';
import { UseStateAndNewRenders } from './UseStateAndNewRenders';
import { UseStateBasics } from './UseStateBasics';


export function HookBasicsSection() {
   return (
        <Section title="Hooks basics, useState">
            <Chapter
                emoji="🪝"
                title="useState basics"
                path={RouterPath.USE_STATE_BASICS}
                element={<UseStateBasics />}
            />
            <Chapter
                emoji="📈"
                title="Previous state update"
                path={RouterPath.PREV_STATE_UPDATE}
                element={<PreviousStateUpdate />}
            />
            <Chapter
                emoji="📉"
                title="Direct state mutation"
                path={RouterPath.DIRECT_STATE_MUTATION}
                element={<DirectStateMutation />}
            />
            <Section title="First custom hooks">
                <Chapter
                    emoji="🔢"
                    title="useCounter"
                    path={RouterPath.USE_COUNTER}
                    element={<UseCounterExample />}
                />
                <Chapter
                    emoji="📑"
                    title="useMergedState"
                    path={RouterPath.USE_MERGED_STATE}
                    element={<UseMergedStateExample />}
                />
            </Section>
            <Chapter
                emoji="🦥"
                title="Lazy initialization"
                path={RouterPath.USE_STATE_LAZY_INIT}
                element={<LazyInitialization />}
            />
            <Chapter
                emoji="🧰"
                title="Storing functions"
                path={RouterPath.STORING_FUNCTIONS}
                element={<StoringFunctions />}
            />
            <Chapter
                emoji="🎞"
                title="useState and new renders"
                path={RouterPath.USE_STATE_AND_NEW_RENDERS}
                element={<UseStateAndNewRenders />}
            />
            <Chapter
                emoji="🔀"
                title="Direct DOM changes"
                path={RouterPath.DIRECT_DOM_CHANGES}
                element={<DirectDomChanges />}
            />
        </Section>
    );
}