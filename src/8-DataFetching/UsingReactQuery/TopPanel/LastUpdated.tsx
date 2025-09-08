import { LoadingSpinner } from 'components';
import { useLastUpdated } from '../hooks/useLastUpdated';
import classes from './LastUpdated.module.css';

export function LastUpdated() {
    const { data, isFetching } = useLastUpdated();
    const formattedTime = data?.toLocaleTimeString() ?? '--';

    if(isFetching) {
        return <div className={classes.lastUpdated}>Loading...</div>
    }
    return (
        <div className={classes.lastUpdated}>
            Last updated:
            <br />
            <strong>{formattedTime}</strong>
        </div>
    );
}
