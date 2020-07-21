/* 实现滚动页面，nav 和 footer 消失，停止滚动时，nav 和 footer 出现的功能 */
let t1 = 0;
let t2 = 0;
var timer = null; // 定时器
let nav = document.querySelector('nav');
let footer = document.querySelector('footer');
let plane = document.querySelector('.plane');
function handleScroll(event) {
    console.log("进入 handleScroll")
    clearTimeout(timer);

    if(!nav.classList.contains('disappear')) {
        nav.classList.add('disappear');
        footer.classList.add('disappear')
    }
    t1 = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(t1) ;
    timer = setTimeout(() => {
        isScrollEnd() ;
    }, 1);
}
plane.addEventListener('scroll', handleScroll) ;
// document.onscroll =  handleScroll ;

function isScrollEnd() {
    console.log('执行 isScrollEnd') ;
    t2 = document.documentElement.scrollTop || document.body.scrollTop;
    if(t2 === t1){
        nav.classList.remove('disappear');
        nav.classList.add('appear')
        footer.classList.remove('disappear');
        footer.classList.add('appear');
    }
    // console.log(t1, t2) ;
}
