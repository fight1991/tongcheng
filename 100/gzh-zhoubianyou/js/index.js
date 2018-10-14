  var headDatas = ['首页','酒店','机票','火车票','汽车票','景点','周边游','国内游','出境游','游轮','签证','定制游','金融','攻略','全域宁夏'];
  
  var link = {
    t0:"../../index.html",
  t1:"javaScript:;",
  t2:"javaScript:;",
  t3:"javaScript:;",
  t4:"javaScript:;",
  t5:"../ywj-jingdian/index.html",
  t6:"javaScript:;",
  t7:"javaScript:;",
  t8:"javaScript:;",
  t9:"../syj-youlun/index.html",
  t10:"../cmz-qianzheng/index.html",
  t11:"javaScript:;",
  t12:"../zw-jinfu/index.html",
  t13:"javaScript:;",
  t14:"javaScript:;",
  };
  var json ={
  t0:['出境服务','签证','全球WIFI','当地玩乐','海外门票','国际.港澳台机票','国际.港澳台酒店'],
  t1:['国内酒店','国际.港澳台酒店','民宿客栈','品牌汇'],
  t2:['国内机票','国际.港澳台机票','同程商旅'],
  t3:[],
  t4:['汽车票首页','团队包车'],
  t5:['国内景点','酒店+景点','周边跟团游','主题景点','景点活动','定制旅行','迪士尼','全域旅游'],
  t6:['酒店+景点','周边跟团游','景点','快乐大巴','房车露营','定制旅行'],
  t7:['国内游首页','国内游特卖','定制旅行','同程专线'],
  t8:['出境游首页','跟团游','自由行'],
  t9:['游轮首页','游轮特卖'],
  t10:[],
  t11:['定制旅行','大唐商旅'],
  t12:['金融首页','理财','白条'],
  t13:['攻略主页','游记'],
  t14:['全域宁夏首页','解密神奇宁夏']
  };
//头部区域开始>>>>>>>>>>>>>>>>>>>>>
(function(){
  //0.head_t 下拉菜单动态显示
  //0.1 获取元素
  var $lis = $('.head_t .banxin_right .open')
  //0.2 注册鼠标移入事件
  $lis.mouseenter(function(){
    $(this).children('div').show(50)
  })
  $lis.mouseleave(function(){
    $(this).children('div').hide(50)
  })
  //1.获取 head_b中的对象
  var ul = document.querySelector('.nav');
  var head_open = document.querySelector('.head_open')
  //2.遍历数组内容,动态创建导航栏
  headDatas.forEach(function(item,index) {
    var li = document.createElement('li');
    li.aa = 't' + index;
    ul.appendChild(li);
    var a = document.createElement('a');
    li.appendChild(a);
    //根据li的属性li.aa  来获取对象中link的地址
    a.href = link[li.aa];
    a.target = "_blank";
    //2.1给导航栏内容添加筛选下箭头
    if (index == 0 || json[li.aa].length == 0 || json[li.aa].length == 0) {
      a.innerHTML = item;
    } else {
      a.innerHTML = item + '<i class="iconfont icon-xiajiantou">';
    }

    //2.2给每个相应的li创建对应的div,但这个div是相对于nav定位的
    var div = document.createElement('div');
    li.appendChild(div);
    //2.3每个div中创建span
    var span = document.createElement('span');
    div.appendChild(span);
    span.className = li.aa;
    span.style.position = 'absolute'
    //2.4每个span中创建a标签
    for(var i = 0; i < json[li.aa].length;i++){
      var a = document.createElement('a')
      span.appendChild(a);
      a.innerHTML = json[li.aa][i];
      a.href = "javaScript:;";

    }
    //2.5设置div样式
    div.style.position = 'absolute';
    div.style.top = '46px';
    div.style.left = 0;
    //3.给每个li注册鼠标移入事件,鼠标移入div显示,离开div隐藏
    if(li.aa != 't0' && json[li.aa].length > 0){ //json中属性对应的数组不为空
      div.className = 'nav_details'//除了第一个li,其余的li类名
      li.onmouseover = function(){
        for(var i = 0;i <ul.children.length;i++){   //排它
          ul.children[i].children[1].style.height = 0;
        }
        head_open.style.display = 'block';//导航栏下方隐藏框显示
        this.children[1].style.height = '46px';
        ul.children[0].children[1].style.overflow = 'hidden'
        //3.1目标元素
        if(this.aa != 't1'){
          var target = this.children[1].children[0]
          //3.2从第2个li开始使动态生成的nav_details 根据对应的li居中显示
          //每个div的位置  = 当前li距离定位版心的距离+自身宽度的一半-div自身宽度的一半
          var current = this.offsetLeft + this.offsetWidth/2 -target.offsetWidth/2

          var posMax = 1190-target.offsetWidth;//最大位置即不能超过版心的最右边
          var posMin = 0;//最小不能超过版心的最左边

         //判断当前位置,如果在版心范围内,则cuurent
          if (current >= posMax){
           target.style.left = 1190-target.offsetWidth +'px'
          }else if(current <= posMin) {
          	target.style.left = 0 +'px'
          }else{
          	target.style.left = current +'px'
          }
        }
      }
      //4注册鼠标离开事件
      li.onmouseleave = function(){
        head_open.style.display = 'none';
        this.children[1].style.height = 0;
        ul.children[0].children[1].style.overflow = 'visible';
        ul.children[0].children[1].style.height = '40px';
      }
    }else{
      div.className = 'current'//第一个li的类名
    }
  });
})();
//头部区域结束


