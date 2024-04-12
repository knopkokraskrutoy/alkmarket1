import { DownOutlined, UserOutlined } from "@ant-design/icons"
import { Avatar, Dropdown, Space } from "antd"
import Link from "antd/es/typography/Link"
import cls from "../header.module.scss"
import { useState } from "react"
import Login from "./login"

const DropdownUser: React.FC = () => {
  const [authorized, setAuthorized] = useState(false)

  const handleAuthToggle = () => {
    setAuthorized(!authorized)
  }

  const items = [
    {
      label: <a onClick={e => e.stopPropagation()}>Настройки</a>,
      key: "0",
    },
    {
      label: authorized ? (
        <a
          className={cls.dropdown__exit}
          onClick={e => e.stopPropagation()}
          href="#"
        >
          Выйти
        </a>
      ) : (
          <Login/>
      ),
      key: "1",
    },
  ]

  return (
    <Dropdown menu={{ items }} placement="bottom">
      <Link className={cls.dropdown__link} onClick={e => e.preventDefault()}>
        {authorized && ( // Условный рендеринг Avatar
          <Avatar className={cls.dropdown__avatar} icon={<UserOutlined />} />
        )}
        {authorized ? "Алексей" : "Гость"}
        <DownOutlined />
      </Link>
    </Dropdown>
  )
}

export default DropdownUser

