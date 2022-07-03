/* import { useEffect, useReducer } from "react"; */
import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
/* import { todoReducer } from "./todoReducer"; */

export const TodoApp = () => {

    const { todos, todosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo, pendingTodosCount } = useTodo();

    return (
        <>
            <h1>TodoApp : {todosCount} , <small>Pending Tasks: {pendingTodosCount} </small> </h1>
            <hr />

            <div className="row">

                <div className="col-7">

                    {/* TodoList */}
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={ handleDeleteTodo } 
                        onToggleTodo={handleToggleTodo}    
                    />
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
