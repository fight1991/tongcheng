(function (window) {
  function animateLevel(ele,target,step,fn) {
    if(ele.timeId) {
      clearInterval(ele.timeId);
    }
    ele.timeId = setInterval(function () {
      //   1 获取元素的起始位置
      var current = ele.offsetLeft;
  //    2 判断元素是否到达目标位置,
  //    当目标位置 - 当前位置 <= 步值 说明快要到达了
  //    当元素快要到达了目标位置后,直接给元素赋值
      if(Math.abs(target - current) <= step) {
  //        清除定时器
        clearInterval(ele.timeId);
        ele.style.left = target + 'px';
  
  //      到达目标之后要执行的函数
  //      判断是否传入函数,传入执行,否则不执行
        if(fn) {
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
  
      ele.style.left = pos + 'px';
    },50);
  }
  window.animateLevel = animateLevel;
})(window);