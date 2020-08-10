import { FC } from "react";
import { Form, Button, Input } from "antd";

interface FormData {
  email: string
}

export interface ShopRegistrationFormProps {
  onFinish: (values:FormData) => void
}

const ShopRegistrationForm: FC<ShopRegistrationFormProps> = ({onFinish}) => {
  return (
    <Form
      name="shop-registration-form"
      onFinish={onFinish}
    >
      
      <Form.Item label="Email" name="email">
        <Input />
      </Form.Item>
      <Button type="primary" htmlType="submit">Загрегистрировать магазин</Button>
    </Form>
  )
}

export default ShopRegistrationForm