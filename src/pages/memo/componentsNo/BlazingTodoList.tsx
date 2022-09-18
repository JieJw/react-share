import { useState } from 'react'
import TodoList from './TodoList'
import VisibilityTab from './VisibilityTab'
import Theme from './Theme'
import { Color } from 'react-color'

import { VisibilityType } from '../types'

const BlazingTodoList: React.FC = () => {
  const [visibility, setVisibility] = useState<VisibilityType>('all')
  const [themeColor, setThemeColor] = useState<Color>('#333')

  console.log('BlazingTodoList component render');

  return <div className='blazing-todo-list-wrapper'>
    <div className='todo-header'>
      <Theme themeColor={themeColor} setThemeColor={setThemeColor} />
      <VisibilityTab visibility={visibility} setVisibility={setVisibility} />
    </div>
    <TodoList {...{visibility, themeColor}} />
  </div>
}

export default BlazingTodoList;