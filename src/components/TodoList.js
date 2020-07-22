import React from 'react';
import './TodoList.scss';
import TodoListItem from "./TodoListItem";

const TodoList = ({todos, onRemove, onToggle}) => {
    return (
        <div className="TodoList">
            {todos.map((todo) => (
                <TodoListItem todo={todo} onRemove={onRemove} onToggle={onToggle} key={todo.id}/>
            ))}
        </div>
    );
};

export default React.memo(TodoList)
