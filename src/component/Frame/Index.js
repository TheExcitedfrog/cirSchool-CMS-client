import React from 'react'
import { Layout, Menu, } from 'antd';
import { withRouter } from "react-router-dom";
import logo from './logo.jpg'
import { adminRoutes } from "./../../routes";
const { Header, Content, Sider } = Layout;
const routes = adminRoutes.filter(route=>route.isShow)
function Index(props) {
    return (
        <Layout>
            <Header className="header" style={{
                backgroundColor:'#F9F9F9',
                height:'100px'
            }}>
                <div className="logo" >
                    <img src={logo} alt='logo' style={{
                        width:'180px',height:'94px',marginLeft:'60px'
                    }}/>
                </div>
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
