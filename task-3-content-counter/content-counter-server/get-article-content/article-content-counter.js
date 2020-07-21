const cheerio = require('cheerio') ;
const axios = require('axios') ;

const {userModel} = require('../db/article-content-info')

const url = 'https://www.sohu.com/a/406061259_267106' ;

/**
 *
 * @param url 待提取信息的文章的url
 * @param callback
 */

function getSohuArticleContent(url, callback) {

        axios.get(url).then(response => {
            // 得到文章的主体内容和文章标题
            var {articleContent, title} = parseArticleContent(response.data) ;
            // 得到文章的统计信息
            var staticInfo = contentCounter(articleContent) ;

            const {chineseCharCount, englishCharCount, punctuation} = staticInfo ;

            const total = chineseCharCount + englishCharCount + punctuation ;

            var saveStaticInfo = new userModel({
                url,
                title,
                total,
                chinese: chineseCharCount,
                english: englishCharCount,
                punctuation
            }) ;

            // 将解析出来的文章的信息存储到Mongodb
            saveStaticInfo.save(function(err, ret) {
                if (err) {
                    return console.log('存储出现异常') ;
                }

                console.log('存储成功!') ;
            })
            console.log(staticInfo) ;
            // 调用回调函数，对文章的统计数据和标题进行处理
            callback(staticInfo, title) ;

        }, err => {
            console.log('出错了', err) ;
        })


}

// getSohuArticleContent(url) ;




// 判断是否是汉字
// const chineseCharactersPattern = /[\u4e00-\u9fa5]/g ;
// 判断是否是小写英文字母
// const lowerCaseLettersPattern = /[\u0061-\u007a]/g ;
// 判断是否是大写英文字母
// const upperCaseLettersPattern = /[\u0041-\u005a]/g ;
// 判断是否是数字
// const numPattern = /[\u0030-\u0039]/g ;

/**
 * 解析搜狐网站新闻的内容
 * @param pageContent 页面内容（http响应）
 * @returns {{articleContent: jQuery, title: jQuery}}
 */
function parseArticleContent(pageContent) {
    var $ = cheerio.load(pageContent) ;

    // 获取文章的标题，并去除字符串中的空格
    const title = $('h1').text().trim() ;
    // console.log(title.trim()) ;

    // 获取文章的主体内容，并去除字符串中的空格
    const articleContent = $('.article p').text().trim() ;

    return {
        title,
        articleContent
    }
}


/**
 * 统计文章中的中文字数，英文字数，标点符号数
 * @param content 字符串形式的文章
 */
function contentCounter(content) {
    // 中文字符总数
    var chineseCharCount = 0 ;
    // 英文字符总数
    var englishCharCount = 0 ;
    var numberCount = 0 ;
    // 标点符号总是
    var punctuation = 0 ;
    for (let i = 0; i < content.length; i++) {
        // 得到每个字符的unicode编码（十进制形式），根据编码的范围来确定是什么字符
        var char = content.charCodeAt(i) ;

        if ( 19968<= char && char <= 40869) {
            // 汉字unicode编码范围是19968-40869
            chineseCharCount++ ;
        } else if ((65 <= char && char <= 90) || (97<= char && char <= 122)) {
            // 英文字母的unicode编码范围是65-90（大写），97-122（小写）
            englishCharCount++ ;
        } else if (48 <= char && char <= 57) {
            // 数字的unicode编码范围是：48-57
            numberCount++ ;
        } else {
            // 除去上述内容，剩下的编码就是标点符号（在一段文本内）
            punctuation++ ;
        }
    }

    return {
        chineseCharCount,
        englishCharCount,
        punctuation
    }
}


module.exports = getSohuArticleContent ;