import React, { useState } from "react"
import { Button, Drawer, Menu } from "antd"
import './style.css'
import { UnorderedListOutlined } from "@ant-design/icons"

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
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}

export default DrawerCatalog
