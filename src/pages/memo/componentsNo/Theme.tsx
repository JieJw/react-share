import React from 'react';
import '../index.less'
import { Color, ColorResult } from 'react-color'
import { Dropdown } from 'antd'
import { SketchPicker } from 'react-color';

interface ITheme {
  themeColor: Color,
  setThemeColor: React.Dispatch<React.SetStateAction<Color>>,
}

const Theme: React.FC<ITheme> = props => {
  const { themeColor, setThemeColor } = props

  const handlerThemeColorChange = (color: ColorResult) => {
    setThemeColor(color.hex)
  }

  console.log('Theme Component render');

  return <div className='theme-wrapper'>
    <Dropdown overlay={<SketchPicker onChange={handlerThemeColorChange} />} trigger={['click']}>
      <div className='theme-div' style={{ backgroundColor: themeColor.toString() }}></div>
    </Dropdown>
  </div>
}

export default Theme;