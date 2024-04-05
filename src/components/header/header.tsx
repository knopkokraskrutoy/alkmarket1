import { Layout } from "antd"
import Search from "antd/es/input/Search"
import DropdownUser from "./elements/dropDownUser"
import { Link } from "react-router-dom"
import Basket from "./elements/basket"
import Order from "./elements/order"
import DrawerCatalog from "./elements/drawer"
import cls from "./header.module.scss"

const { Header } = Layout

const HeaderComponent: React.FC = () => {
  return (
    <Header
      className={cls.header}
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
