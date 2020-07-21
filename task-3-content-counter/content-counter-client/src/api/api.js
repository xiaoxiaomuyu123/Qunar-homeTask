import axios from 'axios'

export const reqGetArticleInfo = (url) => {
    // 将url拼接为查询字符串
    // 设了一个接口，请求方法为get
    var queryStr = `article/?url=${url}`
    return axios.get(queryStr) ;
}