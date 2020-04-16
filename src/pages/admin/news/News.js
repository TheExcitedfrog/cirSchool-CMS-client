import React from 'react'
import { Card ,Button ,Table,Popconfirm,message} from "antd";

const dataSource = [{
    demand_no:'32154765512',
    xmmc:'顺丰',
    company_name:'潘凯行'
}]
function News(props) {
    const columns = [{
        title:'需求代码',
        key:'id',
        dataIndex:'demand_no',
        width:80,
        align:'center'
    },{
        title:'项目名称',
        dataIndex:'xmmc'
    },{
        title:'发布者姓名',
        dataIndex:'company_name',

    },{
        title:'认证信息',
        dataIndex:'company_pass'
    },{
        title:'发布者身份',
        dataIndex:'role'
    },{
        title:'标的类型',
        dataIndex:'demand_type'
    },{
        title:'项目所在地',
        dataIndex:'region'
    },{
        title:'所属行业',
        dataIndex:'industry'
    },{
        title:'项目描述',
        dataIndex:'xmms'
    },
    {
        title:'操作',
        render:(txt,record,index)=>{
            return (<div>
                <Button type='primary' size='small' style={{marginRight:'10px'}}>修改</Button>
                <Popconfirm title='确定删除此项？' onCancel={()=>message.warn('已取消')} onConfirm={()=>message.success('删除成功')}>
                <Button type='danger' size='small'>删除</Button>
                </Popconfirm>
            </div>)
        }
    }]
    return (
        <Card title='需求列表' extra={<Button type='primary' size='small' onClick={()=>{
            props.history.push('/admin/news/edit')
        }}>新增</Button>}>
            <Table
                columns={columns}
                bordered
                dataSource={dataSource}
            />
        </Card>
    )
}

export default News
