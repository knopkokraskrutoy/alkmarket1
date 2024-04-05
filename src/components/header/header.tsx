import { Layout } from "antd"
import Search from "antd/es/input/Search"
import DropdownUser from "./dropDownUser"
import { Link } from "react-router-dom"
import Basket from "./basket"
import Order from "./order"
import DrawerCatalog from "./drawer"
import cls from "./header.module.scss"

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
      }}
    >
      <div className={cls.logo}>LOGO</div>
      <div className={cls.navbar}>
        <div className={cls.catalog}>
          <DrawerCatalog />
          <Search placeholder="Поиск" enterButton />
        </div>
        <div className={cls.menu}>
          <Order />
          <Basket></Basket>
          <Link to={"/user"}>
            <DropdownUser />
          </Link>
        </div>
      </div>
    </Header>
  )
}

export default HeaderComponent
