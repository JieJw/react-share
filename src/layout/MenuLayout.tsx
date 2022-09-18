import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';


const MenuData: MenuProps['items'] = [
  {
    key: 'memo',
    label: 'Memo',
  },
  {
    key: 'api',
    label: 'API',
  },
  {
    key: 'concurrent',
    label: 'Concurrent',
  }
]

const MenuLayout: React.FC = () => {
  const navigate = useNavigate();


  const onClick: MenuProps['onClick']= (e) => {
    navigate(`/${e.key}`);
  }
  
  return <Menu
    onClick={onClick}
    mode="inline"
    defaultSelectedKeys={['memo']}
    defaultOpenKeys={['']}
    style={{ height: '100%', borderRight: 0 }}
    items={MenuData}
    
  />
}

export default MenuLayout;