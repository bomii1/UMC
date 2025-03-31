import { useState } from "react";
import "./App.css";
import TodoItem from "./TodoItem";

interface TodoProps {
  id: number;
  title: string;
  done: boolean;
}

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [doneTodos, setDoneTodos] = useState<TodoProps[]>([]);

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: TodoProps = {
      id: Date.now(),
      title: todo,
      done: false,
    };
    setTodos([...todos, newTodo]);
    setTodo("");
  };

  const onClickCompleteBtn = (doneTodo: TodoProps) => {
    setTodos(todos.filter((t) => t.id != doneTodo.id));
    setDoneTodos([...doneTodos, doneTodo]);
  };

  const onClickDeleteBtn = (doneTodo: TodoProps) => {
    setDoneTodos(doneTodos.filter((t) => t.id != doneTodo.id));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-container__header">JEONGBONG's TODO</h1>
      <form id="todo-form" className="todo-container__form" onSubmit={addTodo}>
        <input
          type="text"
          id="todo-input"
          className="todo-container__input"
          placeholder="할 일을 입력해주세요"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          required
        />
        <button type="submit" className="todo-container__button">
          할 일 추가
        </button>
      </form>
      <div className="render-container">
        <div className="render-container__section">
          <h2 className="render-container__title">할 일</h2>
          <ul id="todo-list" className="render-container__list">
            {todos.map((t) => {
              return (
                <TodoItem
                  key={t.id}
                  title={t.title}
                  onClick={() => onClickCompleteBtn(t)}
                  buttonLabel="완료"
                  buttonClassName="render-container__item-button-complete"
                />
              );
            })}
          </ul>
        </div>
        <div className="render-container__section">
          <h2 className="render-container__title">완료</h2>
          <ul id="done-list" className="render-container__list">
            {doneTodos.map((t) => {
              return (
                <TodoItem
                  key={t.id}
                  title={t.title}
                  onClick={() => onClickDeleteBtn(t)}
                  buttonLabel="삭제"
                  buttonClassName="render-container__item-button-delete"
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
