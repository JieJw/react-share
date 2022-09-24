import './index.less';
import { Layout } from 'antd'
import { Outlet } from "react-router-dom"

import HeaderLayout from './HeaderLayout';
import MenuLayout from './MenuLayout';

const { Sider, Content } = Layout

const LayoutIndex: React.FC = () => {
  return <div>
    <HeaderLayout />
    <Layout className='content'>
      <Sider width={220} className="sider-content">
        <MenuLayout />
      </Sider>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  </div>
}

export default LayoutIndex;