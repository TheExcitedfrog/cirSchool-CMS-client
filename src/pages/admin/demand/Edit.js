import React from 'react'
import {Card,Form,Button} from 'antd'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
export default class Edit extends React.Component {

    state = {
        // 创建一个空的editorState作为初始值
        editorState: BraftEditor.createEditorState(null)
    }
    render(){
        const { editorState } = this.state
        return (
            <Card title='添加需求'>
                <Form>
                    <Form.Item lable='富文本编辑器'><BraftEditor
                        value={editorState}
                        onChange={this.handleEditorChange}
                        onSave={this.submitContent}
                    /></Form.Item>
                    <Form.Item><Button type='primary'>保存</Button></Form.Item>
                </Form>
            </Card>
        )
    }
    
}
