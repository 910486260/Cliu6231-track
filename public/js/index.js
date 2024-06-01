// 创建Vue实例
var vm = new Vue({
  el: '#app',
  data: {
  }
});

var fun = function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;

            //这里是假设在640px宽度设计稿的情况下，1rem = 20px；
            //可以根据实际需要修改
            docEl.style.fontSize = 20 * (clientWidth / 640) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
}
fun(document, window);

var api='http://127.0.0.1:8087/';

function sendRequest(url, method, data, successCallback, errorCallback) {
  $.ajax({
    url: api+url,
    type: method,
	 headers: {
	    'token': localStorage.getItem('token')
	  },
    data: JSON.stringify(data),
	contentType: 'application/json',
    success: function(response) {
		if(response.code!=0){
			vm.$message.error(response.msg)
			return;
		}
      if (successCallback) {
        successCallback(response);
      }
    },
    error: function(xhr, status, error) {
      if (errorCallback) {
        errorCallback(xhr, status, error);
      }
    }
  });
}

function sendGetRequest(url,data, successCallback, errorCallback) {
  $.ajax({
    url: api+url,
    type: 'get',
	 headers: {
	    'token': localStorage.getItem('token')
	  },
    data: data,
	contentType: 'application/json',
    success: function(response) {
		if(response.code!=0){
			vm.$message.error(response.msg)
			return;
		}
      if (successCallback) {
        successCallback(response);
      }
    },
    error: function(xhr, status, error) {
      if (errorCallback) {
        errorCallback(xhr, status, error);
      }
    }
  });
}