import { useUserId } from '8-DataFetching/UserContext';
import useSWR, { SWRResponse } from 'swr';
import useSWRMutation from 'swr/mutation';
import { Queries, QueryKeyFactory } from '../api/QueryKeyFactory';
import { Todo } from '8-DataFetching/types';
import { fetcher } from '../api/fetcher';

export async function updateTodo(todo: Todo): Promise<Todo> {
    return fetcher(`todos/${todo.id}`, {
        method: 'PUT',
        body: JSON.stringify(todo)
    })
}

export function useUpdateTodo() {
  return useSWRMutation(
    ['updateTodo'],
    (url, { arg }: { arg: Todo }) =>
      fetcher(`todos/${arg.id}`, {
        method: 'PUT',
        body: JSON.stringify(arg),
      })
  );
}

