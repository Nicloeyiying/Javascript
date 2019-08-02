window.onload = function() {
	var prev = document.getElementsByClassName('prev')[0];
	var next = document.getElementsByClassName('next')[0];
	var aLi = document.getElementsByTagName('li');
	var arr = [];
	for(var i = 0; i < aLi.length; i++) {
		var img = aLi[i].getElementsByTagName('img')[0];
		arr.push([getStyle(aLi[i], 'top'),
			getStyle(aLi[i], 'left'),
			getStyle(aLi[i], 'opacity'),
			getStyle(aLi[i], 'zIndex'),
			img.width
		]);
	}
	prev.onclick = function() {
		arr.push(arr[0]);
		arr.shift();
		for(var i = 0; i < aLi.length; i++) {
			var img = aLi[i].getElementsByTagName('img')[0];
			aLi[i].style.top = arr[i][0];
			aLi[i].style.left = arr[i][1];
			aLi[i].style.opacity = arr[i][2];
			aLi[i].style.zIndex = arr[i][3];
			img.width = arr[i][4];
		}
	};
	next.onclick = function() {
		arr.unshift(arr[arr.length - 1]);
		arr.pop();
		for(var i = 0; i < aLi.length; i++) {
			var img = aLi[i].getElementsByTagName('img')[0];
			aLi[i].style.top = arr[i][0];
			aLi[i].style.left = arr[i][1];
			aLi[i].style.opacity = arr[i][2];
			aLi[i].style.zIndex = arr[i][3];
			img.width = arr[i][4];
		}
	};

	function getStyle(obj, attr) {
		if(obj.currentStyle) {
			return obj.currentStyle[attr];
		} else {
			return getComputedStyle(obj, false)[attr];
		}
	}
};