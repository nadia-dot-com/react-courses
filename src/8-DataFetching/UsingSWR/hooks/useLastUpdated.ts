import useSWR from 'swr';
import { Queries, QueryKeyFactory } from '../api/QueryKeyFactory';

const SWR_CONFIG = {
refreshInterval: 3000,
}

function fetchLastUpdate(): Promise<Date> {
    return new Promise((resolve) => {
        resolve(new Date());
    })
};

export function useLastUpdated() {
    const keybuilder = QueryKeyFactory[Queries.LAST_UPDATED];

    return useSWR<Date>(keybuilder(), fetchLastUpdate, SWR_CONFIG);
}