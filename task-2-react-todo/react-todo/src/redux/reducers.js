import {ADD_TASK, DELETE_TASK} from './action-types'

var initState = {
    task: []
} ;

export default function userTaskReducers(state=initState, action) {
    switch (action.type) {
        case ADD_TASK:
            return {task: [...state.task, action.data]} ;
        case DELETE_TASK:
            var deletedTask = action.data ;

            return {task: state.task.filter((item, index) => {
                    return item !== deletedTask
                })} ;
        default:
            return state ;
    }
}
