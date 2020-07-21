import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, FormControl, InputGroup}  from 'react-bootstrap'


import {addOneTask} from '../../redux/actions'

import './input-style.css'

class Input extends Component {

    state = {
        inputContent: ''
    } ;

    getInputContent = (e) => {

        var inputValue = e.target.value ;
        console.log(inputValue) ;
        var content = inputValue.trim() ;

        // if (content.length === 0) {
        //     // 如果输入的内容去除两端的空格后，为空，则终止
        //     return ;
        // }

        this.setState({
            inputContent: content
        }) ;
    } ;

    handleClick = () => {
        const {inputContent} = this.state ;
        if (inputContent.length === 0) {
            // 如果输入的内容去除两端的空格后，为空，则终止
            return ;
        }
        this.props.addOneTask(inputContent) ;
        // 提交完成后，清空输入框
        this.setState({
            inputContent: ''
        })
    } ;

    render() {
        return (
            <div className="task-input">
                {/*使用受控组件收集输入框输入的文本*/}
                <div className="input-wrapper">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Task</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            value={this.state.inputContent}
                            onChange={this.getInputContent}
                            placeholder="请输入待做的事项"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </div>

                <div className="button-wrapper">
                    <Button   variant="primary" size="ml" onClick={this.handleClick}>save task</Button>
                </div>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
} ;

const mapDispatchToProps = {
    addOneTask
} ;

export default connect(mapStateToProps, mapDispatchToProps)(Input) ;