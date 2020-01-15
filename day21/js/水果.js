let but = document.querySelector("[type='button']");
let lis = document.querySelectorAll("li");
//动态绑定
but.addEventListener("click",add);
for(let i of lis ){
    i.setAttribute("onclick","del(this)");
}
//添加方法
function add() {
    let inp = document.getElementById("inp");
    let ul = document.querySelector("ul");
    //判断 存在就删除
    for(let i of lis ){
        if (i.innerText==inp.value){
            i.remove();
        }
    }
    //添加代码
    let li = document.createElement("li");
    let str = document.createTextNode(inp.value)
    li.setAttribute("onclick","del(this)");
    li.appendChild(str);
    ul.appendChild(li);
    inp.value="";
}
//删除
function del(node) {
   node.remove();
}



