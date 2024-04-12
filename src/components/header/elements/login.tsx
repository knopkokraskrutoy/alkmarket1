import { Modal, Space } from "antd"
import { Button, Checkbox, Form, type FormProps, Input } from "antd"
import DropdownUser from "./dropDownUser"
import { useState } from "react"
import Link from "antd/es/typography/Link"

type FieldType = {
  username?: string
  password?: string
  remember?: string
}

const onFinish: FormProps<FieldType>["onFinish"] = values => {
  console.log("Success:", values)
}

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = errorInfo => {
  console.log("Failed:", errorInfo)
}

const Login: React.FC<{
  setAuthorized: any;
  isModalOpen: boolean;
  setIsModalOpen: any;
  authorized: boolean;
}> = ({ setAuthorized, authorized, isModalOpen, setIsModalOpen }) => {
  

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsModalOpen(false)
    setAuthorized(true)
    event.stopPropagation()
  }

  const handleButtonClick = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <Modal
      open={isModalOpen}
      footer={null}
      onCancel={handleButtonClick}
      style={{ textAlign: "center", display: "flex",justifyContent:"center" }}
    >
      <h2>Вход</h2>
      <Form
        name="basic"
        layout="vertical"
        style={{ maxWidth: 400 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Логин"
          name="username"
          rules={[{ required: true, message: "Вы не ввели логин!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Пароль"
          name="password"
          rules={[{ required: true, message: "Вы не ввели пароль!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
        >
          <Checkbox>Запомнить меня</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" block >Войти</Button>
      </Form.Item>
      <Form.Item>
        <Link><Button type="link" block >Нет аккаунта? Зарегистрироваться</Button></Link>
      </Form.Item>
      </Form>
    </Modal>
  )
}

export default Login
