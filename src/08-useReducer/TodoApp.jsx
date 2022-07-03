import { useEffect, useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

export const TodoApp = () => {

    const initialState = [
/*         {
            id: new Date().getTime(),
            description: 'Recolectar la piedra del alma',
            done: false,
        },
        {
            id: new Date().getTime() * 3,
            description: 'Recolectar la piedra del infinito',
            done: false,
        }, */
    ]

    const init = () =>{
        return JSON.parse( localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    /* Para guardar en el localStorage información */
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    
    }, [todos])
    

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    return (
        <>
            <h1>TodoApp : 10, <small>Pending Tasks: 2</small> </h1>
            <hr />

            <div className="row">

                <div className="col-7">

                    {/* TodoList */}
                    <TodoList todos={todos} onDeleteTodo={ handleDeleteTodo } />
                    {/* fin de TodoList */}
                </div>

                <div className="col-5">
                    <h4>Add ToDo</h4>
                    <hr />

                    {/* TodoAdd onNewTodo(todo) */}
                    <TodoAdd onNewTodo={handleNewTodo} />
                    {/* fin TodoAdd */}
                </div>

            </div>


        </>
    )
}
