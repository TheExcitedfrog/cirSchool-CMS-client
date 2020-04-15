import index from "../pages/admin/dashboard/Index"
import Login from "../pages/admin/Login"
import List from "../pages/admin/demand/List"
import Edit from "../pages/admin/demand/Edit"
import PageNotFound from "../pages/PageNotFound"
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import React from 'react'
export const mainRoutes = [{
    path:'/login',
    component:Login
},{
    path:'/404',
    component:PageNotFound
}]

export const adminRoutes = [{
    path:'/admin/dashboard',
    component:index,
    isShow:true,
    title:'看板',
    icon:<UserOutlined/>
},{
    path:'/admin/express',
    component:List,
    isShow:true,
    exact:true,
    title:'需求管理',
    icon:<LaptopOutlined/>
},{
    path:'/admin/express/edit/:id?',
    component:Edit,
    isShow:false
}]