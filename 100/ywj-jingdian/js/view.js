// 引入盒子移动js文件

// 景点搜索模块
// 头部轮播图 jQuery

$(function () {
  // 1.获取每个轮播图的li标签
  // 2.动态创建按钮li,有多少张图就创建多少个li,添加到ol下
  // 3.当鼠标移入ol下的哪个li,对应的下标的轮播图展现出来
  //4 让图片自动轮播
  var $pic_lis = $('#head_banner ul li');
  var $ol = $('#head_banner ol')
  var indexGloabal = 0;  //用来存储当前展示图片的下标

  for(i = 0; i < $pic_lis.length; i++) {
    $ol.append($('<li></li>'));
  }
  // 让ol元素居中
  // 获取ol的宽度
  var width = $ol.outerWidth();
  $ol.css('marginLeft',-width/2);
  // 3.当鼠标移入ol下的哪个li,对应的下标的轮播图展现出来
  // 并且移入时,让当前li高亮 
  // 获取ol下的li
  var $ol_li = $('#head_banner ol li');
  $ol_li.mouseenter(function () {
     $(this).css('backgroundColor','#ffa63c').siblings().css('backgroundColor','#fff');

    //  获取当前元素的下标
    var idx = $(this).index();
    // 展示对应下标的图片,淡入 fadeIn
    $pic_lis.eq(idx).stop(false,true).fadeIn().siblings().stop(false,true).fadeOut();

    indexGloabal = idx;

  })

  //4 让图片自动轮播
  // 首先要获取当前展示图片的下标  indexGloabal
  setInterval(function () {
    // 判断当前展示图片如果是最后一张,自动跳到第一张 
    if(indexGloabal === $pic_lis.length - 1) {
      indexGloabal = -1;
    }
    indexGloabal ++;
    $pic_lis.eq(indexGloabal).stop(false,true).fadeIn().stop(false,true).siblings().fadeOut();
    // 让对应的$ol_li下标高亮显示
    $ol_li.eq(indexGloabal).css('backgroundColor','#ffa63c').siblings().css('backgroundColor','#fff');
  },2500)
})




// 景点搜索模块
// 头部轮播图 原生js

// $(function () {
//   //1 获取元素
//   var head_banner = document.getElementById('head_banner');
//   var ulHeadBanner = document.querySelectorAll('ul')[0];
//   var lisHeadBanner = head_banner.querySelectorAll('li');
//   var olHeadBanner = head_banner.querySelector('ol');
//   var indexGlobal = 0;
//   // 2 动态创建按钮,有多少个li就创建多少个按钮 
//   // 2.1 遍历轮播图
//   for (i = 0; i < lisHeadBanner.length; i++) {
//     // 给每个li定宽
//     lisHeadBanner[i].style.width = document.body.offsetWidth + 'px';
//     // 2.2 创建li
//     var li = document.createElement('li');
//     // 标记li
//     li.setAttribute('index', i);
//     //2.3 把li添加到页面上
//     olHeadBanner.appendChild(li);
//     // 2.4 给li添加样式
//     // 设置ol的宽 根据图片的张数来定宽
//     var long = lisHeadBanner.length * 18;
//     olHeadBanner.style.width = long + 'px';
//     // 设置ol的位置,使ol居中
//     olHeadBanner.style.marginLeft = -long / 2 + 'px';
//     //2.5 默认第一个按钮高亮
//     if (i == 0) {
//       li.style.backgroundColor = '#ffa63c';
//     }

//     //2.6 给每一个按钮注册鼠标移入事件
//     li.onmouseenter = lisHeadEnter;

//   }

//   // 鼠标移入li时调用的函数
//   function lisHeadEnter() {
//     //1 鼠标移入哪个li,就显示对应那张图片
//     // console.log(this);
//     // 获取当前按钮的下标,与图片下标相同
//     var index = this.getAttribute('index', i);
//     // console.log(index);
//     // 跳转到对应的图片 移动ul 图片的下标 * 盒子宽度
//     ulHeadBanner.style.left = -index * head_banner.offsetWidth + 'px';

//     indexGlobal = index;

//     // 移入变色,排他
//     for (i = 0; i < olHeadBanner.children.length; i++) {
//       olHeadBanner.children[i].style.backgroundColor = '';
//     }
//     this.style.backgroundColor = '#ffa63c';

//   }

//   // 3 让轮播图自动跳转  添加定时器
//   setInterval(function () {
//     // 判断如果当前图片是最后一张,则indexGlobal为0
//     if (indexGlobal == lisHeadBanner.length - 1) {
//       indexGlobal = -1;
//     }

