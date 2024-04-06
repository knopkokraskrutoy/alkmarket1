import { Button, Drawer, Menu } from "antd"
import { UnorderedListOutlined } from "@ant-design/icons"
import { useState } from "react"
import cls from "../header.module.scss"

const DrawerCatalog: React.FC = () => {
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const user = {
    name: "Алексей",
  }

  return (
    <>
      <Button onClick={showDrawer}>
        <UnorderedListOutlined />
        Каталог
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button type="primary" ghost className={cls.drawer__btn}>
            Вино
          </Button>
          <Button className={cls.drawer__btn}>Шампанское</Button>
          <Button className={cls.drawer__btn}>Коньяк</Button>
          <Button className={cls.drawer__btn}>Виски</Button>
        </div>
      </Drawer>
    </>
  )
}

export default DrawerCatalog
