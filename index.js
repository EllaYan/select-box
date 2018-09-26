
function addAction() {
  var buttons = document.getElementsByClassName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].state = false;
    buttons[i].addEventListener("click", function (e) {
      e.target.state = !e.target.state;
      if (e.target.state) {
        e.target.style = "background-color:red;color:#fff;border:none;"
      } else {
        e.target.style = "background-color:#fff;color:#ccc;border: 1px solid #ccc;"
      }
    })
  }
}

function creatSelectItem(){
  var itemList = [
    "第一个",
    "第二个",
    "第三个",
    "第四个",
    "第五个",
    "第六个",
    "第七个",
    "第八个",
    "第九个",
  ];
  var container = document.getElementById("container")
  console.log(container)
  for(let i=0;i<itemList.length;i++){
    let item = document.createElement("div");
    item.className = "button";
    item.innerText = itemList[i];
    container.append(item);
  }
}
creatSelectItem();
addAction();
