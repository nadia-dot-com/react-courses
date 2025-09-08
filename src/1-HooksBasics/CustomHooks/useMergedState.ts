import cloneDeep from 'lodash/cloneDeep';
import merge from 'lodash/merge';
import  {useState} from 'react';
import {DeepPartial} from 'utility-types';

type UseMergeState<T> = [T, (change: DeepPartial<T>) => void];


export function UseMergeState<T>(initialState: T): UseMergeState<T> {
    const [state, setState] = useState<T>(initialState);

    const mergeState = (changes: DeepPartial<T>) => {
        setState((prevState) => {
            const clone = cloneDeep(prevState);
            return merge(clone, changes);
        })
    }

    return [state, mergeState];
}

