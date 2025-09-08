import { Chapter, Section } from 'components';
import { RouterPath } from 'config/RouterPath';
import { FetchDataInUseEffect } from './FetchDataInUseEffect';
import { BewareOfInfiniteLoops } from './InfiniteLoops/BewareOfInfiniteLoops';
import { UseEffectAndInterval } from './UseEffectAndInterval/UseEffectAndInterval';
import { ComponentLifecycle } from './UseEffectBasic/ComponentLifecycle';
import { EffectDependencies } from './UseEffectBasic/EffectDependencies';
import { LocalStorageSync } from './UseEffectBasic/LocalStorageSync';
import { UseGlobalEvents } from './UseGlobalEvents/UseGlobalEvents';
import { EffectsSequence } from './UseLayoutEffect/EffectSequence';
import { UseLayoutEffectExample } from './UseLayoutEffect/UseLayoutEffectExample';
import { YouDontNeedUseEffect } from './YouDontNeedUseEffect/YouDontNeedUseEffect';

export function SideEffectsSection() {
    return (
        <Section title="Side effects, useEffect">
            <Section title='useEffect basics'>
                <Chapter
                    emoji='🔂'
                    title='Component lifecycle'
                    path={RouterPath.COMPONENT_LIFECYCLE_EFFECTS}
                    element={<ComponentLifecycle />}
                />
                <Chapter
                    emoji="⛓"
                    title="Effect dependencies"
                    path={RouterPath.EFFECTS_DEPENDENCIES}
                    element={<EffectDependencies />}
                />
                <Chapter
                    emoji="📥"
                    title="Local storage sync"
                    path={RouterPath.LOCAL_STORAGE_SYNC}
                    element={<LocalStorageSync />}
                />
            </Section>
            <Chapter
                emoji="🔔"
                title="Global event listeners"
                path={RouterPath.GLOBAL_EVENT_LISTENERS}
                element={<UseGlobalEvents />}
            />
            <Chapter
                emoji="⏱"
                title="useEffect + setInterval"
                path={RouterPath.USE_EFFECT_SET_INTERVAL}
                element={<UseEffectAndInterval />}
            />
            <Chapter
                emoji="🌐"
                title="Fetch data in useEffect"
                path={RouterPath.FETCH_DATA_USE_EFFECT}
                element={<FetchDataInUseEffect />}
            />
            <Chapter
                emoji="🔃"
                title="Beware of infinite loops"
                path={RouterPath.BEWARE_OF_INFINITE_LOOPS}
                element={<BewareOfInfiniteLoops />}
            />
            <Chapter
                emoji="💾"
                title="You don't need useEffect"
                path={RouterPath.NO_NEED_TO_USE_EFFECT}
                element={<YouDontNeedUseEffect />}
            />
            <Section title="useLayoutEffect">
                <Chapter
                    emoji="🪢"
                    title="Effects sequence"
                    path={RouterPath.EFFECTS_SEQUENCE}
                    element={<EffectsSequence />}
                />
                <Chapter
                    emoji="📨"
                    title="Batching effects"
                    path={RouterPath.BATCHING_EFFECTS}
                    element={<UseLayoutEffectExample />}
                />
            </Section>
        </Section>
    )
}