import { useState } from 'react'

import Todo from "./components/Todo";
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';
import EmptyList from './components/EmptyList';

import './App.css';
import EditTodoForm from './components/EditTodoForm';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
      isEditing: false,
      priority: 1,
    },
    {
      id: 2,
      text: "fazer tal coisa",
      category: "Pessoal",
      isCompleted: false,
      isEditing: false,
      priority: 2,
    },
    {
      id: 3,
      text: "estudar tal conceito",
      category: "Estudos",
      isCompleted: false,
      isEditing: false,
      priority: 3,
    },
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [sort, setSort] = useState("Asc");


  const addTodo = (text, category, priority) => {

    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        priority,
        isCompleted: false,
        isEditing: false,
      },
    ];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id != id ? todo : null
    );

    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];

    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);

    setTodos(newTodos);

  };

  const editTodo = (id) => {
    const newTodos = [...todos];

    newTodos.map((todo) => todo.id === id ? todo.isEditing = !todo.isEditing : todo);

    setTodos(newTodos);

  };

  const editTodoValue = (text, category, priority, id) => {

    setTodos(todos.map((todo) => todo.id === id ? { id, text, category, priority, isEditing: !todo.isEditing } : todo));

  };

  return <div className='app'>
    <h1>Lista de Tarefas</h1>
    <Search search={search} setSearch={setSearch} />
    <Filter filter={filter} setFilter={setFilter} setSort={setSort} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} priorityFilter={priorityFilter} setPriorityFilter={setPriorityFilter} />
    <div className="todo-list">
      {todos.length === 0 ? (
        <div className='todo-list' style={{ alignItems: 'center' }}>
          <EmptyList />
        </div>
      ) : (
        <div>
          <p className='completedTasks'>Tarefes concluídas: {todos.filter((todo) => todo.isCompleted).length} / {todos.length}</p>
          {todos
            .filter((todo) =>
              filter === "all"
                ? true
                : filter === "completed"
                  ? todo.isCompleted
                  : !todo.isCompleted
            )
            .filter((todo) =>
              todo.text.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) =>
              sort === "Asc"
                ? a.text.localeCompare(b.text)
                : b.text.localeCompare(a.text)
            )
            .filter((todo) =>
              categoryFilter === ""
                ? true
                : todo.category.search(categoryFilter) >= 0
            )
            .filter((todo) =>
              priorityFilter === ""
                ? true
                : todo.priority === parseInt(priorityFilter, 10)
            )
            .map((todo) => (
              todo.isEditing ? (
                <EditTodoForm
                  editTodoValue={editTodoValue}
                  todo={todo} />
              ) : (
                <Todo
                  key={todo.id}
                  todo={todo}
                  removeTodo={removeTodo}
                  completeTodo={completeTodo}
                  editTodo={editTodo} />

              )

            ))}
        </div>
      )}
    </div>

    <TodoForm addTodo={addTodo} />
  </div>;
}

export default App
