import React, {Component} from 'react'
import {addOneTask,deleteOneTask} from "../../redux/actions";
import {connect} from "react-redux";


import './todo-list-style.css'

class TodoList extends Component {

    state = {
        itemStyle: {
            'backgroundColor': '#E0F0D6',
            'color': '#447945',
            'textDecoration': 'line-through'
        },
        taskDoneCount: 0

    } ;

    deleteOneTask = (e) => {
        // 获取目标元素
        var targetElement = e.target;
        // 获取目标元素的父节点
        var parentElement = targetElement.parentElement ;
        // 获取目标元素的所有类名
        const {classList} = targetElement;

        // console.log(targetElement);
        var {taskDoneCount} = this.state;


        if (classList.contains('show-content')) {
            var taskName = targetElement.previousElementSibling.innerHTML ;
            // 分发一个action，从state中删除这个事项
            console.log(parentElement.nextElementSibling) ;
            // 如果类名中含有show-content，表明已经完成该项事件，且删除字样已经出现

            if (parentElement.nextElementSibling && parentElement.nextElementSibling.classList.contains('todo-done')) {
                // 分发一个action，从state中删除这个事项
                this.props.deleteOneTask(taskName) ;
            } else {

                // console.log(taskName) ;
                // 复选框移除check-active
                parentElement.children[0].classList.remove('check-active') ;
                // 父元素移除todo-done
                parentElement.classList.remove('todo-done') ;
                // 第二个子元素移除task-name-done
                parentElement.children[1].classList.remove('task-name-done') ;
                // 第三个子元素移除show-content
                classList.remove('show-content') ;
                // parentElement.parentElement.removeChild(parentElement) ;

                this.props.deleteOneTask(taskName) ;

            }
            // 完成事项的数量减1
            taskDoneCount-- ;
            if (taskDoneCount <= 0) {
                taskDoneCount = 0 ;
            }
            this.setState({
                taskDoneCount
            }) ;



        }
    } ;

    completeOneTask = (e) => {

        var targetElement = e.target;
        var parentElement = targetElement.parentElement ;

        const {classList} = targetElement;

        console.log(targetElement);
        var {taskDoneCount} = this.state;

        if (classList.contains('check-active')) {
                // 如果目标元素的类名中包含check-active，表明已经被勾选
                // 移除check-active
                classList.remove('check-active') ;
                // 父元素移除todo-done
                parentElement.classList.remove('todo-done') ;
                // 第三个子元素移除show-content
                parentElement.children[2].classList.remove('show-content') ;
                // 第二个子元素移除task-name-done
                parentElement.children[1].classList.remove('task-name-done') ;
                taskDoneCount-- ;
                if (taskDoneCount <= 0) {
                    taskDoneCount = 0 ;
                }
                this.setState({
                    taskDoneCount
                })

        } else if (classList[0] === 'check') {

            classList.add('check-active') ;
            parentElement.classList.add('todo-done') ;

            parentElement.children[1].classList.add('task-name-done') ;
            parentElement.children[2].classList.add('show-content') ;

            taskDoneCount++ ;
            console.log(taskDoneCount) ;
            this.setState({
                taskDoneCount
            })
        }

    } ;



    render() {

        const {state} = this.props ;
        var {task} = state ;
        return (
            <div className="todo">
                <div className="todo-main" onClick={this.completeOneTask} >
                    {
                        task.map((item, index) => {
                            return <div className='todo-item'
                                        key={index}
                                    >
                                        <div className='check'></div>
                                        <div>{item}</div>
                                        <div className="delete-task" onClick={this.deleteOneTask}>删除</div>
                            </div>

                        })
                    }
                </div>
                <div className="todo-footer">
                    任务总数: {task.length} / 已完成: {this.state.taskDoneCount}
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
    deleteOneTask
} ;

export default connect(mapStateToProps, mapDispatchToProps)(TodoList) ;