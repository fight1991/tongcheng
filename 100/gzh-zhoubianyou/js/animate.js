/**
 * Created by 高 on 2018/7/25.
 */


//先获取元素
var right = document.getElementById('right');
var left = document.getElementById('left');
var ba = document.getElementById('ba');
var ul = ba.getElementsByTagName('ul')[0];
var ol = ba.getElementsByTagName('ol')[0];
var lis = ul.children;
var indexGlobal = 0;
//1根据ul中li创建动态数字按钮
for (var i = 0; i < lis.length; i++) {
  var li = document.createElement('li');

  li.innerText = i + 1;
  ol.appendChild(li);
  //1.1 默认第一个数字按钮高亮，判断i下标为0时，按钮1 高亮
  if (i == 0) {
    li.className = 'current';
  }
  //1.2因为每个数字按钮li都有点击事件，注册点击事件
  li.onclick = numBtnClick;
  //1.4 给每个li存一个下标
  li.setAttribute('index', i)

}
//2 偷偷克隆第一张图片添加到ul里面，放在动态创建数字按钮后面
var newli = lis[0].cloneNode(true); //传true时，克隆所有内容
ul.appendChild(newli);
function numBtnClick() {
  //1.3当点击数字按钮的时候显示对应的图片。并且对应的数字按钮高亮
  // 因为不知道数字按钮对应的是哪一张图片，所以先给每个li存一个下标
  //显示第一张图片时，ul的左偏移量是0 相当于当前图片的下标*图片的宽度
  //显示第二张图片时，ul的左偏移量是一张图片的宽度 500
  //显示第三张图片时，ul的左偏移量是两张图片的宽度 1000
  //显示第四张图片时，ul的左偏移量是三张图片的宽度 1500
  //显示第五张图片时，ul的左偏移量是四张图片的宽度 2000
  //ul的位置=图片的下标*图片的宽度，，因为点击按钮要显示对应的 图片，所以图片的下标和按钮的下标是一样的,图片的宽度和box的是一样的
  var target = this.getAttribute('index') * ba.offsetWidth;
  animate(-target, 8, ul);//调用封装好的函数，实现图片缓慢移动的效果
  // 2 由于点击数字按钮的时候，图片下标也跟着相应改变，所以在这里先存一个图片的下标
  indexGlobal = this.getAttribute('index');// （上面已经用过了）
  //1.6 排他
  for (var i = 0; i < ol.children.length; i++) {
    ol.children[i].className = '';
  }
  //1.5 当点击按钮时，对应的按钮高亮
  this.className = 'current';
}
//2 注册点击右按钮事件，当图片滚动到第六张的时候，直接跳到第一张
right.onclick = function () {
  //2.1 判断当前图片是不是最后一张,数字按钮长度减1 刚好是最后一张图片的下标
  if (indexGlobal == ol.children.length - 1) {
    indexGlobal++;//因为当前的下标是第五张图片的下标，所以要跳到下一张就++
//        2.2 由此计算当前ul的位置
    var target = -indexGlobal * ba.offsetWidth;
    //2.3 调用anmiate函数，让图片自己动起来
    animate(target, 8, ul, function () {
      //2.4 直接调回第一张图片，第一张图片下标是0 ，ul和box的偏移量也是0，所以直接给图片下标赋值，给ul赋值
      ul.style.left = '0px';

    })
    indexGlobal = 0;
    for (var i = 0; i < ol.children.length; i++) {
      ol.children[i].className = '';
    }
    ol.children[0].className = 'current';
  } else {
    indexGlobal++;
    ol.children[indexGlobal].onclick();
  }

}

//3 当鼠标移入时，自动轮播停止
ba.onmouseenter = function () {
  clearInterval(timeid);
}
//3.1  当鼠标移出时，开始轮播
ba.onmouseleave = function () {
  timeid = setInterval(function () {
    right.onclick();
  }, 3000)

}
//2 自动轮播
var timeid = setInterval(function () {
  right.onclick();
}, 3000)


function animate(target, step, element, fn) {
  if (element.timeid) {
    clearInterval(element.timeid);
  }
  element.timeid = setInterval(function () {
    //1.获取当前的位置
    var current = element.offsetLeft;
//      2. 判断box是否到达目标位置
    //由于从左往右和从右往左都要实现,判断你的依据需要修改一下
//        如果目标位置- 当前位置得到的差值 < 每一次走的步数,我们就认为马上要到达了,所以就直接把目标位置赋值为元素
//          Math.abs(target - current)   <=   step
    if (Math.abs(target - current) <= step) {
      element.style.left = target + 'px';
      clearInterval(element.timeid);
//        animate(0,7,box);
//        在这里证明已经到达了目标位置,执行下一个逻辑,但是不能把下一个逻辑的代码直接写在这里
      if (fn) {
        fn();
      }
      return;
    }
//      3. 如果没有到达,减去几个像素
//        var target = current - step;
    if (target > current) {
      var pos = current + step;
    } else {
      var pos = current - step;
    }
//        4. 让box移动起来
    element.style.left = pos + 'px';

  }, 15);
}


