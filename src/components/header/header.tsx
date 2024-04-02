import {Layout, Menu} from 'antd';

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
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ flex: 1, maxWidth: '264px', justifyContent: 'flex-end' }}
        >
          <Menu.Item key="1">Заказы</Menu.Item>
          <Menu.Item key="2">Корзина</Menu.Item>
          <Menu.Item key="3">Профиль</Menu.Item>
        </Menu>
      </Header>
  );
};

export default HeaderComponent;