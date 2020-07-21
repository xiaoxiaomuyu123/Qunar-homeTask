const mongoose = require('mongoose') ;

mongoose.connect('mongodb://localhost:27017/article_content_info', {useNewUrlParser: true}) ;

const Schema = mongoose.Schema ;

// 定义文档结构，这个文档结构用于描述用户注册信息
var userSchema = new Schema({
    // 文章的url
    url: {
        type: String,
        required: true
    },
    // 文章标题
    title: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    // 中文字符数
    chinese: {
        type: Number,
        required: true
    },
    // 英文字符数
    english: {
        type: Number,
        required: true
    },
    // 标点符号数
    punctuation: {
        type: Number,
        required: true
    }

}) ;

// 定义model（与集合对应，可以操作集合）
// UserModel是一个构造函数
// 将文档发布为模型
var UserModel = mongoose.model('article', userSchema) ;


// 将UserModel导出
module.exports.userModel = UserModel ;
