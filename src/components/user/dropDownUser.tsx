import React from "react"
import { DownOutlined } from "@ant-design/icons"
import type { MenuProps } from "antd"
import { Dropdown, Space } from "antd"

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
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
        style={{ color: "red" }}
      >
        Выйти
      </a>
    ),
    key: "1",
  },
]

const DropdownUser: React.FC = () => (
  <Dropdown menu={{ items }} placement="bottomRight">
    <a onClick={e => e.preventDefault()}>
      <Space>
        Алексей
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
)

export default DropdownUser
