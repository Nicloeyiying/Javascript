var starObj = function() {
	this.x;
	this.y;
	this.picNum;
	this.timer;
	this.xSpd;
	this.ySpd;
}
starObj.prototype.init = function() {
	//stars location x[100,700) y[150,450)
	this.x = Math.random() * 600 + 100;
	this.y = Math.random() * 300 + 150;
	this.picNum = Math.floor(Math.random() * 7);
	this.timer = 0;
	//stars spaid [-1.5, 1.5]
	this.xSpd = Math.random() * 3 - 1.5;
	this.ySpd = Math.random() * 3 - 1.5;
}
starObj.prototype.update = function() {
	//stars move
	this.x += this.xSpd * deltaTime * 0.004;
	this.y += this.ySpd * deltaTime * 0.004;
	//star img 7*7
	if(this.x < 100 || this.x > 693 || this.y < 150 || this.y > 443) {
		this.init();
		return;
	}
	//stars change
	this.timer += deltaTime;
	if(this.timer > 50) {
		this.picNum += 1;
		this.picNum %= 7;
		this.timer = 0;
	}
}
starObj.prototype.draw = function() {
	ctx.save();
	ctx.globalAlpha = life;
	//context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
	ctx.drawImage(starPic, this.picNum * 7, 0, 7, 7, this.x, this.y, 7, 7);
	ctx.restore();
}

function drawStars() {
	for(var i = 0; i < num; i++) {
		stars[i].update();
		stars[i].draw();
	}
}