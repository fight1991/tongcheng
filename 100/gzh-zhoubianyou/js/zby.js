//热门目的地

//    var big=document.getElementById("big");
var small = document.getElementById("small");
var divs = small.getElementsByTagName("div");
var lis = document.getElementsByTagName("li");
//注册鼠标移入事件
for (var i = 0; i < divs.length; i++) {
  divs[i].onmouseenter = function () {
    this.style.backgroundColor = "yellow";

  }
  divs[i].onmouseleave = function () {
    this.style.backgroundColor = "#475764";
  }
}


// 热卖秒杀 倒计时
//先获取元素
var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');

fn();
setInterval(fn, 1000);
function fn() {
//获取当前时间
  var now = +new Date();
//获取目标时间
  var target = +new Date("2018-9-30");
  //console.log(target);
//计算时间差
  var times = target - now;
//毫秒转为秒
  times /= 1000;
//计算具体相差的时间
  var hourT = Math.floor(times / 60 / 60 % 24);
  var minuteT = Math.floor(times / 60 % 60);
  var secondT = Math.floor(times % 60);
//给具体的span赋值
  hour.innerText = hourT;
  minute.innerText = minuteT;
  second.innerText = secondT;
}