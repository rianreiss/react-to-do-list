import { useState, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import plus from '../assets/plus-circle.svg';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');
  const [form, setForm] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setForm(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [formRef]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value || !category) return;

    addTodo(value, category, priority);

    setCategory("");
    setPriority("");
    setValue("");
  };

  const openForm = () => {
    setForm(!form);
  };

  return (
    <div>
      <div className='addTodo'>
        <button title='Adicionar nova tarefa' onClick={() => openForm()}>
          <h2>Adicionar tarefa</h2>
          <img src={plus} alt="" />
        </button>
      </div>

      <CSSTransition
        in={form}
        timeout={300}
        classNames="createForm"
        unmountOnExit
      >
        <form className='todo-form' onSubmit={handleSubmit} ref={formRef}>

          <div className='content-add-form'>
            <label htmlFor="title">Título:</label>
            <input value={value} type="text" placeholder='Digite o título...' onChange={(e) => setValue(e.target.value)} required autoFocus/>

            <label htmlFor="title">Categoria:</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Selecione a categoria</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Pessoal">Pessoal</option>
              <option value="Estudos">Estudos</option>
            </select>

            <label htmlFor="title">Prioridade:</label>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="">Selecione a prioridade</option>
              <option value="1">Alta</option>
              <option value="2">Normal</option>
              <option value="3">Baixa</option>
            </select>
          </div>

          <div className='submit'>
            <button type='submit'>Criar Tarefa</button>
          </div>
        </form>
      </CSSTransition>
    </div>
  );
};

export default TodoForm;
