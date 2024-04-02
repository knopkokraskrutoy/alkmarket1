import { UnorderedListOutlined } from '@ant-design/icons';
import {Button, Input, Layout, Menu} from 'antd';
import Search from 'antd/es/input/Search';

const {Header} = Layout;


const HeaderComponent: React.FC = () => {
  return (
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          // backgroundColor: 'white',
        }}
      >
        <div className="logo">LOGO</div>

        {/* Warning: [antd: Menu] `children` is deprecated. Please use `items` instead
          Example: const items: MenuProps['items'] = [{
          label: <Link to="/">Home</Link>,
          icon: <HomeOutlined/>,
          key: 'home'
        }, {
          ... etc
        }]

        ....

        <Menu mode="vertical" theme="dark" items={items} />
        */}
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ flex: 1, maxWidth: '40%', justifyContent: 'flex-end' }}
        >
          <Menu.Item key="1">Заказы</Menu.Item>
          <Menu.Item key="2">Корзина</Menu.Item>
          <Menu.Item key="3">Профиль</Menu.Item>
        </Menu>
        <div className="header-search" 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
        >
        <Button ><UnorderedListOutlined />Каталог</Button>
        <Search placeholder="Поиск" enterButton />
        </div>
      </Header>
  );
};

export default HeaderComponent;