//右侧导航栏开始(jquery)
 $(function(){
   //获取类名为rightTab的div
   var $rightTab = $('#common-silder .rightTab')
   //给每个rightTab注册鼠标移入移出事件
   $rightTab.mouseenter(function(){
     $(this).find('span').stop().show().animate({right:40},300);
     $(this).find('i').stop().show().animate({right:28},300);
   });
   $rightTab.mouseleave(function(){
     $(this).find('span').stop().hide().animate({right:100},300)
     $(this).find('i').stop().hide().animate({right:60},300);
   })
   //页面滚动事件
   window.onscroll = function(){
     var last = document.querySelector('#last')
     if(window.pageYOffset >= 120){
       last.style.display = 'block'
     }else{
       last.style.display = 'none'
     }
   }

 })
//右侧导航栏区域结束(jquery)


////底部区域开始
//
////热点推荐：
//str1 = '迪拜旅游 泰国旅游 巴厘岛旅游 普吉岛旅游 柬埔寨旅游 日本旅游 斯里兰卡旅游 泰国六日游 长滩岛旅游 马尔代夫旅游 越南旅游 夏威夷旅游 塞班岛旅游 新西兰旅游 欧洲旅游'
////友情链接：
// str2 ='QQ钱包 TripAdvisor 户外运动 地图查找 百度旅游 欣欣旅游网 艺龙旅游指南 米胖网 长岛旅游 五分旅游网 驴妈妈旅游网 劲旅网 天气网 北京中国国旅 九游网 中国签证资讯网 游多多自助游 火车网 穷游网 旅游新媒体 中国经济网 酒店预订 邮编生活网 机票查询 客运站 旅游度假 中国地图 悠哉旅游网 蚂蜂窝旅游攻略 绿野户外网 酷讯旅游网 春秋旅游 侠侣周边游 携程旅游社区 高德地图 上海房地产 百旅会 相约久久旅游网 网易严选'
//var arr1 = str1.split(' ');
//var arr2 = str2.split(' ');
////console.log(arr1)
////获取元素
//var $upRight = $('.footer #up .right')
//var $downRight = $('.footer #down .right')
////给上面的热点推荐设置内容
//for(var i = 0;i<arr1.length;i++){
//  var text = arr1[i]
//  var $aT = $('<a href="#">'+text+'</a>');
//  $aT.appendTo($upRight);
//}
////给下面的热点推荐设置内容
//for(var i = 0;i<arr2.length;i++){
//  var text = arr2[i]
//  var $aT = $('<a href="#">'+text+'</a>');
//  $aT.appendTo($downRight);
//}
////给下箭头注册点击事件,点击显示下拉框隐藏
//var $downArrow = $('.footer .hotSuggest .downArrow');
//$downArrow.click(function(){
//  var $H = $downRight.height();
//  console.log($H)
//  if($H == 22){
//    $downRight.css('height','auto');
//  }else{
//    $downRight.css('height',22);
//  }
//})
////底部区域结束



