import React from 'react'
import { Card ,Button ,Table,Popconfirm,message} from "antd";

const dataSource = [{
    id:'32154765512',
    company:'顺丰',
    detail:'已经到达温州市'
}]
function List(props) {
    const columns = [{
        title:'单号',
        key:'id',
        dataIndex:'id',
        width:300,
        align:'center',
    },{
        title:'快递公司',
        dataIndex:'company',

    },{
        title:'详情',
        dataIndex:'detail'
    },{
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
            props.history.push('/admin/express/edit')
        }}>新增</Button>}>
            <Table
                columns={columns}
                bordered
                dataSource={dataSource}
            />
        </Card>
    )
}

export default List
