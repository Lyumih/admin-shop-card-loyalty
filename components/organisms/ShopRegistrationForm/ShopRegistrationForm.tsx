import { FC, CSSProperties } from "react";
import { Form, Button, Input } from "antd";

interface FormData {
  email: string
  password: string
  phone: string
}

export interface ShopRegistrationFormProps {
  onFinish: (values:FormData) => void
}

const styleForm: CSSProperties = {
  maxWidth: "400px",
};



const ShopRegistrationForm: FC<ShopRegistrationFormProps> = ({onFinish}) => {
  return (
    <Form
      name="registration-form"
      style={styleForm}
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        label="Email"
        rules={[{ type: "email", required: true, message: "Введите Email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Телефон"
        rules={[{ required: true, message: "Введите телефон" }]}
      >
        <Input placeholder={"79999999999"} type="tel" maxLength={11} />
      </Form.Item>
      <Form.Item
        name="password"
        label="Пароль"
        hasFeedback
        rules={[{ required: true, message: "Введите пароль" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="Повторите Пароль"
        hasFeedback
        dependencies={["password"]}
        rules={[
          { required: true, message: "Введите пароль" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject("Пароли не совпадают");
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Зарегистрировать
      </Button>
    </Form>
  );
}

export default ShopRegistrationForm