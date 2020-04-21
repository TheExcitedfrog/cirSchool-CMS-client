import React from 'react'
import { Form, Input, Button, Checkbox, Card , message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.css'
import { login } from './login-model'
import { setToken } from "./../../../utils/auth";
export default function Login(props) {

    const onFinish = values => {
        var params = {
            ac:values.username,
            se:values.password,
        }
        login(params,(res)=>{
            setToken(res.token)
            message.success('登录成功')
            props.history.push('/admin')
        })
    };

    return (
        <div style={{width:'100%',height:'100%',backgroundImage:'url(http://pic.yupoo.com/kkkxing/532cf2c2/b1b7faef.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        <Card title='博思创新管理后台' className='login-form'>
            <Form
                name="normal_login"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入用户名!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="密码"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
          </Button>
                </Form.Item>
            </Form>
        </Card>
        </div>
    )
}