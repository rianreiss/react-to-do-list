import React from 'react'
import arrowDownImage from '../assets/arrow-down-short.svg';
import highPriority from '../assets/exclamation-circle.svg';
import trash from '../assets/trash-fill.svg';
import pencil from '../assets/pencil-square.svg';

const Todo = ({ todo, removeTodo, completeTodo, editTodo }) => {
    return (
        <div
            className="todo"
            style={{ backgroundColor: todo.isCompleted ? "rgba(254, 241, 224, 0.5)" : "" }}
        >
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
                <p>{todo.text}</p>
                <p className="category">
                    {todo.category}
                </p>
            </div>
            <div className='buttons'>
                <button className='edit' disabled={todo.isCompleted} style={{ cursor: todo.isCompleted ? 'not-allowed' : '' , backgroundColor: todo.isCompleted ? "rgba(51, 57, 116, 0.5)" : "" }} onClick={() => editTodo(todo.id)}>
                    <img src={pencil} alt="" />
                </button>
                <button className='complete' style={{ boxShadow: todo.isCompleted ? "#333974 0px 0px 0px 2px" : "" }} onClick={() => completeTodo(todo.id)}>
                    {todo.isCompleted ? "Voltar" : "Completar"}
                </button>
                <button className='remove' disabled={todo.isCompleted} style={{ cursor: todo.isCompleted ? 'not-allowed' : '' , backgroundColor: todo.isCompleted ? "rgba(217, 83, 79, 0.5)" : "" }} onClick={() => removeTodo(todo.id)}>
                    <img src={trash} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Todo