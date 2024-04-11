import React, { useState } from "react"
import { Modal } from "antd"
import { Button, Checkbox, Form, type FormProps, Input } from "antd"

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

const Login: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Войти
      </Button>
      <Modal
        cancelButtonProps
        title="Авторизация"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
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
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Запомнить меня</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Готово
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default Login
