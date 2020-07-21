import {ADD_TASK, DELETE_TASK} from './action-types'

export const addOneTask = (task) => {
    return {
        type: ADD_TASK,
        data: task
    }
} ;

export const deleteOneTask = (task) => {
    return {
        type: DELETE_TASK,
        data: task
    }
} ;