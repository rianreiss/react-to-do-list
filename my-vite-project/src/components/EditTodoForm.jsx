import { useEffect, useState } from 'react';
import arrowDownImage from '../assets/arrow-down-short.svg';
import highPriority from '../assets/exclamation-circle.svg';

const EditTodoForm = ({ editTodo, todo }) => {
    const [value, setValue] = useState(todo.text);
    const [category, setCategory] = useState(todo.category);
    const [priority, setPriority] = useState(todo.priority);

    const handleSubmit = (e) => {
        e.preventDefault();

        editTodo(text, category, priority, todo.id);

        setCategory("");
        setPriority("");
        setValue("");
    };


    return (
        <div className=''>
            <form className="todo-editing" onSubmit={handleSubmit}>
                <div className='priority' style={{}}>
                    {todo.priority == 3 ? (
                        <img style={{ color: todo.isCompleted ? "rgb(71, 71, 71)" : "" }} src={arrowDownImage} alt="Arrow Down" />
                    ) : todo.priority == 1 ? (
                        <img src={highPriority} alt='High Priority' />

                    ) : (
                        ""
                    )}
                </div>

                <div className="content" style={{ color: todo.isCompleted ? "rgb(71, 71, 71)" : "", textDecoration: todo.isCompleted ? "line-through" : "" }}>
                    <label htmlFor="title">Título:</label>
                    <input value={value} id='title' type="text" onChange={(e) => setValue(e.target.value)} required autoFocus />

                    <label htmlFor="title">Categoria:</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} required >
                        <option value="">Select a category</option>
                        <option value="Trabalho">Trabalho</option>
                        <option value="Pessoal">Pessoal</option>
                        <option value="Estudos">Estudos</option>
                    </select>

                    <label htmlFor="title">Prioridade:</label>
                    <select value={priority} onChange={(e) => setPriority(e.target.value)} required >
                        <option value="">Selecione a prioridade</option>
                        <option value="1">Alta</option>
                        <option value="2">Normal</option>
                        <option value="3">Baixa</option>
                    </select>
                </div>

                <div className='buttons'>

                    <button type='submit'>Editar Tarefa</button>
                </div>
            </form>
        </div>
    );
};

export default EditTodoForm