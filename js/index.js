
  var headDatas = ['首页','酒店','机票','火车票','汽车票','景点','周边游','国内游','出境游','游轮','签证','定制游','金融','攻略','全域宁夏'];
  
  var link = {
  	t0:"javaScript:;",
	t1:"javaScript:;",
	t2:"javaScript:;",
	t3:"javaScript:;",
	t4:"javaScript:;",
	t5:"100/ywj-jingdian/index.html",
	t6:"100/gzh-zhoubianyou/index.html",
	t7:"javaScript:;",
	t8:"javaScript:;",
	t9:"100/syj-youlun/index.html",
	t10:"100/cmz-qianzheng/index.html",
	t11:"javaScript:;",
	t12:"100/zw-jinfu/index.html",
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
 
  //a href="javaScript:;"
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
	var $bigImg = $('.top-show')
	$bigImg.mouseenter(function(){
		$bigImg.find('div').show()
	});
	$bigImg.mouseleave(function(){
		$bigImg.find('div').hide()
	})
	//获取类名为rightTab的div
	var $rightTab = $('#common-silder .rightTab')
	//给每个rightTab注册鼠标移入移出事件
	$rightTab.mouseenter(function(){
		$(this).find('span').stop().show().animate({right:40},300);
		$(this).find('em').stop().show().animate({right:28},300);
	});
	$rightTab.mouseleave(function(){
		$(this).find('span').stop().hide().animate({right:100},300)
		$(this).find('em').stop().hide().animate({right:60},300);
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

//监听窗口滚动,出现页面左侧固定导航栏
console.log($(window).scrollTop())
$(window).scroll(function(){
	if(	$(window).scrollTop()>500){
		$(".page-left-nav" ).show()
	}else{
		$(".page-left-nav" ).hide()
	}
})
//页面左侧固定导航栏点击事件
$(".page-left-nav li").click(function(){
	$(this).css("backgroundColor","#00c07b").siblings().css("backgroundColor","#f5f5f5")
	$(this).children().css("color","white")
	$(this).siblings().children().css("color","#666")
})
// 返回顶部事件

//页脚弹窗关闭按钮点击事件
$(".foot-advert .closebtn").on("click",function(){
	$(".foot-advert-info").animate({
		left:"-100%"
	},1000,function(){
		$(".foot-advert .foot-advert-title").show()
	})
})
$(".foot-advert .foot-advert-title").on("click",function(){
	$(this).hide()
	$(".foot-advert-info").animate({
		left:0
	},1000)
})


// banner图片切换
var banner = document.getElementsByClassName("banner")[0];
var bannerimgs = document.getElementsByClassName("bannerimg")
var lunbo = document.getElementsByClassName("lunbobtn")[0];
var currentindex = 0   //标记当前显示图片
//根据图片增加轮播小按钮并创建移入事件
for(var i =0; i < bannerimgs.length;i++){
	var li = document.createElement("li");
	li.index = i
	lunbo.appendChild(li)
	li.onmouseenter=function(){
		var lis= lunbo.getElementsByTagName("li")
		for(var j = 0; j < bannerimgs.length;j++){
			bannerimgs[j].style.display = "none"
			lis[j].style.background = "url(../images/lunbobtn.png) 2px 2px no-repeat"
		 
		}
		bannerimgs[this.index].style.display = "block"
		this.style.background = "url(../images/lunbobtn.png) 0px -30px no-repeat"
		currentindex = this.index;
	}
}
//鼠标滑入banner区域,显示图片左右切换按钮,滑出隐藏
var bannerPic = document.getElementsByClassName("banner-pic")[0];
var bannerArr = document.getElementsByClassName("banner-arr")[0];

var bannerLeft = bannerArr.getElementsByClassName("left-btn")[0];
var bannerRight = bannerArr.getElementsByClassName("right-btn")[0];
banner.onmouseenter = function(){      //鼠标进入事件
	bannerArr.style.display = "block";   //显示左右切换按钮
	clearInterval(bannertimeId)         //不让图片变化
}
banner.onmouseleave = function(){      //鼠标离开事件
	bannerArr.style.display = "none";    
	bannertimeId = setInterval(function(){
		bannerRight.onclick()
	},4000)
}
//右侧点击按钮
bannerRight.onclick = function(){
	if(currentindex == lunbo.children.length -1){
		currentindex =-1
	}
	currentindex++;
	lunbo.children[currentindex].onmouseenter()
}
//左侧点击按钮
bannerLeft.onclick = function(){
	if(currentindex ==0){
		currentindex = lunbo.children.length
	}
	currentindex--;
	lunbo.children[currentindex].onmouseenter()
}
//设置定时器,让图片变化
var bannertimeId = setInterval(function(){
	bannerRight.onclick()
},4000)


// banner区域搜索框左侧导航栏点击每一项背景颜色变成白色
var bannerSearchNav = document.querySelectorAll(".banner-search .search-nav a");
var searchInfo = document.getElementsByClassName("search-info")[0]; 

for(var i = 0; i < bannerSearchNav.length; i++){
	bannerSearchNav[i].index =i;
	bannerSearchNav[0].style.backgroundColor = "white";
	bannerSearchNav[0].style.color = "black"
	bannerSearchNav[i].onclick = function(){		
		for(var j = 0; j < bannerSearchNav.length; j++){
			bannerSearchNav[j].style.backgroundColor = "";
			bannerSearchNav[j].style.color = "white"
			searchInfo.children[j].style.display = "none"   //banner搜索框右侧设置
		}
		this.style.backgroundColor = "white";
		this.style.color = "black"
		searchInfo.children[this.index].style.display = "block"
		return false;
	}
};

// banner区域搜索框右侧标题栏
var searchInfoTitle = document.getElementsByClassName("search-info-title")
//机票窗口的标题栏切换
var tabAirticket = document.getElementById("tab-airticket");
var passenger = tabAirticket.getElementsByClassName("passenger")[0]  //获取乘客类型、舱位等级标签
var starReturnDate =tabAirticket.getElementsByClassName("star-return-date")[0] //获取出发日期、返回日期
searchInfoTitle[0].children[0].style.height = "43px";
searchInfoTitle[0].children[0].style.color = "#00c77b";
searchInfoTitle[0].children[0].style.fontWeight = "bold";
searchInfoTitle[0].children[0].style.borderBottom = "3px solid #00c77b"
for(var i=0; i<searchInfoTitle[0].children.length; i++){
	searchInfoTitle[0].children[i].index =i
	searchInfoTitle[0].children[i].onclick = function(){
		for(var j =0; j<searchInfoTitle[0].children.length;j++){
			searchInfoTitle[0].children[j].style.height = "";
			searchInfoTitle[0].children[j].style.color = "";
			searchInfoTitle[0].children[j].style.fontWeight = "";
			searchInfoTitle[0].children[j].style.borderBottom = ""			
		}
		this.style.height = "43px";
		this.style.color = "#00c77b";
		this.style.fontWeight = "bold";
		this.style.borderBottom = "3px solid #00c77b"
		if(this.index==1){			
			passenger.style.display = "block"
			starReturnDate.children[1].style.display = "block"
		}else{			
			passenger.style.display = "none"
			starReturnDate.children[1].style.display = "none"
		}
		return false;
	}
}

var hotcityarr=["北京","上海","广州","深圳","成都","西安","杭州","武汉","长沙","重庆","青岛","南京","厦门","昆明","大连","三亚","天津","哈尔滨","呼和浩特","若羌","沈阳","北京首都","上海虹桥","上海浦东","温州"]
var classifyCity =[
	{A:["阿勒泰","阿拉尔","阿图什","鞍山","安顺","阿克苏","阿里","安吉","安康","阿拉善左旗","阿尔山","安庆","安阳","阿拉善"],
	 B:["北京","北京首都","北京南苑","白沙","本溪","滨州","巴中","北海","保山","博鳌","博乐","亳州","包头","巴彦淖尔","保定","蚌埠","白城","宝鸡","毕节","白银","保亭","百色"],
	 C:["成都","长沙","重庆","昌江","昌吉","常熟","慈溪","昌黎","从化","常州","长春","长白山","朝阳","昌都","崇左","长海","池州","郴州","赤峰","常德","巢湖","沧州","滁州","沧源","承德","潮州","澄迈","长治"],
	 D:["大连","定西","定安","儋州","东阳","德清","大兴","都江堰","大足","大庸","大庆","德宏","东方","达州","大同","德令哈","稻城","敦煌","东营","丹东","迪庆","东莞","丹阳","德州","大理"],
	 E:["恩平","峨眉山","恩施","二连浩特","鄂州","额济纳","鄂尔多斯"],
	 F:["凤凰","防城港","抚顺","奉化","福鼎","阜新","防城","抚远","阜阳","福州","佛山"],
	 },

	 {G:["广州","贵阳","甘南","贵港","广安","赣州","桂林","广元","格尔木","固原"],
		H:["杭州","哈尔滨","呼和浩特","黄冈","鹤岗","黄南","海南藏族","海东","海北","菏泽","红河","海盐","海城","淮安","怀化","衡阳","黑河","河池","和田","贺州","海口","邯郸","海拉尔","汉中","黄岩","黄山","合肥","惠州","黄石","淮北","鹤壁","淮南","海宁","湖州","呼伦贝尔","红原","河源","衡水","哈密"],
		J:["加格达奇","江门","济源","荆门","晋中","江都","建德","缙云","胶州","建三江","九江","景德镇","佳木斯","鸡西","景洪","九寨沟","焦作","井冈山","九华山","揭阳","吉林","金昌","嘉峪关","荆州","晋江","济宁","锦州","酒泉","嘉善","江阴","金华","嘉兴","吉安"],
		K:["昆明","开封","奎屯","克拉玛依","喀什","喀纳斯","开平","库车","康定","凯里","昆山","库尔勒"],
		L:["澜沧","临夏","临高","乐东","廊坊","漯河","娄底","辽源","辽阳","聊城","莱芜","乐山","溧阳","临安","兰溪","临海","龙游","滦平","莱西","阆中","陇南","临汾","来宾","丽水","连云港","庐山","洛阳","柳州","林芝","拉萨","泸州","六盘水","吕梁","临沧","丽江","荔波","黎平","兰州","连城","龙岩","临沂","六安","陵水","梁平"],
		M:["绵阳","茂名","漠河","牡丹江","芒市","眉山","梅州","梅县","满洲里","马鞍山","绵竹"]		 
	 },

	 {N:["南京","南海","那曲","怒江","宁海","南沙","南昌","南通","内江","南宁","新源","南充","宁蒗","宁德","宁波","南阳"],
		P:["盘锦","莆田","平顶山","濮阳","萍乡","平凉","平湖","蓬莱","平遥","攀枝花","普洱"],
		Q:["青岛","清远","琼中","七台河","潜江","启东","曲靖","千岛湖","黔西","钦州","曲阜","齐齐哈尔","黔江","衢州","且末","庆阳","泉州","迁安"],
		R:["若羌","瑞安","日喀则","日照"],
		S:["上海","深圳","三亚","沈阳","上海浦东","上海虹桥","四平","石嘴山","商洛","朔州","山南","三门","嵊州","石狮","嵊泗","三河","韶山","绥芬河","松潘","邵阳","鄯善","商丘","石河子","十堰","神农架","上饶","思茅","汕尾","汕头","顺德","龙山","三门峡","宿州","什邡","上虞","绍兴","遂宁","苏州","韶关","绥化","双鸭山","随州","宿迁","石家庄"]
	 },

	 {T:["天津","铜陵","天门","铁岭","铜川","太仓","桐庐","天台","台山","天柱","通化","泰州","屯昌","吐鲁番","铜仁","塔城","腾冲","台州","天水","通辽","桐乡","泰安","太原","唐山"],
		W:["武汉","温州","文昌","吴忠","五家渠","吴江","武义","温岭","武穴","婺源","无锡","梧州","乌鲁木齐","五指山","万州","文山","武夷山","乌兰浩特","威海","乌海","万宁","芜湖","渭南","乌兰察布","武威","潍坊"],
		X:["西安","厦门","信阳","新乡","咸宁","仙桃","湘西","湘潭","孝感","象山","新昌","兴安","兴宁","兴隆","许昌","西昌","忻州","西双版纳","兴义","西宁","锡林浩特","襄阳","邢台","兴城","新余","夏河","宣城","徐州"],
		Y:["伊春","云浮","益阳","鹰潭","岳阳","阳泉","雅安","玉溪","宜兴","仪征","永康","阳朔","永州","宜春","扬州","盐城","阳江","宜宾","烟台","伊宁","运城","榆林","延安","义乌","延吉","玉树","营口","银川","宜昌","余杭","余姚","元谋"],
		Z:["昭通","中山","周口","自贡","资阳","张家港","增城","张家界","芷江","郑州","张家口","中卫","肇庆","舟山","株洲","珠海","湛江","张掖","漳州","驻马店","中江","诸暨","淄博","枣庄","镇江"]
	 }
]

//机票 --出发/到达城市--文本框获取焦点事件
$("#tab-airticket .changecity input").focus( function(){
  var that =this;
	$(this).siblings().show()
	$(this).parent().parent().siblings("div").find(".citytab").hide()
}) 
	// 创建热门城市
	var hotcity = $("#tab-airticket .changecity .citytab .hotcity")
 for(var j=0; j<hotcity.length;j++){	 
	for(var i =0; i<hotcityarr.length;i++){ //根据数组hotcityarr创建span
	var span = document.createElement("span");
	span.innerText = hotcityarr[i];
	span.onclick = function(){		
		$(this).parent().parent().parent().siblings()[0].value = this.innerText
		$(this).parent().parent().parent().siblings().css("color","black")
		$(this).parent().parent().parent().hide() 
	}
		hotcity[j].appendChild(span)	
}
}

// 创建分类城市
var cityArr = $("#tab-airticket .changecity input").siblings()

for(var k =0;k<cityArr.length;k++){
for(var i =0; i< classifyCity.length;i++){    //根据4个窗口创建元素 每个窗口对应数组classifyCity中的每一项
	for(var key in classifyCity[i]){  		//数组中每一项是对象，遍历每个对象根据对象的属性个数创建dl列表
		var dl = document.createElement("dl");
		var dt = document.createElement("dt");
		var dd = document.createElement("dd");
		dl.className="clearfix"			
		dt.innerText = key;
		for(var j =0;j<classifyCity[i][key].length;j++){ //对象中每一项是个数组，根据数组的长度创建span标签
			var span = document.createElement("span")
			dd.appendChild(span)	
			span.innerText=classifyCity[i][key][j]
			span.onclick = function(){   //点击下拉窗口的城市,赋值给文本框
			  $(this).parent().parent().parent().parent().parent().siblings()[0].value = this.innerText
				$(this).parent().parent().parent().parent().parent().siblings().css("color","black")
				$(this).parent().parent().parent().parent().parent().hide() 		
			}
		}
		dl.appendChild(dt);
		dl.appendChild(dd);
		$($("#tab-airticket .changecity input").siblings()[k]).find(".a-zcity")[i].appendChild(dl)
		}
}
}

//点击下拉窗口关闭按钮事件
$("#tab-airticket .changecity .closebtn").click(function(){
	$("#tab-airticket .changecity .citytab").hide()       //关闭下拉窗口
})

//城市窗口标题栏切换事件
$("#tab-airticket .changecity .citytab-info li").click(function(){
	var index = $(this).index()	
	//设置标题栏点击后的样式
	$(this).css({"height":"29px","color":"#00c77b","font-weight":"bold","border-bottom":"2px solid #00c77b"}).siblings().css({"height":"30px","color":"#666","font-weight":"500","border-bottom":"none"})
	//根据点击的分类显示对应的城市列表
	$(this).parent().siblings().eq(index).show().siblings("div").hide()	
})

//设置乘客类型,成人儿童数
$("#tab-airticket .passenger .adult-child").click(function(){
	$("#tab-airticket .passenger .peoplenumber").show()
})
//人数增减按钮
$("#tab-airticket .passenger .minus").click(function(){	 //减
	
	if(parseInt($(this).siblings("input").val())>0){
		$(this).siblings("input").val($(this).siblings("input").val()-1)	
	}
	// 将人数赋值给乘客类型文本框
	$("#tab-airticket .passenger .adultnum").text($('#tab-airticket .passenger .peoplenumber').find('.adult-text').val())   
	$("#tab-airticket .passenger .childnum").text($('#tab-airticket .passenger .peoplenumber').find('.child-text').val())
})
$("#tab-airticket .passenger .add").click(function(){	 //增
		$(this).siblings("input").val(parseInt($(this).siblings("input").val())+1)
		$("#tab-airticket .passenger .adultnum").text($('#tab-airticket .passenger .peoplenumber').find('.adult-text').val())	  
		$("#tab-airticket .passenger .childnum").text($('#tab-airticket .passenger .peoplenumber').find('.child-text').val())			
})
// 点击确定按钮事件
$("#tab-airticket .passenger .peonumbtn").click(function(){
	$("#tab-airticket .passenger .peoplenumber").hide()
})
//banner区域结束



//精选特惠 导航栏菜单切换
$("#choiceness .tab-title li").mouseenter(function(){
	$(this).addClass("active").siblings().removeClass("active");  //移入的菜单添加样式
	
	$(this).parent().parent().siblings().eq($(this).index()).show().siblings(".choiceness-info").hide()    //根据选中的菜单展示对应的页面
})



// 住酒店导航栏菜单切换
$("#hotel-box .tab-title li").mouseenter(function(){
	$(this).addClass("active").siblings().removeClass("active");  //移入的菜单添加样式

	$(this).parent().parent().siblings().find(".hotel-left-main").eq($(this).index()).show().siblings(".hotel-left-main").hide()    //根据选中的菜单展示对应的页面

	//根据下标判断右边的显示
	if($(this).index()===8){
		$(".hotel-info .hotel-right-small").show().siblings(".hotel-right").hide()
	}else{
		$(".hotel-info .hotel-right").show().siblings(".hotel-right-small").hide()
	}
})



//游周边导航栏菜单切换
$("#nearby .tab-title li").mouseenter(function(){
	$(this).addClass("active").siblings().removeClass("active");  //移入的菜单添加样式

	$(this).parent().parent().siblings().find(".nearby-left").eq($(this).index()).show().siblings(".nearby-left").hide()    //根据选中的菜单展示对应的页面
})

//游中国导航栏菜单切换
$("#china .tab-title li").mouseenter(function(){
	$(this).addClass("active").siblings().removeClass("active");  //移入的菜单添加样式

	$(this).parent().parent().siblings().find(".china-left-main").eq($(this).index()).show().siblings(".china-left-main").hide()    //根据选中的菜单展示对应的页面
		//根据下标判断右边的显示
		if($(this).index()===0){
			$(".china-info .china-right-small").show().siblings(".china-right").hide()
		}else{
			$(".china-info .china-right").show().siblings(".china-right-small").hide()
		}
})

//游世界导航栏菜单切换
$("#world .tab-title li").mouseenter(function(){
	$(this).addClass("active").siblings().removeClass("active");  //移入的菜单添加样式

	$(this).parent().parent().siblings().find(".world-left").eq($(this).index()).show().siblings(".world-left").hide()    //根据选中的菜单展示对应的页面
	
})

//坐游轮导航栏菜单切换
$("#cruise .tab-title li").mouseenter(function(){
	$(this).addClass("active").siblings().removeClass("active");  //移入的菜单添加样式

	$(this).parent().parent().siblings().find(".cruise-left").eq($(this).index()).show().siblings(".cruise-left").hide()    //根据选中的菜单展示对应的页面
	
})

//旅游局页面切换
$(".consociation .toggle-btn li").mouseenter(function(){
	$(this).addClass("checked").siblings().removeClass("checked");
	$(this).parent().parent().siblings(".consociation-info").eq($(this).index()).show().siblings(".consociation-info").hide();
})

//保险公司页面切换
$(".insurancecompany .toggle-btn li").mouseenter(function(){
	$(this).addClass("checked").siblings().removeClass("checked");
	$(this).parent().parent().siblings(".insurancecompany-info").eq($(this).index()).show().siblings(".insurancecompany-info").hide();
})









