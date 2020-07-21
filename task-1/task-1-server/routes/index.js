var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// 注册路由，用来获取航班信息
router.get('/info', function(req, res) {
    /**
      1.获取请求参数
      2.处理
      3.返回相应数据
     */
    // 这里直接返回相应的航班信息数据

    const {callback} = req.query;
    let info_plane = [
          {
               'startTime': '06:35',
               'startAdd': '首都T3',
               'endTime': '08:50',
               'endAdd': '虹桥T2',
               'price': '￥111',
               'kind': '经济舱3.9折',
               'trend': '持续涨价中',
               'company': '吉祥航HO1252&nbsp;&nbsp;空客321（中）'
          },
          {
              'startTime': '06:35',
              'startAdd': '首都T3',
              'endTime': '08:50',
              'endAdd': '虹桥T2',
              'price': '￥111',
              'kind': '经济舱3.9折',
              'trend': '持续涨价中',
              'company': '吉祥航HO1252&nbsp;&nbsp;空客321（中）'
          },
        {
            'startTime': '06:35',
            'startAdd': '首都T3',
            'endTime': '08:50',
            'endAdd': '虹桥T2',
            'price': '￥111',
            'kind': '经济舱3.9折',
            'trend': '持续涨价中',
            'company': '吉祥航HO1252&nbsp;&nbsp;空客321（中）'
        },
        {
            'startTime': '06:35',
            'startAdd': '首都T3',
            'endTime': '08:50',
            'endAdd': '虹桥T2',
            'price': '￥111',
            'kind': '经济舱3.9折',
            'trend': '持续涨价中',
            'company': '吉祥航HO1252&nbsp;&nbsp;空客321（中）'
        },
        {
            'startTime': '06:35',
            'startAdd': '首都T3',
            'endTime': '08:50',
            'endAdd': '虹桥T2',
            'price': '￥111',
            'kind': '经济舱3.9折',
            'trend': '持续涨价中',
            'company': '吉祥航HO1252&nbsp;&nbsp;空客321（中）'
        },
        {
            'startTime': '06:35',
            'startAdd': '首都T3',
            'endTime': '08:50',
            'endAdd': '虹桥T2',
            'price': '￥111',
            'kind': '经济舱3.9折',
            'trend': '持续涨价中',
            'company': '吉祥航HO1252&nbsp;&nbsp;空客321（中）'
        },
        {
            'startTime': '06:35',
            'startAdd': '首都T3',
            'endTime': '08:50',
            'endAdd': '虹桥T2',
            'price': '￥111',
            'kind': '经济舱3.9折',
            'trend': '持续涨价中',
            'company': '吉祥航HO1252&nbsp;&nbsp;空客321（中）'
        },
        {
            'startTime': '06:35',
            'startAdd': '首都T3',
            'endTime': '08:50',
            'endAdd': '虹桥T2',
            'price': '￥111',
            'kind': '经济舱3.9折',
            'trend': '持续涨价中',
            'company': '吉祥航HO1252&nbsp;&nbsp;空客321（中）'
        },
        {
            'startTime': '06:35',
            'startAdd': '首都T3',
            'endTime': '08:50',
            'endAdd': '虹桥T2',
            'price': '￥111',
            'kind': '经济舱3.9折',
            'trend': '持续涨价中',
            'company': '吉祥航HO1252&nbsp;&nbsp;空客321（中）'
        },
    ];

    const ret = JSON.stringify(info_plane);
    res.send(`${callback}(${ret})`);
})


module.exports = router;
