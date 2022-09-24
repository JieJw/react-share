import React, { useState, useMemo, useCallback, useRef } from 'react'
import '../index.less';
import { VisibilityType, TodoType, UpdateTodoFnType} from "../types";
import { Color } from 'react-color'
import Todo from './Todo';
import AddTodo from './AddTodo'

type TodoListType = {
  visibility: VisibilityType,
  themeColor: Color,
}

const initialTodos: Array<TodoType> = [
  { label: 'memo', key: 'memo', visibility: 'completed' },
  { label: 'useCallback', key: 'useCallback', visibility: 'active' },
  { label: 'useMemo', key: 'useMemo', visibility: 'active' },
]

const getUpdated: UpdateTodoFnType = (todos, todo) => {
  const target = todos.find(item => item.key === todo.key)
  if (target) {
    const newTarget = { ...target }
    newTarget.visibility = todo.visibility === 'completed' ? 'active' : 'completed'
    const index = todos.indexOf(target)
    todos.splice(index, 1, newTarget)
  }
  return [...todos];
}

const TodoList: React.FC<TodoListType> = props => {
  const { visibility, themeColor } = props;

  const [todos, setTodos] = useState<Array<TodoType>>(initialTodos)
  const filterCount = useRef<number>(0)
  
  const handleChange = useCallback((todo: TodoType) => {
    setTodos(todos => getUpdated(todos, todo))
  }, []);

  const filteredTodos = useMemo<Array<TodoType>>(() => {
    filterCount.current++;
    if ( visibility === 'all') return todos;
    return todos.filter(item => item.visibility === visibility)
  }, [todos, visibility])

  console.log('TodoList component render');

  return <div className='todo-list-wrapper'>
    <div className='header-text'>visibilityFilter被调用了<div>{filterCount.current}</div>次</div>
    <ul>
      { filteredTodos.map(todo => (
        <Todo key={todo.key} todo={todo} onChange={handleChange} />
      ))}
    </ul>
    <AddTodo setTodos={setTodos} themeColor={themeColor} />
  </div>
}

export default React.memo(TodoList);