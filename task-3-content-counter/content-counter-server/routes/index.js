var express = require('express');
var router = express.Router();

var getSohuArticleContent = require('../get-article-content/article-content-counter') ;

var {userModel} = require('../db/article-content-info')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/article', function(req, res, next) {
  // 获取查询参数
  const {url} = req.query ;

  console.log('url', url) ;

  try {
    // 首先进行查询数据操作，数据库中没有，再进行发起请求
    userModel.findOne({url}, function(err, ret) {
      if (err) {
        console.log(err) ;
        return res.status(501).json({
          code: 1,
          msg: '数据库查询异常'
        })

      }

      console.log('数据库查询结果', ret) ;

      if (!ret) {

        // 不存在这篇文章的信息，调用getSohuArticleContent()这个函数爬取文章信息，并传入一个回调函数，用于处理staticInfo, title
        // 也就是作为响应，返回给浏览器
        getSohuArticleContent(url, (staticInfo, title) => {
          let {chineseCharCount, englishCharCount, punctuation} = staticInfo ;
          // 文章总字数
          let total = chineseCharCount + englishCharCount + punctuation ;

          res.status(200).json({
            code: 0,
            data: {
              url,
              title,
              total,
              chinese: chineseCharCount,
              english: englishCharCount,
              punctuation
            }
          })

        })
      } else {
        // 存在文章信息，直接从数据库返回的结果中获取
        let {chinese, english, punctuation, url, title, total} = ret ;
        // 返回响应
        res.status(200).json({
          code: 0,
          data: {
            url,
            title,
            total,
            chinese,
            english,
            punctuation
          }
        })
      }

    })
    // 进行爬取文章操作


  } catch (err) {
    console.log('出错了', err) ;
  }


});

module.exports = router;
