import React,{useRef, useEffect, forwardRef, useImperativeHandle} from 'react';
const NewCard = (({onSubmit}, ref) => {
    const inputRef = useRef(null);
    useImperativeHandle(ref,() => ({
      focus: () => { inputRef?.current?.focus() }
    }))
    const handleKeyDown = (e) => {
      if(e.key === 'Enter'){
        onSubmit(inputRef?.current?.value)
      }
    }
    
    return (
      <li className="todo-card">
        <h3 >添加新卡片</h3>
        <div className="card-title">
          <input type='text' ref={inputRef} onKeyDown={handleKeyDown}></input>
        </div>
      </li>
    );
  })
  export default React.forwardRef(NewCard);