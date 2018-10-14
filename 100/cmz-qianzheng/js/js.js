



// 右侧滚动导航图标
$(function(){


//小人图标
  $('#tcIcoA').parent().mouseenter(function(){
    $(this).children('#tcIcoA').css({'background':'url(./img/chujing-silder1.png) -49px -105px no-repeat'});
    $(this).css('backgroundColor','#ff5d3d');
    $(this).children('#tcIcoAp').css({'display':'block'});
    // this.offsetWidth;
    // $(this).children('#tcIcoAp').css({'left':'-85px','opacity':'1'})
    $(this).children('#tcIcoAp').stop().animate({'left':'-85px','opacity':'1'},150)
  })



  $('#tcIcoA').parent().mouseleave(function(){
    $(this).children('#tcIcoA').css({'background':'url(./img/chujing-silder1.png) -129px -58px no-repeat'});
    $(this).css('backgroundColor','transparent');
    $(this).children('#tcIcoAp').stop().animate({'left':'-100px','opacity':'0.5'},150,function(){
      $(this).hide();
    })
    
  })


//微信小图标
  $('#tcIcoB').parent().mouseenter(function(){
    $(this).children('#tcIcoB').css({'background':'url(./img/chujing-silder1.png) -46px -198px no-repeat'});
    $(this).css('backgroundColor','#ff5d3d');
    $(this).children('#tcIcoBp').css({'display':'block'});
    // this.offsetWidth;
    $(this).children('#tcIcoBp').stop().animate({'left':'-131px','opacity':'1'},150);
  })

  $('#tcIcoB').parent().mouseleave(function(){
    $(this).children('#tcIcoB').css({'background':'url(./img/chujing-silder1.png) -89px -198px no-repeat'});
    $(this).css('backgroundColor','transparent');
    $(this).children('#tcIcoBp').stop().animate({'left':'-140px','opacity':'0'},150,function(){
      $(this).hide();
    });
  })


//笑脸图标
  $('#tcIcoC').parent().mouseenter(function(){
    $(this).children('#tcIcoC').css({'background':'url(./img/chujing-silder1.png) -7px -104px no-repeat'});
    $(this).css('backgroundColor','#ff5d3d');
    $(this).children('#tcIcoCp').css({'display':'block'});
    // this.offsetWidth;
    // $(this).children('#tcIcoAp').css({'left':'-85px','opacity':'1'})
    $(this).children('#tcIcoCp').stop().animate({'left':'-85px','opacity':'1'},150)
  })

  $('#tcIcoC').parent().mouseleave(function(){
    $(this).children('#tcIcoC').css({'background':'url(./img/chujing-silder1.png) -87px -57px no-repeat'});
    $(this).css('backgroundColor','transparent');
    $(this).children('#tcIcoCp').stop().animate({'left':'-100px','opacity':'0.5'},150,function(){
      $(this).hide();
    });
  })

 
//扫描图标
  $('#tcIcoD').parent().mouseenter(function(){
    $(this).children('#tcIcoD').css({'background':'url(./img/chujing-silder1.png) -49px -153px no-repeat'});
    $(this).css({'background':'#ff5d3d'});
    $(this).children('#tcIcoDp').css({'display':'block'});
    // this.offsetWidth;
    $(this).children('#tcIcoDp').stop().animate({'left':'-166px','opacity':'1'},150)
  })

  $('#tcIcoD').parent().mouseleave(function(){
    $(this).children('#tcIcoD').css({'background':'url(./img/chujing-silder1.png) -129px -106px no-repeat'});
    $(this).css({'background':'transparent'});
    $(this).children('#tcIcoDp').stop().animate({'left':'-180px','opacity':'0.5'},150,function(){
      $(this).hide();
    });
  })


//top图标
  $('#tcIcoE').parent().mouseenter(function(){
    $(this).children('#tcIcoE').css({'background':'url(./img/chujing-silder1.png) -9px -59px no-repeat'});
    $(this).css('backgroundColor','#ff5d3d');
    $(this).children('#tcIcoEp').css({'display':'block'});
    // this.offsetWidth;
    // $(this).children('#tcIcoAp').css({'left':'-85px','opacity':'1'})
    $(this).children('#tcIcoEp').stop().animate({'left':'-85px','opacity':'1'},150)
  })

  $('#tcIcoE').parent().mouseleave(function(){
    $(this).children('#tcIcoE').css({'background':'url(./img/chujing-silder1.png) -89px -13px no-repeat'});
    $(this).css('backgroundColor','transparent');
    $(this).children('#tcIcoEp').stop().animate({'left':'-100px','opacity':'0.5'},150,function(){
      $(this).hide();
    });
  })

  $('#tcIcoE').parent().hide()//隐藏 top按钮
    $(function(){
      $(window).scroll(function(){
          if($(this).scrollTop()>1){//当window的scrolltop距离大于1时，go to top按钮淡出，反之淡入
            $('#tcIcoE').parent().fadeIn();
          } else {
            $('#tcIcoE').parent().fadeOut();
          }
      });
    });
     

    // 给go to top按钮一个点击事件
    $('#tcIcoE').parent().click(function(){
        $("html,body").animate({scrollTop:0},200);//点击go to top按钮时，以200的速度回到顶部
        return false;
    });
});









