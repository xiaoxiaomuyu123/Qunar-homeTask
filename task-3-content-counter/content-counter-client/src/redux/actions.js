import {REQUEST_FAILURE, REQUEST_SUCCESS, INIT_REQUEST} from './action-types'

import {reqGetArticleInfo} from '../api/api'

//  发起请求时分发，表示请求刚刚发起
function initRequest(init, requestState) {
    return {
        type: INIT_REQUEST,
        init,
        requestState
    }
}


// 请求成功时分发
function requestSuccess(requestState, articleInfo) {
    return {
        type: REQUEST_SUCCESS,
        requestState,
        articleInfo
    }

}

// 请求失败时分发
function requestFailure(requestState, errMsg) {
    return {
        type: REQUEST_FAILURE,
        requestState,
        errMsg
    }
}

/**
 * 这是一个异步action
 * @param url
 */
export function getArticleInfo(url) {
    return (dispatch, getState) => {
        // 在刚刚发起请求时，分发一个action，表示请求已经开始
        dispatch(initRequest(false, 'loading')) ;
        // 正式开始异步请求
        reqGetArticleInfo(url)
            .then((response) => {

                const responseData = response.data ;

                console.log(response) ;
                if (responseData.code === 0) {
                    // 请求发送成功，得到响应数据
                    dispatch(requestSuccess('success', responseData.data)) ;
                } else {
                    // 请求发送成功，服务器返回了其他状态码,没有得到数据
                    dispatch(requestFailure('no data', '没有得到数据')) ;
                }
            }, (errMsg) => {
                // 网络异常，或者服务器错误
                dispatch(requestFailure('failure', errMsg)) ;
            })
    }
}