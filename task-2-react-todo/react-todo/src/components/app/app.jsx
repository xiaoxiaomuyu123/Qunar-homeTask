import React, {Component} from 'react'
import Input from '../input/input'
import TodoList from '../todo-list/todo-list'

import './app-style.css'

export default class App extends Component {
    render() {
        return (
            <div className="main">
                <h1>React Todo</h1>
                <TodoList />
                <Input />

            </div>
        )
    }
}