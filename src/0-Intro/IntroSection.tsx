import { Chapter, Section } from 'components';
import { RouterPath } from 'config/RouterPath';
import { HelloReact } from './HelloReact';
import { Arrays } from './JSX/Arrays';
import { Conditional } from './JSX/Condition';
import { DataTypes } from './JSX/DataTypes';
import { EventHandlers } from './JSX/EventHandlers';
import { Fragments } from './JSX/Fragments';
import { PropsAndChildren } from './PropsAndChildren/PropsAndChildren';
import { RenderingProcess } from './RenderingProcess/RenderingProcess';

export function IntroSection() {
   
        return (
            <Section title="Intro">
              
                <Chapter
                    emoji="👽"
                    title="Hello, world!"
                    path={RouterPath.HELLO_REACT}
                    element={<HelloReact />}
                />

                <Section title="JSX">
                    <Chapter
                        emoji="📎"
                        title="Fragments"
                        path={RouterPath.JSX_FRAGMENTS}
                        element={<Fragments />}
                    />
                    <Chapter
                        emoji="🗄"
                        title="Arrays"
                        path={RouterPath.JSX_ARRAYS}
                        element={<Arrays />}
                    />
                    <Chapter
                        emoji="🔣"
                        title="Data types"
                        path={RouterPath.JSX_DATA_TYPES}
                        element={<DataTypes />}
                    />
                    <Chapter
                        emoji="📬"
                        title="Event handlers"
                        path={RouterPath.JSX_EVENT_HANDLERS}
                        element={<EventHandlers />}
                    />
                    <Chapter
                        emoji="❓"
                        title="Conditional"
                        path={RouterPath.JSX_CONDITIONAL}
                        element={<Conditional />}
                    />
                </Section>

                <Chapter
                    emoji="🧩"
                    title="Components, props, children"
                    path={RouterPath.PROPS_AND_CHILDREN}
                    element={<PropsAndChildren />}
                />
                <Chapter
                    emoji="🎞"
                    title="Rendering process"
                    path={RouterPath.RENDERING_PROCESS}
                    element={<RenderingProcess />}
                />
            </Section>
        );
    }

