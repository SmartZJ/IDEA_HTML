var imgs = document.querySelectorAll("img");
var as = document.querySelectorAll("a");
var num = 0;
var timer;
as.forEach(function (item) {
    item.addEventListener("click",function () {
        changeImg(this);
    })
})
document.querySelector("div").addEventListener("mouseover",stop);
document.querySelector("div").addEventListener("mouseout",start);
//启动轮播
start();
function start() {
    timer = setInterval(function () {
        //设置正在显示的图片和a标签
        imgs[num].setAttribute("style","z-index:0");
        as[num].setAttribute("style","background: #fff");
        //判断num是否为4  等于4的时候归零否则自增
        num = num==4?0:++num;
        //设置新的图片和a标签
        imgs[num].setAttribute("style","z-index:9");
        as[num].setAttribute("style","background: #ff5000");
    },2000);
}

function stop() {
    clearInterval(timer);
}

function changeImg(nnum) {
    imgs[num].setAttribute("style","z-index:0");
    as[num].setAttribute("style","background: #fff");
    //获取节点的文本元素转为num 再根据num设置相应的图片和a标签
    num=parseInt(nnum.innerText);
    imgs[num].setAttribute("style","z-index:9");
    as[num].setAttribute("style","background: #ff5000");
}