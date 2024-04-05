import { ShoppingCartOutlined, UnorderedListOutlined } from "@ant-design/icons"
import { Button, Input, Layout, Menu, Badge, Avatar } from "antd"
import Search from "antd/es/input/Search"
import DrawerUser from "./drawer"
import DropdownUser from "../user/dropDownUser"
import { Link } from "react-router-dom"
import Basket from "./basket"
import Order from "./order"
import DrawerCatalog from "./drawer"

const { Header } = Layout

const HeaderComponent: React.FC = () => {
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        height: "72px",
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
      <div
        className="Menu"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Order />
        <Basket></Basket>
        <Link to={"/user"}>
          <DropdownUser />
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
        <DrawerCatalog />
        <Search placeholder="Поиск" enterButton />
      </div>
    </Header>
  )
}

export default HeaderComponent
