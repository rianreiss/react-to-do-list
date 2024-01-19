import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value || !category) return;

    addTodo(value, category, priority);

    setCategory("");
    setPriority("");
    setValue("");
  };


  return (
    <div className='todo-form'>
      <h2>Create task:</h2>
      <form onSubmit={handleSubmit}>
        <input value={value} type="text" placeholder='Digite o título' onChange={(e) => setValue(e.target.value)} />

        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="">Selecione a prioridade</option>
          <option value="1">Alta</option>
          <option value="2">Normal</option>
          <option value="3">Baixa</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="study">Study</option>
        </select>

        <button type='submit'>Create task</button>
      </form>
    </div>
  );
};

export default TodoForm;