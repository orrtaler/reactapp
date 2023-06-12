import React, { useRef } from 'react'

export default function DateInput(props) {
    const inputRef=useRef();

    const onChangeDate=()=>{
        props.setDeadline(inputRef.current.value);
    }
  return (
    <div className='col-md-4 mx-auto d-flex'>
        <input ref={inputRef} defaultValue={"2024-01-01"} type='date' className='form-control'/>
        <button onClick={onChangeDate}>Change</button>

    </div>
  )
}
