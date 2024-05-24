import TodoList from "@app/components/TodoList";
import AddTodo from "@app/components/AddTodo";

export const revalidate = 0;

export default function Home() {
    return (
        <>
            <AddTodo />
            <TodoList />
        </>
    );
}
