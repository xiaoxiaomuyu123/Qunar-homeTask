/*
           从后台获取数据
       */

/* fetch('/information') 相当于请求的是 63342 端口，也就是前端的地址，但是服务器的地址的端口是 4000
   出现了跨域的问题。
   1. 在react-app中可以采用代理的方式，在package.json 文件中的最后，配置
   "proxy": "http://localhost:4000"
   2. get 方法是 jsonp
   3. 使用 cors

*/
// fetch('/info')
//     .then(function(response) {
//         return response.json() ;
//     })
//     .then(function (data) {
//         console.log('从后端获取的数据是', data);
//     })

function getData (data){
    console.log("getData", data);
    let plane = document.querySelector('.plane');
    let ret = '';
    for(let i = 0; i < data.length; i++) {
        let {startTime, startAdd, endTime, endAdd, price, kind, trend, company} = data[i];
        ret = ret +
            `<li>
                <a href="#">
                    <div class="up">
                        <div>
                            <span>${startTime}</span>
                            <span>${startAdd}</span>
                        </div>
                        <div class="arrow">
                            <div></div>
                            <span class="iconfont icon-danxiangjiantou"></span>
                        </div>
                        <div>
                            <span>${endTime}</span>
                            <span>${endAdd}</span>
                        </div>
                        <div>
                            <span class="price">${price}</span>
                            <span>${kind}</span>
                            <span class="attention">${trend}</span>
                        </div>
                    </div>
                    <div class="down">${company}</div>
                </a>
            </li>`;

    }
    plane.innerHTML = `<li></li>${ret}`;
}


