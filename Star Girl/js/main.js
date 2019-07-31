var can, ctx;
var w, h;
var girlPic = new Image(),
	starPic = new Image();
var stars = [],
	num = 60,
	picNum;
var lastTime, deltaTime, timer, xSpd, ySpd;
var switchy = false;
var life = 0;

function init() {
	can = document.getElementById('canvas');
	ctx = can.getContext('2d');
	w = can.width;
	h = can.height;
	document.addEventListener('mousemove', mousemove, false);
	girlPic.src = 'img/girl.jpg';
	starPic.src = 'img/star.png';
	for(var i = 0; i < num; i++) {
		var obj = new starObj();
		stars.push(obj);
		stars[i].init();
	}
	lastTime = Date.now();
	gameLoop();
}

document.body.onload = init;

function gameLoop() {
	window.requestAnimationFrame(gameLoop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	drawBackground();
	drawGirl();
	drawStars();
	aliveUpdate();
}

function drawBackground() {
	ctx.fillStyle = '#ccc';
	ctx.fillRect(0, 0, w, h);
}

function drawGirl() {
	ctx.drawImage(girlPic, 100, 150, 600, 300);
}

function mousemove(e) {
	if(e.offsetX || e.layerX) { // || e.offsetY || e.layerY
		var px = e.offsetX == undefined ? e.layerX : e.offsetX;
		var py = e.offsetY == undefined ? e.layerY : e.offsetY;
		if(px > 100 && px < 700 && py > 150 && py < 450) {
			switchy = true;
		} else {
			switchy = false;
		}
	}
}

function aliveUpdate() {
	if(switchy) {
		life += deltaTime * 0.03 * 0.05;
		if(life >= 1) {
			life = 1;
		}
	} else {
		life -= deltaTime * 0.03 * 0.05;
		if(life <= 0) {
			life = 0;
		}
	}
}