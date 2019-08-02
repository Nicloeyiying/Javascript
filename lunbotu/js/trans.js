window.onload = function() {
	var prev = document.getElementsByClassName('prev_div')[0];
	var next = document.getElementsByClassName('next_div')[0];
	var ali = document.getElementsByTagName('li');
	var arr = [];
	for(var i = 0; i < ali.length; i++) {
		var aimg = ali[i].getElementsByTagName('img')[0];
		arr.push([parseInt(getStyle(ali[i], 'left')),
			parseInt(getStyle(ali[i], 'top')),
			getStyle(ali[i], 'opacity') * 100,
			getStyle(ali[i], 'zIndex'),
			aimg.width
		]);
	}
	prev.onclick = function() {
		arr.push(arr[0]);
		arr.shift();
		for(var i = 0; i < ali.length; i++) {
			var bImg = ali[i].getElementsByTagName('img')[0];
			ali[i].style.zIndex = arr[i][3];
			startMove(ali[i], {
				left: arr[i][0],
				top: arr[i][1],
				opacity: arr[i][2]
			});
			startMove(bImg, {
				width: arr[i][4]
			});
		}
	};
	next.onclick = function() {
		arr.unshift(arr[arr.length - 1]);
		arr.pop();
		for(var i = 0; i < ali.length; i++) {
			var cImg = ali[i].getElementsByTagName('img')[0];
			ali[i].style.zIndex = arr[i][3];
			startMove(ali[i], {
				left: arr[i][0],
				top: arr[i][1],
				opacity: arr[i][2]
			});
			startMove(cImg, {
				width: arr[i][4]
			});
		}
	};
};