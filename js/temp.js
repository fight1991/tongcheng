// 创建热门城市
for(var i =0; i<hotcity.length;i++){
	var span = document.createElement("span");
	$("#tab-airticket .changecity .hotcity").append(span)
	span.innerText = hotcity[i];
}
// 创建分类城市
var cityArr = $("#tab-airticket .changecity .a-zcity");

for(var i =0; i< cityArr.length;i++){    //根据4个窗口创建元素 每个窗口对应数组classifyCity中的每一项
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
				$("#tab-airticket .changecity input")[0].value = this.innerText
				$("#tab-airticket .changecity input")[0].style.color = "black"
				$("#tab-airticket .changecity .citytab").hide() 
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




// 第二次
$("#tab-airticket .changecity input").focus(function(){
	var that= this
	console.log(that)
	var citytab = document.createElement("div")
	citytab.className = "citytab"
	$(this).parent().append(citytab)
	var h4= document.createElement("h4")
	citytab.appendChild(h4);
	h4.innerHTML="热门城市"+
	"<span>（可直接选择城市或输入城市中文/拼音）</span>"+
	"<span class='closebtn'></span>"
	var citytabInfo = document.createElement("div")
	citytabInfo.className = "citytab-info"
	citytab.appendChild(citytabInfo)
	citytabInfo.innerHTML="<ul class='clearfix'>"+
	"<li style='margin-left: 0'>热门城市</li>"+
	"<li>ABCDEF</li>"+
	"<li>GHJKLM</li>"+
	"<li>NPQRS</li>"+
	"<li>TWXYZ</li>"+
"</ul>"+
"<div class='hotcity hidden'>"+
"</div>"+
"<div class='a-zcity hidden'></div>"+
"<div class='a-zcity'></div>"+
"<div class='a-zcity hidden'></div>"+
"<div class='a-zcity hidden'></div>"	

for(var i =0; i<hotcity.length;i++){
	var span = document.createElement("span");
	$("#tab-airticket .changecity .hotcity").append(span)
	span.innerText = hotcity[i];
}
// 创建分类城市
var cityArr = $("#tab-airticket .changecity .a-zcity");

for(var i =0; i< cityArr.length;i++){    //根据4个窗口创建元素 每个窗口对应数组classifyCity中的每一项
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
				console.log(this)
				$(that).css("color","black")
				$("#tab-airticket .changecity .citytab").hide() 
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