(function(window){     
//获取轮播图块
bnr = document.querySelector('#banner');
//获取轮播图的伪数组
var banner = document.querySelectorAll('#banner ul li');
// banner图页码 ul
var bannerPage= document.querySelector('#bannerPage');
//轮播图定时器
var timerId = null;
var count = 0;



// 轮播图
for(var i = 0; i < banner.length; i++){
  var li = document.createElement('li');
  var a = document.createElement('a');
  a.href = 'javascript:void(0)';
  a.index = i;
  a.innerText = i + 1;
  if (i === 0) {
    a.style.backgroundColor = '#f60';
  }

  a.onmouseenter = bannerMove;

  li.appendChild(a);
  bannerPage.appendChild(li);
}

function bannerMove() {
  var a = bannerPage.querySelectorAll('a');
  for(var i = 0; i < banner.length; i++){
    banner[i].className = 'hide';
    a[i].style.backgroundColor = '#38415f';
  }
  banner[this.index].className = 'block';
  this.style.backgroundColor ='#f60';
  count = this.index;
}



bnr.onmouseenter = function(){
  if(timerId) clearInterval(timerId);
}



bnr.onmouseleave = function(){
  
  timerId = setInterval(function(){
    var a = bannerPage.querySelectorAll('a');
    count++;
    for(var i = 0; i < banner.length; i++){
      banner[i].className = 'hide';
      a[i].style.backgroundColor = '#38415f';
    }
    if(count === banner.length){
      count = 0;
    }
    a[count].style.backgroundColor ='#f60';
    banner[count].className = 'block';
  },3000)
}

bnr.onmouseleave();

})(window); 












(function(window){  
//header
//头部右侧显示的导航li标签
var header_lis =document.querySelectorAll('#header .qaz'); 
//鼠标移入头部标签 显示背景
for(var i = 1; i < header_lis.length; i++){
  header_lis[i].addEventListener('mouseenter',function(){
    this.classList.add('hover');
  })
  header_lis[i].addEventListener('mouseleave',function(){
    this.classList.remove('hover');
  })
}
})(window);

 
// (function(window){
// // 我的同程
// //下箭头
// var ia = document.querySelector('#ia');
// //头部 我的同程小标签
// var myTc = document.querySelector('#myTc');
// //头部 我的同程标签下拉框
// var topMyTc = document.querySelector('#topMyTc');
// //头部 我的同程标签下拉框遮挡块
// var blank = document.querySelector('#blank');

// //鼠标移入我的同程显示下拉框
// myTc.onmouseenter = function(){
//   topMyTc.className = 'block';
//   // $('#topMyTc').slideDown(50);
//   blank.className = 'block';
//   // $('#blank').slideDown(30);
//   ia.style.transform = 'rotate(180deg)';
// }
// //鼠标移出我的同程隐藏下拉框
// myTc.onmouseleave = function(){
//   topMyTc.className = 'hide';
//   // $('#topMyTc').slideUp(50);
//   blank.className = 'hide';
//   // $('#blank').slideUp(80);
//   ia.style.transform = 'none';
// }
// })(window);


