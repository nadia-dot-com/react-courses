import { ChapterWrapper, RelatedDocs } from "components";
import { useEffect } from "react";
import { useCounter } from "1-HooksBasics/CustomHooks/useCounter";
import { logTagged } from "utils/logTagged";
import { Counter } from "./Counter";

const DELTA = 1;
const STORAGE_KEY = 'chapter-6-current-count';

export function LocalStorageSync() {
   const {value: count, increase, decrease, set} = useCounter(0)

    useEffect(function readFromStorage() {
        try {
            const stringValue = localStorage.getItem(STORAGE_KEY) ?? '0';
            logTagged('Read', stringValue);
            const parsed = parseInt(stringValue, 10)
            set(isNaN(parsed) ? 0: parsed)
        } catch (error) {
            console.error('could not read from local storage');
            console.error(error);
        }
    }, [set]);

    useEffect(
        function writeToStorage() {
            if (count === null) {
                return;
            }
            try {
                const stringValue = String(count);
                logTagged('Write', stringValue);
                localStorage.setItem(STORAGE_KEY, stringValue);
            } catch (error) {
                console.error('could not read from local storage');
                console.error(error);
            }
        },
        [count])


    logTagged('Render', String(count));

    return (
        <ChapterWrapper title="Local storage sync" subtitle="useEffect basics">
            <Counter value={count || 0} delta={DELTA} increase={increase} decrease={decrease} />
            <RelatedDocs
                docs={[
                    {
                        label: 'useEffect Hook Reference',
                        href: 'https://react.dev/reference/react/useEffect',
                    },
                ]}
            />
        </ChapterWrapper>
    )
}