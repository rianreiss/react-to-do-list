import { useState } from 'react';

const TodoForm = () => {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value || !category) return;

    setCategory("");
    setValue("");
  };


  return (
    <div className='todo-form'>
      <h2>Create task:</h2>
      <form onSubmit={handleSubmit}>
        <input value={value} type="text" placeholder='Digite o título' onChange={(e) => setValue(e.target.value)} />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="study">Study</option>
        </select>
        <button type='submit'>Create task</button>
      </form>
    </div>
  )
};

export default TodoForm;