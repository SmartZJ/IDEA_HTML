//获取常用节点
var allcheck = document.getElementById("allcheck");
var addb = document.getElementById("addb");
var delb = document.getElementById("delb");
var table = document.querySelector("table");
//动态绑定
addb.addEventListener("click",add);
delb.addEventListener("click",del);
allcheck.addEventListener("click",allCheck);

//添加方法
function  add(){
    //创建新的子节点
    let ntr = document.createElement("tr");
    let ntd = document.createElement("td");
    let ninp = document.createElement("input");
    //添加复选框
    ninp.checked = true;
    ninp.setAttribute("type","checkbox");
    ninp.setAttribute("onclick","changeType(this)");

    ntd.appendChild(ninp);
    ntr.appendChild(ntd);
    for (let i=0;i<3;i++){
        ntd = document.createElement("td");
        ninp = document.createElement("input");
        ninp.setAttribute("type","text");
        ntd.appendChild(ninp);
        ntr.appendChild(ntd);
    }
    table.appendChild(ntr);
}
//删除方法
function del() {
    allcheck.checked = false;
    let cks = document.querySelectorAll(":checked");
    for (let i=0;i<cks.length;i++){
        cks[i].parentElement.parentElement.remove();
    }

}
//内容更改
function changeType(node) {
    //childrenNodes和children区别
    // let tds = node.parentElement.parentElement.childNodes;
    let tds = node.parentNode.parentNode.children;
    for (let i = 1;i<tds.length;i++){
        if (node.checked){
            let str = tds[i].innerText;
            let inp = document.createElement("input");
            inp.setAttribute("type","text");
            inp.value = str;
            tds[i].innerText = "";
            tds[i].appendChild(inp);
        }else {
            let str = tds[i].firstChild.value;
            tds[i].innerText = str;
        }
    }
}
//全选
function allCheck() {
    let cks = document.querySelectorAll("[type = 'checkbox']");
    for (let i=0;i<cks.length;i++){
         cks[i].checked = allcheck.checked;
    }

}