// 我的同程
//下箭头
jQuery(document).ready(function($) {
  $("#myTc").hover(function() {
      $('#topMyTc').slideDown(150);
      $('#topMyTc').parent().css({'boxShadow': '0 0 5px 0px #ccc'})
      $('#topMyTc').css({'boxShadow': '0 0 5px 0px #ccc'})
      $('#blank').show();
      $('#ia').css('transform','rotate(180deg)')
  }, function() {
    $('#topMyTc').stop(true,false).slideUp(150);
    $('#topMyTc').parent().css({'boxShadow': '0 0 5px 0px transparent'})
    $('#topMyTc').css({'boxShadow': '0 0 5px 0px transparent'})
    $('#blank').hide();
    $('#ia').css('transform','none')
  });                                             
});














// (function(window){
// //客户服务
// //下箭头
// var ib = document.querySelector('#ib');
// //头部 客户服务标签
// var service = document.querySelector('#service');
// //头部 客户服务标签下拉框
// var topService = document.querySelector('#topService');
// //头部 客户服务标签下拉框遮挡块
// var blank2 = document.querySelector('#blank2');

// //鼠标移入客户服务显示下拉框
// service.onmouseenter = function(){
//   topService.className = 'block';
//   blank2.className = 'block';
//   ib.style.transform = 'rotate(180deg)';
// }
// //鼠标移出客户服务隐藏下拉框
// service.onmouseleave = function(){
//   topService.className = 'hide';
//   blank2.className = 'hide';
//   ib.style.transform = 'none';
// }
// })(window);


//客户服务
//下箭头
jQuery(document).ready(function($) {
  $("#service").hover(function() {
      $('#topService').slideDown(150);
      $('#topService').parent().css({'boxShadow': '0 0 5px 0px #ccc'})
      $('#topService').css({'boxShadow': '0 0 5px 0px #ccc'})
      $('#blank2').show();
      $('#ib').css('transform','rotate(180deg)')
  }, function() {
    $('#topService').stop(true,false).slideUp(150);
    $('#topService').parent().css({'boxShadow': '0 0 5px 0px transparent'})
    $('#topService').css({'boxShadow': '0 0 5px 0px transparent'})
    $('#blank2').hide();
    $('#ib').css('transform','none')
  });                                             
});









// (function(window){
// //合作中心
// //下箭头
// var ic = document.querySelector('#ic');
// //头部 合作中心标签
// var coop = document.querySelector('#coop');
// //头部 合作中心标签下拉框
// var topCoop = document.querySelector('#topCoop');
// //头部 合作中心标签下拉框遮挡块
// var blank3 = document.querySelector('#blank3');

// //鼠标移入客户服务显示下拉框
// coop.onmouseenter = function(){
//   topCoop.className = 'block';
//   blank3.className = 'block';
//   ic.style.transform = 'rotate(180deg)';
// }
// //鼠标移出客户服务隐藏下拉框
// coop.onmouseleave = function(){
//   topCoop.className = 'hide';
//   blank3.className = 'hide';
//   ic.style.transform = 'none';
// }
// })(window);


// //合作中心
// //下箭头
jQuery(document).ready(function($) {
  $("#coop").hover(function() {
      $('#topCoop').slideDown(150);
      $('#topCoop').parent().css({'boxShadow': '0 0 5px 0px #ccc'})
      $('#topCoop').css({'boxShadow': '0 0 5px 0px #ccc'})
      $('#blank3').show();
      $('#ic').css('transform','rotate(180deg)')
  }, function() {
    $('#topCoop').stop(true,false).slideUp(150);
    $('#topCoop').parent().css({'boxShadow': '0 0 5px 0px transparent'})
    $('#topCoop').css({'boxShadow': '0 0 5px 0px transparent'})
    $('#blank3').hide();
    $('#ic').css('transform','none')
  });                                             
});









// 手机图标

jQuery(document).ready(function($) {
  $("#tcCode").hover(function() {
      $('#tcCodet').slideDown(150);
  }, function() {
      $('#tcCodet').stop(true,false).slideUp(150);
  });                                             
});










