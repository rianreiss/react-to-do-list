import React from 'react'
import arrowDownImage from '../assets/arrow-down-short.svg';
import highPriority from '../assets/exclamation-circle.svg';
import trash from '../assets/trash-fill.svg';
import pencil from '../assets/pencil-square.svg';

const Todo = ({ todo, removeTodo, completeTodo }) => {
    return (
        <div
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            <div className='priority'>
                {todo.priority == 3 ? (
                    <img src={arrowDownImage} alt="Arrow Down" />
                ) : todo.priority == 1 ? (
                    <img src={highPriority} alt='High Priority' />

                ) : (
                    ""
                )}
            </div>

            <div className="content">
                <p>{todo.text}</p>
                <p className="category">
                    ({todo.category})
                </p>
            </div>
            <div className='buttons'>
                <button className='edit' onClick={() => editTodo(todo.id)}>
                    <img src={pencil} alt="" />
                </button>
                <button className='complete' onClick={() => completeTodo(todo.id)}>Complete</button>
                <button className='remove' onClick={() => removeTodo(todo.id)}>
                    <img src={trash} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Todo