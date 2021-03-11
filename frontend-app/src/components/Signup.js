import React, {useState} from "react";
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const SignUp = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


const [username, setUsername] = useState();
const [password, setPassword] = useState();

const signUpHandler = async(event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    await fetch("http://localhost:3003/users/signup", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    })
}

const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
}

const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
}

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input value={username} onChange={usernameChangeHandler} />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password value={password} onChange={passwordChangeHandler} />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button onClick={signUpHandler} type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};
export default SignUp;
