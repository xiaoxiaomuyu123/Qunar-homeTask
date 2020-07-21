import React, {Component} from 'react' ;
import {Input, Row, Col, Button} from 'antd' ;

// 这里使用了antd的Input组件
const Group = Input.Group ;

export default class UrlInput extends Component {

    state = {
        articleUrl: ''
    }

    getInputContent = (e) => {
        var url = e.target.value.trim() ;
        // if (url.length === 0) {
        //     // 空字符串
        //     return ;
        // }

        console.log(url) ;

        this.setState({
            articleUrl: url
        })
    }

    submit = () => {
        const {getArticleInfo} = this.props ;

        getArticleInfo(this.state.articleUrl) ;

        this.setState({
            articleUrl: ''
        })
    }

    render() {
    
        return <div>
            <Group>
                {/*Row，Col使用antd中用于页面布局的组件*/}
                <Row gutter={48}>
                    <Col span={16}>
                        {/*采用受控组件的形式收集表单输入的信息*/}
                        <Input value={this.state.articleUrl} onChange={this.getInputContent}  placeholder="输入文章链接" size="middle"/>
                    </Col>
                    <Col span={6}>
                        <Button onClick={this.submit} type="primary">添加</Button>
                    </Col>
                </Row>

            </Group>

        </div>
    }
}