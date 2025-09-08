import { EmojiButton } from 'components';
import { useTodoList } from './hooks/useTodoList';
import { useUpdateTodo, updateTodo } from '8-DataFetching/UsingSWR/hooks/useUpdateTodo';
import { Todo } from '8-DataFetching/types';

export function TodoList() {
    const { data, mutate: refetch } = useTodoList();
    const { trigger: updateTodo } = useUpdateTodo()

    const toggleCompleted = (todo: Todo) => {
        const updated = { ...todo, completed: !todo.completed };
        refetch(
            data?.map(t => (t.id === todo.id ? updated : t)),
            false
        );
        // запит на сервер (але не перезаписуємо дані заново)
        updateTodo(updated).catch(() => {
            // у разі помилки відкочуємо
            refetch();
        });
    }
    
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        <EmojiButton emoji="🔄" tooltip="Refetch" onClick={() => refetch()} />
                    </th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((todo, index) => (
                    <tr key={todo.id}>
                        <td>{index + 1}</td>
                        <td>{todo.title}</td>
                        <td style={{ cursor: 'pointer' }} onClick={() => toggleCompleted(todo)}>{todo.completed ? '✅' : null}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}