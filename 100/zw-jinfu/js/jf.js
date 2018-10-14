var borderDrop = document.getElementById("borderDrop");
var hotlineDropbox = document.getElementById("hotlineDropbox");

borderDrop.onmouseenter = function () {
    // alert("hha ")
    hotlineDropbox.style.display = "block";
    borderDrop.className = "borderDrop";
    borderDrop.style.borderColor = "#999";
    $(this).children(".hotline-arrow").removeClass("iconfont icon-xiajiantou");
    $(this).children(".hotline-arrow").addClass("iconfont icon-shang")

};
$(".hotline-wrapper").onmouseleave = function () {
    // alert('hh')
    hotlineDropbox.style.display = "none";
    borderDrop.className = "";
    borderDrop.style.borderColor = "transparent";
    $(this).find(".hotline-arrow").removeClass("iconfont icon-shang");
    $(this).find(".hotline-arrow").addClass("iconfont icon-xiajiantou");
    
}
var wcat = document.getElementById("wcat");
var wcatWrapper = document.querySelector('.wcat-wrapper')
wcat.onmouseenter = function () {
    $(this).children(".hotline-arrow").removeClass("iconfont icon-xiajiantou");
    $(this).children(".hotline-arrow").addClass("iconfont icon-shang")
    // alert("hha ")
    wcat.style.borderColor = "#999";
    var div = document.createElement("div");
    //    var wcatWrapper=document.querySelector('.wcat-wrapper')
    div.className = "wcat-drop";
    wcatWrapper.appendChild(div)
    div.innerHTML = `<div class="weixin">
  
   <img src="images/wx-7d84af49b4.jpg" alt="">
   <br>
   <span>微信公众号</span> <br>
   <i class="m-color">tongchengjinfu</i>
</div>
<div class="weibo">
    <img src="images/wb-a8fb9ff9db.png" alt=""> <br>
   <span>官方微博</span> <br>
   <i class="m-color"> 参与互动有好礼</i>
</div>`
   
   
};
wcatWrapper.onmouseleave = function () {
    // alert('hh')
    this.removeChild(this.lastElementChild)
    wcat.style.borderColor = "transparent";
    $(this).find("span.hotline-arrow").removeClass("iconfont icon-shang");
    $(this).find("span.hotline-arrow").addClass("iconfont icon-xiajiantou");
}
var controlsIcon = document.querySelector(".controls-icon");
var videoBox = document.querySelector(".video-box");
controlsIcon.onclick = function () {
    videoBox.style.display = 'block';
    


}
// 视频盒子关闭---不会自动播放
window.onload = function () {
    $("video")[0].play();
}
$(function () {
    $(".close-icon").click(function () {

        $(".video-box").get(0).style.display = 'none';
        $("video")[0].pause();
    })
    // 理财右侧title
    $(".title-item span").mouseenter(function () {
        $(this).addClass("span-current").parent().siblings().find("span").removeClass("span-current")
    })

})

// <!-- 理财模块右侧 -->
//鼠标移入二维码图标,让盒子滑动
$(".terminal .erw-warp").mouseenter(function () {
    $(".last-box").show();
    $(".last-box").stop().animate({ left: 0, }, 500);
    $(".erw-warp").stop().animate({ left: -38, }, 500);
    // alert("hhah ")
})
$(".last-box").mouseleave(function () {
    $(".last-box").stop().animate({ left: 241, }, 500,function(){
        $(this).hide()
    });
    $(".erw-warp").stop().animate({ left: 203, }, 500);
})
var $titleLis = $(".title-item li");
var $slideLis = $(".slide-item>li");
$(".title-item li").click(function () {

    var dex = $(this).index();
    console.log(dex)
    console.log($slideLis)
    $slideLis.eq(dex).stop().slideDown(800).siblings().fadeOut(800)
    // alert("hh")

})
// <!-- 保险模块 -->
// 右侧图片区

$(".cover-item").mouseenter(function(){
    $(this).stop().animate({
        top:0
    },200)
})
$(".box1 ").mouseleave(function(){
    console.log( $(this).children())
    $(this).children().stop().animate({
        top:124
    },200)
})
var $lisInsure=$(".insurance-r>.title-item>li")
var $lisSlide=$(".slide-insurance>li")
$lisInsure.click(function(){
    console.log($lisSlide.eq(dex))
 var dex=$(this).index();
 $lisSlide.eq(dex).fadeIn().siblings().fadeOut()
//  alert("hh")
})
$("#loan-right").css({"backgroundColor":"transparent",
"backgroundImage":"url()"})