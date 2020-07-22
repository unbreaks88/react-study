import React from 'react';
import './TodoList.scss';
import {TodoListItem} from './TodoListItem';

export const TodoList = ({todos, onRemove, onToggle}) => {
    return (
        <div className="TodoList">
            {todos.map((todo) => (
                <TodoListItem todo={todo} onRemove={onRemove} onToggle={onToggle} key={todo.id}/>
            ))}
        </div>
    );
};
