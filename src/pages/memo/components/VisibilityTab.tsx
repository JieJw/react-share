import React from 'react'
import '../index.less'
import { VisibilityType } from '../types'

interface IVisibilityTab {
  visibility: VisibilityType,
  setVisibility: React.Dispatch<React.SetStateAction<VisibilityType>>,
}

type TabType = {
  label: string,
  value: VisibilityType
}

const tabData: Array<TabType> = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
]

const VisibilityTab: React.FC<IVisibilityTab> = React.memo(props => {
  const { visibility, setVisibility } = props

  console.log('VisibilityTab component render');

  return <div className='visibility-tab-wrapper'>
    {tabData.map(tab => (
      <div key={tab.value} onClick={() => setVisibility(tab.value)} className={tab.value === visibility ? 'active' : ''}>{tab.label}</div>
    ))}
  </div>
})

export default VisibilityTab