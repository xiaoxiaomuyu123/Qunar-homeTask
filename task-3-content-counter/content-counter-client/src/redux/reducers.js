import {REQUEST_SUCCESS,REQUEST_FAILURE, INIT_REQUEST} from './action-types'


var initState = {
    // 是否已经发送请求，未发送时true，发送时false
    init: true,
    // 请求状态，分为loading，success， no data，failure
    requestState: null,
    // 请求异常时的错误信息
    errMsg: null,
    // 服务器返回的数据
    articleInfo: []

}

export  function articleInfoReducer(state = initState, action) {
    switch (action.type) {
        case INIT_REQUEST: {
            const {init, requestState} = action ;
            return {...state, init, requestState} ;
        }
        case REQUEST_SUCCESS:
            let {articleInfo} = action ;
            const reqSucess = action.requestState ;
            // 由于我们可能多次添加同一个url，所以，这里在articleInfo数组中查找，如果存在这篇文章的信息，则会返回这个对象的数组中的索引
            // 如果没有找到，则返回-1
            const isExist = state.articleInfo.findIndex((item, index) => {
                return item.url === articleInfo.url ;
            })
            if (isExist === -1) {
                // 服务器返回的数据不存在于state中的articleInfo中
                return {...state, requestState: reqSucess, articleInfo: [...state.articleInfo, articleInfo]} ;
            } else {
                // 存在
                return {...state, requestState: reqSucess} ;
            }
        case REQUEST_FAILURE:
            const {errMsg} = action ;
            const reqFailure = action.requestState ;
            return {...state, errMsg, requestState: reqFailure}

        default:
            return state ;
    }
}