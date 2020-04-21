import React from 'react'
import { Layout, Menu, Dropdown,Avatar,message} from 'antd';
import { withRouter } from "react-router-dom";
import logo from './logo.jpg'
import { DownSquareTwoTone} from '@ant-design/icons';
import { adminRoutes } from "./../../routes";
import './frame.css'
import { clearToken } from './../../utils/auth'
const { Header, Content, Sider } = Layout;
const routes = adminRoutes.filter(route=>route.isShow)


function Index(props) {

    const popMenu = (
        <Menu onClick={p=>{
            if(p.key === 'logOut'){
                clearToken()
                props.history.push('/login')
            } else {
                message.info(p.key)
            }
        }}>
            <Menu.Item key='noti'>通知中心</Menu.Item>
            <Menu.Item key='setting'>设置</Menu.Item>
            <Menu.Item key='logOut'>退出</Menu.Item>
        </Menu>
    )

    return (
        <Layout>
            <Header className="header" style={{
                backgroundColor:'#F9F9F9',

            }}>
                <div className="logo" >
                    <img src={logo} alt='logo' style={{
                        width:'128px',height:'77px',marginLeft:'60px',paddingBottom:'10px'
                    }}/>
                </div>
                <Dropdown overlay={popMenu}>
                    <div style={{verticalAlign:'middle'}}>
                        <Avatar>U</Avatar>
                        <span>超级管理员</span>
                        <DownSquareTwoTone style={{fontSize:'20px'}}/>
                    </div>
                </Dropdown>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        {routes.map(route=>{
                            return (<Menu.Item 
                            key={route.path} 
                            onClick={p=>props.history.push(p.key)}
                            >
                                {route.icon}
                                {route.title}</Menu.Item>)
                        })}
                    </Menu>
                </Sider>
                <Layout style={{ padding: '16px' }}>
                    
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {props.children}
            </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default withRouter(Index) 
