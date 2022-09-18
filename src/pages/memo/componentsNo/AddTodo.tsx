import React, { useState } from 'react'
import '../index.less';
import {TodoType} from '../types'
import { Input } from 'antd'
import { Color } from 'react-color';

interface IAddTodo {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>,
  themeColor: Color,
}

const baseTodo: TodoType = {
  visibility: 'active',
  label: '',
  key: '',
}

const AddTodo: React.FC<IAddTodo> = props => {
  const { setTodos, themeColor } = props;
  const [value, setValue] = useState<string>('')

  console.log('AddTodo component render');

  const onAddTodoClick = () => {
    if (!value) return;
    const addTodo = { ...baseTodo, label: value, key: value }
    setValue('');
    setTodos((todos: Array<TodoType>) => [...todos, addTodo])
  }

  return <div className='add-todo-wrapper'>
    <Input value={value} placeholder='Add todo' bordered={false} className='input' onChange={(e) => setValue(e.target.value)} />
    <div style={{backgroundColor: themeColor.toString()}} onClick={onAddTodoClick}>Add</div>
  </div>
}

export default AddTodo