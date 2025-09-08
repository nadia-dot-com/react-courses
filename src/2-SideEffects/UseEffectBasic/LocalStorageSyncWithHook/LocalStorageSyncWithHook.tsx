import { ChapterWrapper, RelatedDocs } from "components";
import { useEffect } from "react";
import { useCounter } from "1-HooksBasics/CustomHooks/useCounter";
import { logTagged } from "utils/logTagged";
import { Counter } from "../Counter";
import { useLocalStorage } from "./useLocalStoraje";

const DELTA = 1;
const STORAGE_KEY = 'chapter-6-current-count';

export function LocalStorageSyncWithHook() {
    const { storageValue } = useLocalStorage(STORAGE_KEY);
    const { value: count, increase, decrease, set } = useCounter(storageValue)

    useEffect(()=> {
        set(storageValue)
    }, [set, storageValue]);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, String(count))
    })
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