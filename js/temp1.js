//机票 --出发/到达城市--文本框获取焦点事件
$("#tab-airticket .changecity input").focus( function(){
  var that =this;
	$(this).siblings().show()
	$(this).parent().parent().siblings("div").find(".citytab").hide()
	// 创建热门城市
for(var i =0; i<hotcity.length;i++){
	var span = document.createElement("span");
	span.innerText = hotcity[i];
	$(this).siblings().find(".hotcity").append(span)
}
// 创建分类城市
var cityArr = $(this).siblings().find(".a-zcity");
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
				that.value = this.innerText
				that.style.color = "black"
				$(that).siblings().hide() 
			}
		}
		dl.appendChild(dt);
		dl.appendChild(dd);
		cityArr[i].appendChild(dl)
	}
}
//点击下拉窗口关闭按钮事件
$("#tab-airticket .changecity .closebtn").click(function(){
	$("#tab-airticket .changecity .citytab").hide()        //关闭下拉窗口
})
}) 

//城市窗口标题栏切换事件
$("#tab-airticket .changecity .citytab-info li").click(function(){
	var index = $(this).index()
	console.log(index)
	//设置标题栏点击后的样式
	$(this).css({"height":"29px","color":"#00c77b","font-weight":"bold","border-bottom":"2px solid #00c77b"}).siblings().css({"height":"30px","color":"#666","font-weight":"500","border-bottom":"none"})
	//根据点击的分类显示对应的城市列表
	$(this).parent().siblings().eq(index).show().siblings("div").hide()
	console.log($(this).parent().siblings().eq(index).siblings("div"))
})