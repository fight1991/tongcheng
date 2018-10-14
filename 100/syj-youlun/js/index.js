/* banner轮播图区域 */
(function () {
  //  鼠标移入box,展示箭头
    $(".silder .box").mouseenter(function(){
      $(".silder .aside>span").css("display","block")
    })
  // 鼠标移出box,不显示箭头
  $(".silder .box").mouseleave(function(){
      $(".silder .aside>span").css("display","none")
  })
  //  鼠标移至小圆点展示对应的图片
  var indexGlobal = 0;
  $(".silder .box .mslider a").mouseenter(function () {
    var index = $(this).index()
    $(".silder .banner li").eq(index).css("z-index", "3");
    $(".silder .banner li").eq(index).siblings().css("z-index", "1")
    indexGlobal = $(this).index();
    $(this).css("border-color", "orange").siblings().css("border-color", "white");
  })

  // 添加index自定义属性
  for (var i = 0; i < $(".silder .banner li").length; i++) {
    $(".silder .banner li").eq(i).attr("index", i)
  }
  // 点击左箭头向做移动
  $(".silder .aside .right").click(function () {
    fn2();
  });
  function fn2() {
    if (indexGlobal == 3) {
      indexGlobal = -1;
    }
    indexGlobal++;
    $(".silder .banner li").eq(indexGlobal).css("z-index", "3");
    $(".silder .banner li").eq(indexGlobal).siblings().css("z-index", "1");
    $(".silder .box .mslider a").eq(indexGlobal).css("border-color", "orange").siblings().css("border-color", "white");
  }
  // 点击右箭头向做移动
  $(".silder .aside .left").click(function () {
    fn();
  });
  var fn = function () {
    if (indexGlobal == -1) {
      indexGlobal = 3;
    }
    indexGlobal--;
    $(".silder .banner li").eq(indexGlobal).css("z-index", "3");
    $(".silder .banner li").eq(indexGlobal).siblings().css("z-index", "1");
    $(".silder .box .mslider a").eq(indexGlobal).css("border-color", "orange").siblings().css("border-color", "white");
  }
  //鼠标移至小圆点放大
  $(".mslider").mouseenter(function(){
    $(".mslider a").css({
      "width":"20px",
      "height":"20px"
    })
  })
  //鼠标离开小圆点缩小
  $(".mslider").mouseleave(function(){
    $(".mslider a").css({
      "width":"16px",
      "height":"16px"
    })
  })
  // 设置自动轮播
  var timeId = setInterval(fn2, 2500);
  // 鼠标移入aside展示对应的部分
  $(".silder .aside li").mouseenter(function(){
    $(this).children(".hide").css("display","block")
  })
  // 鼠标移出aside隐藏对应的部分
  $(".silder .aside li").mouseleave(function(){
    $(this).children(".hide").css("display","none")
  })
})()


/* 邮轮特卖 */

fn1();
setInterval(fn1, 1000);
function fn1() {
  var now = +new Date();
  var target = +new Date('2018-8-8')
  //计算出相差的时间值,并换算成秒
  var time = (target - now) / 1000;
  //小于10的时候显示两位数
  var hour = Math.floor(time / 60 / 60) < 10 ? "0" + Math.floor(time / 60 / 60) : Math.floor(time / 60 / 60)
  var minute = Math.floor(time / 60 % 60) < 10 ? "0" + Math.floor(time / 60 % 60) : Math.floor(time / 60 % 60)
  var second = Math.floor(time % 60) < 10 ? "0" + Math.floor(time % 60) : Math.floor(time % 60)
  //给对应元素的text赋值
  $(".salewrapper .time .hour").text(hour);
  $(".salewrapper .time .minute").text(minute);
  $(".salewrapper .time .second").text(second);
}

/*邮轮日历*/
$(".calender .month li").mouseenter(function () {
  for (var a = 0; a < $(".calender .month li").length; a++) {
    $(".calender .month li").eq(a).css("border-color", "#cccccca6");
  }
  $(this).css("border-color", "orange");
  $(".calender .month li").children(".box").css("display","none")
  $(this).children(".box").css("display","block")
})
$(".calender .detail .main").mouseleave(function(){
  $(".calender .month li").children(".box").css("display","none");
  $(".calender .month li").css("border-color", "#cccccca6");
})




/* 邮轮品牌馆*/
$(".brands .detail a:nth-child(3n)").css("margin", "0")

/* 同程邮轮+*/
// 点击右箭头向左滑动
$(".cruise .wrapper .right").click(function () {
  $(".cruise .wrapper ul").animate({ left: '-1207px' }, "slow")
})
// 点击左箭头向右滑动
$(".cruise .wrapper .left").click(function () {
  $(".cruise .wrapper ul").animate({ left: '18px' }, "slow")
})
