import React, {useState, useCallback, useRef} from "react";
import "./App.css";
import {TodoTemplate} from "./components/TodoTemplate";
import {TodoInsert} from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const createBulkTodos = () => {
    const array = [];
    for (let i = 1; i <= 1000; i++) {
        array.push({
            id: i,
            text: `할 일 ${i}`,
            checked: false,
        })
    }
    return array
}


const App = () => {
    const [todos, setTodos] = useState(createBulkTodos)
    // const [todos, setTodos] = useState([
    //     {
    //         id: 1,
    //         text: "리액트의 기초 알아보기",
    //         checked: true,
    //     },
    //     {
    //         id: 2,
    //         text: "컴포넌트 스타일링해 보기",
    //         checked: true,
    //     },
    //     {
    //         id: 3,
    //         text: "일정 관리 앱 만들어 보기",
    //         checked: false,
    //     },
    // ]);

    const nextId = useRef(4)

    const onInsert = useCallback(
        (value) => {
            const todo = {
                id: nextId.current,
                text: value,
                checked: false,
            };
            setTodos(todo => todos.concat(todo))
            // setTodos(todos.concat(todo));
            nextId.current += 1;
        },
        []
    );

    const onRemove = useCallback(
        id => {
            setTodos(todo => todos.filter(todo => todo.id !== id));
        }, []
    );

    const onToggle = useCallback(
        id => {
            setTodos(todos =>
                todos.map(todo =>
                    todo.id === id ? {...todo, checked: !todo.checked} : todo,
                ),);
        }, []
    )

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        </TodoTemplate>
    );
};

export default App;
