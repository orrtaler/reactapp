import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, resetTodos } from '../features/todosSlice';

export default function TodoInput() {
    const dispach = useDispatch();
    const nameRef = useRef();
    const timeRef = useRef();

    const addNewTodo = () => {
        let todoBody = {
            name:nameRef.current.value,
            time:timeRef.current.value,
            id:Date.now()
        }
        dispach(addTodo({todo:todoBody}));
    }

  return (
    <div className='container col-md-6'>
        <h2>add a new task:</h2>
        <label>Name:</label>
        <input ref={nameRef} type='text' className='form-control' />
        <label>Time:</label>
        <input ref={timeRef} type='time' defaultValue="09:00" className='form-control' />
        <button onClick={addNewTodo} className='btn btn-info'>Add todo</button>
        <button onClick={() => {
            dispach(resetTodos());
        }} className='btn btn-danger'>Reset</button>
    </div>
  )
}
