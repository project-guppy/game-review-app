import React, {useState} from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from 'react-router-dom';

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

const LogIn = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

const [username, setLoginUsername] = useState();
const [password, setLoginPassword] = useState();
const history = useHistory();

const loginHandler = async(event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    const loginValidation = await fetch("http://localhost:3003/users/login", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    }).then(res=>res.json())

    console.log(loginValidation);
   
    if(loginValidation.login){
        console.log("You have logged in!");
        history.push("/");
    }
    else{
        console.log("You are a loser and have failed");
    }
}

const usernameCheckHandler = (event) => {
    setLoginUsername(event.target.value);
}

const passwordCheckHandler = (event) => {
    setLoginPassword(event.target.value);
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
                <Input value={username} onChange={usernameCheckHandler}/>
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
                <Input.Password value={password} onChange={passwordCheckHandler}/>
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button onClick={loginHandler} type="primary" htmlType="submit">
                    Submit
          </Button>
            </Form.Item>
        </Form>
    );
};
export default LogIn;