// (function(window){
// //微信二维码
// //头部 微信小图标
// var wxCode = document.querySelector('#wxCode');
// //头部 微信小图标二维码
// var tcCodeb = document.querySelector('#tcCodeb');
// //头部 微信小图标二维码遮挡快
// var blank4 = document.querySelector('#blank4');

// //鼠标移入微信小图标显示二维码
// wxCode.onmouseenter = function(){
//   tcCodeb.className = 'block';
//   blank4.className = 'block';
// }
// //鼠标移出为兄小图标隐藏二维码
// wxCode.onmouseleave = function(){
//   tcCodeb.className = 'hide';
//   blank4.className = 'hide';
// }
// })(window);


//微信二维码
//头部 微信小图标
jQuery(document).ready(function($) {
  $("#wxCode").hover(function() {
      $('#tcCodeb').slideDown(150);
      $('#wxCode').css({'boxShadow': '0 0 5px 0px #ccc'})
      $('#tcCodeb').css({'boxShadow': '0 0 5px 0px #ccc'})
      $('#blank4').show();
  }, function() {
    $('#tcCodeb').stop(true,false).slideUp(150);
    $('#wxCode').css({'boxShadow': '0 0 5px 0px transparent'})
    $('#tcCodeb').css({'boxShadow': '0 0 5px 0px transparent'})
    $('#blank4').hide();
  });                                             
});




















//banner图
// 亚洲侧边隐藏导航
var iconA = document.querySelector('#iconA');
var Asia = document.querySelector('#Asia');
var sideDivA = document.querySelector('#sideDivA');

Asia.onmouseenter = function(){
  sideDivA.className = 'block';
  iconA.style.background = 'url(./img/visadesH1.png) 0 0 no-repeat';
}

Asia.onmouseleave = function(){
  sideDivA.className = 'hide';
  iconA.style.background = 'url(./img/visadesD1.png) 0 0 no-repeat';
}


// 欧洲侧边隐藏导航
var iconB = document.querySelector('#iconB');
var Europe = document.querySelector('#Europe');
var sideDivB = document.querySelector('#sideDivB');

Europe.onmouseenter = function(){
  sideDivB.className = 'block';
  iconB.style.background = 'url(./img/visadesH2.png) 0 0 no-repeat';
}

Europe.onmouseleave = function(){
  sideDivB.className = 'hide';
  iconB.style.background = 'url(./img/visadesD2.png) 0 0 no-repeat';
}



// 南美洲侧边隐藏导航
var iconC = document.querySelector('#iconC');
var sAmerica = document.querySelector('#sAmerica');
var sideDivC = document.querySelector('#sideDivC');

sAmerica.onmouseenter = function(){
  sideDivC.className = 'block';
  iconC.style.background = 'url(./img/visadesH3.png) 0 0 no-repeat';
}

sAmerica.onmouseleave = function(){
  sideDivC.className = 'hide';
  iconC.style.background = 'url(./img/visadesD3.png) 0 0 no-repeat';
}



// 北美洲侧边隐藏导航
var iconD = document.querySelector('#iconD');
var nAmerica = document.querySelector('#nAmerica');
var sideDivD = document.querySelector('#sideDivD');

nAmerica.onmouseenter = function(){
  sideDivD.className = 'block';
  iconD.style.background = 'url(./img/visadesH4.png) 0 0 no-repeat';
}

nAmerica.onmouseleave = function(){
  sideDivD.className = 'hide';
  iconD.style.background = 'url(./img/visadesD4.png) 0 0 no-repeat';
}



// 非洲侧边隐藏导航
var iconE = document.querySelector('#iconE');
var Africa = document.querySelector('#Africa');
var sideDivE = document.querySelector('#sideDivE');

Africa.onmouseenter = function(){
  sideDivE.className = 'block';
  iconE.style.background = 'url(./img/visadesH5.png) 0 0 no-repeat';
}

Africa.onmouseleave = function(){
  sideDivE.className = 'hide';
  iconE.style.background = 'url(./img/visadesD5.png) 0 0 no-repeat';
}


