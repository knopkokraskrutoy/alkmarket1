import React, { useState } from "react"
import { Button, Drawer, Menu } from "antd"
import './style.css'

const DrawerUser: React.FC = () => {
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const user = {
    name: "Алексей"
  }

  return (
    <>
      <Button className='btn' type="primary" onClick={showDrawer}>
        {user.name}
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}

export default DrawerUser