//     // 判断当前展示的是第几张图 从跳到下一张图片
//     indexGlobal++;

//     ulHeadBanner.style.left = -indexGlobal * head_banner.offsetWidth + 'px';


//     for (i = 0; i < olHeadBanner.children.length; i++) {
//       olHeadBanner.children[i].style.backgroundColor = '';
//     }
//     olHeadBanner.children[indexGlobal].style.backgroundColor = '#ffa63c';


//   }, 2500);
// });


// 开头列表导航模块
// 需求,鼠标移入展示模块,鼠标移出隐藏模块

// 1.获取元素
$(function () {
  var $lis = $('#list-nav li.hover');
  // console.log($hoverShows);
  // 给li标签注册鼠标移入事件
  $lis.mouseenter(function () {
    $(this).children('.hoverShow').css('display', 'block');
    $(this).find('.show h3').css('color', '#333');
    $(this).find('.show .linkPannel a').css('color', '#333');

  });
  // 给li标签注册鼠标移出事件
  $lis.mouseleave(function () {
    $(this).children('.hoverShow').css('display', 'none');
    $(this).find('.show h3').css('color', '#fff');
    $(this).find('.show .linkPannel a').css('color', '#fff');
  });
});

// 开头图片导航模块

$(function () {
  // 获取a标签
  var $links = $('.picture-nav a');
  // 给每一个a注册鼠标移入事件  移入时图片缓慢变小
  $($links).mouseenter(function () {
    $(this).css('transform', 'scale(0.95)')
  });
  // 给每一个a注册鼠标移出事件  移开时图片缓慢变回原样
  $($links).mouseleave(function () {
    $(this).css('transform', 'scale(1)')
  });

});

// 侧边栏模块1

$(function () {
  //  需求 :
  //  1  鼠标移入背景高亮显示,字体变成白色,并展开隐藏栏,移开恢复  
  // 2 给猜你喜欢注册点击事件,点击时,侧边栏向左展开

  //1  获取元素
  var $asideIconfonts = $('.view-aside .asideIconfonts');
  // var $spans = $asideIconfonts.find('span');
  // console.log($asideIconfonts);
  // 给元素注册鼠标移入事件
  $asideIconfonts.mouseenter(function () {
    $(this).css('backgroundColor', '#FF6600').css('color', '#fff').find('i').css('color', '#fff');
    $(this).find('.box_visi').stop(true).fadeIn().animate({right : 40});
    // console.log($(this).find('.box_visi').animate({
    //   margin: 0,
    // })
    // );

  });

  //2  给元素注册鼠标移出事件
  $asideIconfonts.mouseleave(function () {
    $(this).css('backgroundColor', '#333').css('color', '#acacac').find('i').css('color', '#acacac');
    $(this).find('.box_visi').stop(true).fadeOut().animate({right : 60});
  });

  // 给猜你喜欢注册事件
  var $aside_interest = $('.view-aside .aside-interest');
  // console.log($aside_interest);
  $aside_interest.click(function () {
    // $(this).children('.rightHidden').slideLeft();

  });

  // 需求: 点击猜你喜欢,缓慢移出菜单栏

  // 获取元素 

  var $aside_interest = $('.view-aside .aside-interest');
  var $thumb = $('.view-aside .thumb');
  // console.log($hide_div1.eq(0).siblings('a#hide_div1'));
  var $thumb = $('.view-aside .thumb')
  var $hid_icon = $('.view-aside .hide_icon');   
    // var idx = $(this).index();//获取的是在所有兄弟元素中的下标 ,因此此方法不行
 // 给猜你喜欢元素注册鼠标点击事件
   $aside_interest.click(function () {
    $('.view-aside').animate({ right: 230, });
    // $(this).siblings('.interest_hid').show(2000).siblings('.thumb_hid').show(2000);
    $(this).siblings('.interest_hid').animate({ right: 0,}).siblings('.thumb_hid').animate({right : -230});
   })   
  
  // // 点击图标隐藏
  $hid_icon.click(function () {
    $('.view-aside').animate({ right: 0, })
    $('.view-aside .interest_hid').animate({ right: -230, }).siblings('.thumb_hid').animate({ right: -230, });
  })

  // 精彩活动注册鼠标点击事件
    $thumb.click(function () {
    //  使用自定义动画让元素移动起来
    $('.view-aside').animate({ right: 230, });
    $(this).siblings('.thumb_hid').animate({ right: 0,}).siblings('.interest_hid').animate({right : -230});
  })
 

  // 给close注册事件  点击侧边栏隐藏
  $('.view-aside .close').click(function () {
     $('.view-aside').css('display','none');
  })

});