// 大洋洲侧边隐藏导航
var iconF = document.querySelector('#iconF');
var Oceania = document.querySelector('#Oceania');
var sideDivF = document.querySelector('#sideDivF');

Oceania.onmouseenter = function(){
  sideDivF.className = 'block';
  iconF.style.background = 'url(./img/visadesH6.png) 0 0 no-repeat';
}

Oceania.onmouseleave = function(){
  sideDivF.className = 'hide';
  iconF.style.background = 'url(./img/visadesD6.png) 0 0 no-repeat';
}



//搜索框点击value消失
var inputDown = document.querySelector('#inputDown');
var grayTxt = document.querySelector('#grayTxt');

inputDown.onfocus = function(){
  this.style.color = '#666';
  if(this.value === '请输入您需要签证的国家/地区'){
  this.value = '';
  this.style.backgroundColor = 'transparent';
 }
grayTxt.style.display = 'none';
}

inputDown.onblur = function(){
  this.style.color = '#666';
  if(this.value.trim() === ""){
  this.value = '请输入您需要签证的国家/地区';
  this.style.color = '#ccc';
  grayTxt.style.display = 'block';
  }
}

// 搜索btn点击 搜索框如果为空则变背景色
$('#searchBtn').click(function(){
  if($('#inputDown').val().trim() === "请输入您需要签证的国家/地区"){
    $('#grayTxt').hide();
    $('#inputDown').css({backgroundColor:'#ebfef9'});
  }
})





// 热门签证 切换洲
$('.visa-bottom-tl li').click(function(){
  var index = $(this).index();
  console.log(index);
  $(this).css({backgroundColor:'#8c96a2',color:'#fff'});
  $('.visa-bottom-b > ul').siblings('ul').hide();
  $('.visa-bottom-b > ul').eq(index).show();
  $(this).siblings('li').css({backgroundColor:'transparent',color:'#000'})
})






// 本期抢购 动画
$(function(){

    $('.robbuy-pic').mouseenter(function(){

      var n = $(this).index();
      $('.slidebuy').eq(n).css({backgroundColor: 'rgba(0, 0, 0, 0.5)'});
      $('.slidebuy').eq(n).stop().animate({
        top: '0',
      },400);
    });
  
    $('.robbuy-pic').mouseleave(function(){
      var n = $(this).index();
      $('.slidebuy').eq(n).css({backgroundColor: 'rgba(0, 0, 0, 0)'});
      $('.slidebuy').eq(n).stop().animate({
        top: '160px',
      },400);
    }); 

});




// $(function(){


//   var timerId = setInterval(function(){
//     $('.reserveUl').animate({
//       top:'-173px'
//     },5000,'linear',function(){
//       $(this).css('top','0')
//     })
//   })



//   $('.reserveSlide').mouseleave();

//   $('.reserveSlide').mouseenter(function(){
//     $('.reserveUl').stop();
//   })

//   $('.reserveSlide').mouseleave(function(){
//     timerId = setInterval(function(){
//       $('.reserveUl').animate({
//         top:'-173px'
//       },5000,'linear',function(){
//         $(this).css('top','0')
//       })
//     },5000);
//   })

// })



// 文字向上滚动
$(function(){
	$(".reserveSlide").myScroll({
		speed:40, //��ֵԽ���ٶ�Խ��
		rowHeight:53 //li�ĸ߶�
	});
});



// 办签帮助蓝色横条btn
$('#helpBtn > li').click(function(){
  $(this).css({backgroundColor:'#1d9efd'});
  $(this).siblings('li').css({backgroundColor:'#d2ecff'});
})
$('#helpBtn > li').eq(0).click(function(){
  $('.visatxt').hide();
  $('.numA').show();
})
$('#helpBtn > li').eq(1).click(function(){
  $('.visatxt').hide();
  $('.numB').show();
})
$('#helpBtn > li').eq(2).click(function(){
  $('.visatxt').hide();
  $('.numC').show();
})




$(function(){
  $('.city a span').on('mouseenter',function(){
    alert('看什么看，旁边一大堆重复的效果，这个我懒得做。点点其他的看看本帅哥的特效。')
  })
})
