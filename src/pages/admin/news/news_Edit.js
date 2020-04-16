import React from 'react'
import {Card,Form,Input,Button} from 'antd'
// import { createFromIconfontCN } from '@ant-design/icons';
// const IconFont = createFromIconfontCN({
//     scriptUrl: '//at.alicdn.com/t/font_1757354_pu2pdak7m8f.js',
//   });
//   <IconFont style={{fontSize:'10px'}} type='icon-fabu'/>
function news_Edit() {
    return (
        <Card title='发布资讯'>
            <Form>
                <Form.Item lable='咨询名称'><Input placeholder='请输入快递单号'></Input></Form.Item>
                <Form.Item><Button type='primary'>保存</Button></Form.Item>
            </Form>
        </Card>
    )
}

export default news_Edit
