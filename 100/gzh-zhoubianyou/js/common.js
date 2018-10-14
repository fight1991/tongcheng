/**
 * Created by 高 on 2018/7/27.
 */

//热门目的地
//获取元素
var bigB=document.getElementById('bigB');
var small = document.getElementById('small');
var divs = small.getElementsByTagName('div');
var hide = document.getElementById('hide')
var dv = hide.getElementsByTagName('div');
var count=0; //用来存储大盒子下标
//循环隐藏的大盒子，给他们存一个下标
for (var i = 0; i < dv.length; i++) {
  dv[i].setAttribute('index', i);
}
//循环左边的每个div，给他们设置高亮效果，同时也给他们存一个下标
for (var i = 0; i < divs.length; i++) {
  divs[i].setAttribute('indexD', i);
  //设置鼠标移入每个div事件
  divs[i].onmouseenter = divsClick;
}
function divsClick() {
  //排他
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = '';
  }
  this.style.backgroundColor = 'white';

  index = this.getAttribute('indexD');
  //鼠标移入大盒子显示
  hide.style.display = 'block';
  dv[index].style.zIndex = count++;
}
hide.onmouseenter = function () {
  hide.style.display = 'block';
}
small.onmouseleave = function () {
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = '';
  }
  hide.style.display = 'none';
}