// 侧边栏模块2

$(function () {
  var $appxbHead = $('.view-aside-appxb .appxb-head');
  // var $appxb_con = $('.view-aside-appxb .appxb-con');
  // var $warp_close =  $('.view-aside-appxb .appxb-con .warp_close i');
  // console.log($warp_close);
  
  //  console.log($appxbHead);
  $appxbHead.click(function () {
    $appxbHead.animate({left : -150},function () {
      // $appxb_con.animate({left : 0},700);
    });
    
  });


  // 给warp-close注册点击事件,点击关闭,appxbHead移动显示出来
  // $warp_close.click(function () {
  //   console.log(11111);
    
    // $appxb_con.animate({left : '-100%'},function () {
    //   $appxbHead.animate({left : 0});
    // })
    
  
});




// 热门主题模块

$(function () {
  // 需求 : 鼠标移入图片放大
  var search_theme = document.getElementById('search-theme');
  var lisTheme = search_theme.querySelectorAll('li');
  var imgs = search_theme.querySelectorAll('img');

  // 遍历li.
  for (i = 0; i < lisTheme.length; i++) {
    // 给元素存储下标
    lisTheme[i].setAttribute('index', i);

    // 给li注册鼠标移入事件 移入时缓慢放大
    lisTheme[i].onmouseenter = function () {
      // 获取对应元素的下标
      var index = this.getAttribute('index');
      //  给img添加样式,放大
      imgs[index].style.transform = 'scale(1.3)'

    }
    // 给li注册鼠标移出事件
    lisTheme[i].onmouseleave = function () {
      var index = this.getAttribute('index');
      imgs[index].style.transform = 'scale(1)'
    }
  }
});




// 促销爆品模块
// 需求 : 动态缓慢上移说明盒子

var salesPromotionBar = document.getElementById('salesPromotionBar');
var salesLis = salesPromotionBar.querySelectorAll('li');

for (i = 0; i < salesLis.length; i++) {
  salesLis[i].onmouseenter = function () {
    var viewName = this.querySelectorAll('div')[0];
    // console.log(viewName);
    // console.log(viewName.offsetTop);
    // var current = viewName.offsetTop;
    // viewName.style.top = '114px'
    animate(viewName, 114, 3);
  }
  salesLis[i].onmouseleave = function () {
    var viewName = this.querySelectorAll('div')[0];
    // console.log(viewName);
    // console.log(viewName.offsetTop);
    // var current = viewName.offsetTop;
    // viewName.style.top = '114px'
    animate(viewName, 154, 3);
  }

}

function animate(ele, target, step, fn) {
  if (ele.timeId) {
    clearInterval(ele.timeId);
  }
  ele.timeId = setInterval(function () {
    //   1 获取元素的起始位置
    var current = ele.offsetTop;
    //    2 判断元素是否到达目标位置,
    //    当目标位置 - 当前位置 <= 步值 说明快要到达了
    //    当元素快要到达了目标位置后,直接给元素赋值
    if (Math.abs(target - current) <= step) {
      //        清除定时器
      clearInterval(ele.timeId);
      ele.style.top = target + 'px';

      //      到达目标之后要执行的函数
      //      判断是否传入函数,传入执行,否则不执行
      if (fn) {
        fn();
      }

      //      不再执行下面的语句
      return;
    }

    //    判断元素是往那个方向走,来给元素添加或减少步值

    //    if(target > current) {
    //      var pos = current + step;
    //    }else {
    //      var pos = current - step;
    //    }
    var pos = target > current ? current + step : current - step;

    //    给元素赋予位置

    ele.style.top = pos + 'px';
  }, 15);
}

