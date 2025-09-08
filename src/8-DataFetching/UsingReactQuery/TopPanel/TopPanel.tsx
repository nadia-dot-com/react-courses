import { Toolbar } from 'components';
import { Avatar } from './Avatar';
import { LastUpdated } from './LastUpdated';
import { RefreshAll } from './RefreshAll';
import { TodoCounter } from './TodoCounter';
import { UserName } from './UserName';
import { useQuery } from '@tanstack/react-query';

export function TopPanel() {

    const {data, isLoading, isPending, isError} = useQuery({
        queryKey: ['test'],
        queryFn: ()=> {
            return (Math.random()* 100).toFixed(0);
        },
    });

    console.log(data, isLoading)

    return (
        <Toolbar>
            <Avatar />
            <div style={{ flex: 1 }}>
                <UserName />
            </div>
            <TodoCounter />
            <LastUpdated />
            <RefreshAll />
        </Toolbar>
    );
}
