import { DownOutlined, UserOutlined } from "@ant-design/icons"
import type { MenuProps } from "antd"
import { Avatar, Dropdown, Space } from "antd"
import Link from "antd/es/typography/Link"

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
  <Dropdown menu={{ items }} placement="bottom">
    <Link style={{height: '71px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'}} onClick={e => e.preventDefault()}>
      
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
        Алексей
        <DownOutlined />
    </Link>
  </Dropdown>
)

export default DropdownUser
