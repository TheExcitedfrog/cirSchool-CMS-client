import React from 'react'
import { Card, Form, Input, Button } from 'antd'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import { placeNews } from "./news_model";
export default class new_Edit extends React.Component {

    state = {
        editorState: BraftEditor.createEditorState(null)
    }

    handleEditorChange = (editorState) => {
        this.setState({
            editorState,
        })
    }

    _placeNews = (newsArr) => {
        placeNews(newsArr, (res) => {
            console.log(res)
        })
    }

    submitContent = async () => {
        var newsArr = {
            title: this.state.title,
            content: this.state.editorState.toHTML(),
        }
        this._placeNews(newsArr)
    }

    onFinish = values => {
        var newsArr = {
            title: this.state.title,
            content: this.state.editorState.toHTML(),
        }
        this._placeNews(newsArr)
    }

    handleFormChange = values => {
        this.setState({
            title: values.title
        })
    }

    render() {
        const { editorState } = this.state
        return (
            <Card title='添加资讯'>
                <Form
                    onFinish={this.onFinish}
                    onValuesChange={this.handleFormChange}
                >
                    <Form.Item
                        label='资讯标题'
                        name='title'
                    >
                        <Input placeholder='输入资讯标题'></Input>
                    </Form.Item>
                    <Form.Item lable='富文本编辑器'><BraftEditor
                        value={editorState}
                        onChange={this.handleEditorChange}
                        onSave={this.submitContent}
                    /></Form.Item>
                    <Form.Item><Button type='primary' onClick={this.submitContent}>保存</Button></Form.Item>
                </Form>
            </Card>
        )
    }

}
