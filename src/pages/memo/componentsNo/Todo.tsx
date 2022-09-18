import React, { useEffect, useRef } from 'react';
import '../index.less';
import { TodoType } from "../types";
import { Checkbox } from 'antd'

interface ITodo {
  onChange: (todo: TodoType) => void;
  todo: TodoType
}

const Todo: React.FC<ITodo> = props => {
  const { onChange, todo } = props
  const renderCount = useRef<number>(0)

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  })

  console.log('Todo component render');
  
  return <div className="todo-item" onClick={() => onChange(todo)}>
    <div className='todo-lr'>
      <Checkbox checked={todo.visibility === 'completed'} />
      <span>{todo.label}</span>
    </div>
    <div className='change-time'>{renderCount.current}</div>
  </div>
}

export default Todo;