// 需求 : 点击箭头,滚动到下一个导航栏
$(function () {
  //  获取元素  ul  slideBarContain arrleft   arrRight
  var slideBarContain = document.getElementById('slideBarContain');
  // console.log(slideBarContain);
  var $arrLeft = $('#salesPromotionBar>.arr>.arrLeft');
  var $arrRight = $('#salesPromotionBar>.arr>.arrRight');
  var $uls = $('#salesPromotionBar ul');
  var indexGlobal = 0;//默认当前展示的是第一个ul,用来标记当前展示ul的下标
  // console.log($uls);

  // console.log($arrLeft);
  // 偷偷克隆第一个ul放在最后
  var newUl = $uls[0].cloneNode(true);
  slideBarContain.appendChild(newUl);
  // console.log($uls.length);

  // 给左边的箭头注册点击事件
  $arrLeft.click(function () {
    // 判断当前的ul如果是第一个,就偷偷跳到最后一个ul,然后缓慢滚动到前一个ul
    if (indexGlobal == 0) {
      // 让slideBarContain 的位置跳到最后一个ul
      slideBarContain.style.left = -$uls[0].offsetWidth * $uls.length + 'px';
      indexGlobal = $uls.length;
    }
    indexGlobal--;
    console.log(indexGlobal);

    var target = -indexGlobal * $uls[0].offsetWidth;
    animateLevel(slideBarContain, target, 40);

  });
  // 给右边边的箭头注册点击事件
  $arrRight.click(function () {
    indexGlobal++;
    console.log(indexGlobal);
    // 判断当前的ul是否倒数第二个一个ul,如果是先滚动到最后一个ul,到了之后再偷偷跳到第一个
    // 如果不是,就直接滚动到下一个ul
    if (indexGlobal == $uls.length) {
      // 先滚动到最后一个ul
      var target = -indexGlobal * $uls[0].offsetWidth;
      // 让盒子移动起来,达到目标位置后,偷偷跳到第一个ul
      animateLevel(slideBarContain, target, 40, function () {
        slideBarContain.style.left = '0px';
        indexGlobal = 0;
      });
      // slideBarContain.style.left = -$uls[0].offsetWidth * $uls.length + 'px';    
      // indexGlobal =  $uls.length;
    } else {
      var target = -indexGlobal * $uls[0].offsetWidth;
      animateLevel(slideBarContain, target, 40);
    }
  });
});

// 热门目的地模块 title
$(function () {
  // 需求 : 点击li标签,跳转到对应下标的页面
  // 1.获取元素   li ul
  var $lis = $('.view-destination .title-c li');
  var $uls = $('.view-destination .body-fr ul');
  // console.log($lis);
  // console.log($uls);
  // 给li元素注册鼠标移入事件 展示当前ul,并隐藏兄弟ul
  $lis.mouseenter(function () {
    var idx = $(this).index();
    $uls.eq(idx).stop(false, true).fadeIn().stop(false, true).siblings().fadeOut();
  });
  // 给li元素注册鼠标移出事件 停止正在执行的动画
  // $lis.mouseenter(function () {
  // var idx = $(this).index();
  // $uls.eq(idx).fadeIn().siblings().fadeOut();
  //   $uls.eq(idx).stop(true,true);
  // });


});

// 热门目的地模块 body-left

$(function () {
  var $links = $('.view-destination #type_list li a');
  // 给li元素注册鼠标移入事件
  $links.mouseenter(function () {
     $(this).css('top','-8px');
  })
   // 给li元素注册鼠标移出事件
   $links.mouseleave(function () {
    $(this).css('top',0);
 })
})

// 热门目的地模块 body-right
// 需求 : 鼠标移入li ,隐藏栏展现向上移动

$(function () {
  // 获取元素
  var $lis = $('.view-destination .body-fr li');

  // 给li注册鼠标移入事件
  $lis.mouseenter(function () {
    //  console.log($lis);
    $(this).find('.decrible_span').css('height', 36);
    $(this).css('borderColor', '#ccc');
  })
  // 给li注册鼠标移出事件
  $lis.mouseleave(function () {
    //  console.log($lis);
    $(this).find('.decrible_span').css('height', 0);
  })

});

// 官方合作模块
$(function () {
  //  需求 : 鼠标移入标题li,对应的body中ul展示,fadeIn  fadeOut
  // 1 获取元素  标题li   body中ul
  var $lis = $('.view-officialCooperate .title-center li');
  // console.log($lis);
  var $uls = $('.officialCooperate-body ul');
  // console.log($uls);

  // 2 给$lis注册鼠标移入事件
  $lis.mouseenter(function () {
    // 获取对应的下标

    var idx = $(this).index();
    // console.log(idx);
    // 3 给对应下标的ul淡入显示,其他兄弟元素淡出显示
    $uls.eq(idx).stop(false, true).fadeIn().stop(false, true).siblings().fadeOut();

  })
});

// 旅游局合作模块
// $(function () {
  //  需求: 让该模块自动轮播
  // 1.获取元素

  // 2.给事件添加定时器
  // 3.给页面注册事件 改变top值

  // 1
  // var $out_ul = $('.view-company .out_ul');
  // 2
  // console.log($('.document'));
  // setInterval(function () {
    // console.log($out_ul);
    // 3  改变ul的top,移动起来
    // $out_ul
    // .animate({top : '-123px'},1000)
    // .animate({top : '-246px'},1000,function () {
    //   $out_ul.css('top',0);
    // })
  // },6000);



// });