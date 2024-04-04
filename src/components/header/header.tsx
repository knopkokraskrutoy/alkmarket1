import { ShoppingCartOutlined, UnorderedListOutlined } from "@ant-design/icons"
import { Button, Input, Layout, Menu, Badge, Avatar } from "antd"
import Search from "antd/es/input/Search"
import DrawerUser from "./drawer"
import { Link } from "react-router-dom"

const { Header } = Layout

const HeaderComponent: React.FC = () => {
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
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
      <div className="Menu" style={{ display: "flex", flexDirection: "row", gap: "16px", alignItems: "center", justifyContent: "center" }}>
      <Link to={'/orders'}>
          Заказы
        </Link>
        <Link
          to={"#"}
          style={{display: "flex"}}
        >
          <Badge size="small" count={5}>
            <ShoppingCartOutlined style={{ color: "#fff", fontSize: "32px" }} />
          </Badge>
        </Link>
        <Link to={'/user'}>
          <DrawerUser />
        </Link>
      </div>
      <div
        className="header-search"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Button>
          <UnorderedListOutlined />
          Каталог
        </Button>
        <Search placeholder="Поиск" enterButton />
      </div>
    </Header>
  )
}

export default HeaderComponent
