import { DownOutlined, UserOutlined } from "@ant-design/icons"
import type { MenuProps } from "antd"
import { Avatar, Dropdown, Space } from "antd"
import Link from "antd/es/typography/Link"
import cls from "../header.module.scss"

const items: MenuProps["items"] = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Настройки
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        className={cls.dropdown__exit}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Выйти
      </a>
    ),
    key: "1",
  },
]

const DropdownUser: React.FC = () => (
  <Dropdown menu={{ items }} placement="bottom">
    <Link className={cls.dropdown__link} onClick={e => e.preventDefault()}>
      <Avatar
        className={cls.dropdown__avatar}
        icon={<UserOutlined />}
      />
      Алексей
      <DownOutlined />
    </Link>
  </Dropdown>
)

export default DropdownUser
