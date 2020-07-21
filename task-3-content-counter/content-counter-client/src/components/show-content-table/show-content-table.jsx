import React, {Component} from 'react' ;
import { Table, Tag, Space} from 'antd';

import './show-content-table-style.css'

export default class ShowContentTable extends Component {
    render() {

        const columns = [
            {
                title: '标题',
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: '字数',
                dataIndex: 'total',
                key: 'total',
            },
            {
                title: '中文字数',
                dataIndex: 'chinese',
                key: 'chinese',
            },
            {
                title: '英文字数',
                dataIndex: 'english',
                key: 'english',
            },
            {
                title: '标点符号数',
                dataIndex: 'punctuation',
                key: 'punctuation',
            },
        ]
        const {articleInfo} = this.props.state ;
        var tableData = articleInfo.map((item, index) => {
            const {title, total, chinese, english, punctuation} = item ;
            return {
                title,
                total,
                chinese,
                english,
                punctuation,
                key: index + 1
            }
        })
        return <div className="table-container">
            <Table columns={columns} dataSource={tableData}></Table>
        </div>
    }
}