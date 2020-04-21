import React, { useEffect, useState } from 'react'
import { Card, Button, Table, Popconfirm, message } from "antd";
import { getDemand } from "./demand-model";

function List(props) {
    const [dataSource, setDataSource] = useState([]);
    const [total,setTotal] = useState(0);
    const loadData = (page) =>{
        getDemand(page, (res) => {
            var info = res.data.data.map(company => {
                company.company_name = company.company.name
                company.company_pass = company.company.pass
                company.region = company.region + '->' + company.region_1 + '->' + company.region_2
                company.industry = company.industry_1 +'->'+ company.industry_2 +'->'+ company.industry_3
                return company
            })
            setDataSource(info)
        })
    }
    useEffect(() => {
        getDemand(1, (res) => {
            var info = res.data.data.map(company => {
                company.company_name = company.company.name
                company.company_pass = company.company.pass
                company.region = company.region + '->' + company.region_1 + '->' + company.region_2
                company.industry = company.industry_1 +'->'+ company.industry_2 +'->'+ company.industry_3
                return company
            })
            setTotal(res.data.total)
            setDataSource(info)
        })
    }, []);



    const columns = [{
        title: '需求代码',
        key: 'demand_no',
        dataIndex: 'demand_no',
        width: 80 ,
        fixed: 'left',
        align: 'center'
    }, {
        title: '项目名称',
        width: 150,
        fixed: 'left',
        dataIndex: 'xmmc',
        key: 'xmmc',
    }, {
        title: '发布者姓名',
        dataIndex: "company_name",
        width:80
    }, {
        title: '认证信息',
        dataIndex: 'company_pass',
        width:80,
        render:(txt,record,index) => {
            switch (txt){
                default:
                    return '认证查询错误';
                case 1:
                    return '未认证';
                case 2:
                    return '已认证';
            }
        }
    }, {
        title: '发布者身份',
        dataIndex: 'role',
        width:90,
        render:(txt,record,index) => {
            switch (txt){
                default:
                    return '身份查询错误';
                case 0:
                    return '股东/所有者';
                case 1:
                    return '潜在联合投资人';
                case 2:
                    return '财务顾问';
            }
        }
    }, {
        title: '标的类型',
        dataIndex: 'demand_type',
        width:100,
        render:(txt,record,index) => {
            switch (txt){
                default:
                    return '类型错误';
                case 0:
                    return '寻求资源 ';
                case 1:
                    return '寻求合作';
                case 2:
                    return '寻求投资';
                case 3:
                    return '寻求渠道';
            }
        }
    }, {
        title: '项目所在地',
        dataIndex: 'region',
        width:200
    }, {
        title: '所属行业',
        width:320,
        dataIndex: 'industry'
    },
    {
        title: '操作',
        fixed: 'right',
        align: 'center',
        width: 140,
        render: (txt, record, index) => {
            return (<div>
                <Button type='primary' size='small' style={{ marginRight: '10px' }}>修改</Button>
                <Popconfirm title='确定删除此项？' onCancel={() => message.warn('已取消')} onConfirm={() => message.success('删除成功')}>
                    <Button type='danger' size='small'>删除</Button>
                </Popconfirm>
            </div>)
        }
    }]
    return (

        <Card title='需求列表' extra={<Button type='primary' size='small' onClick={() => {
            props.history.push('/admin/news/edit')
        }}>新增</Button>}>
            <Table
                rowKey={columns[0].key}
                scroll={{ x: 1300 }}
                key={columns.title}
                columns={columns}
                bordered
                dataSource={dataSource}
                pagination={{
                    total,
                    defaultCurrent: 1,
                    defaultPageSize:5,
                    onChange:loadData
                }}
            />
        </Card>
    )
}

export default List
