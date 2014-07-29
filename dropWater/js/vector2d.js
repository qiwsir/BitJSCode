
function vector2d(x, y){
	this.x = x
	this.y = y
	
	this.add = function(other){
		return new vector2d(this.x + other.x, this.y + other.y);
	}
	
	this.sub = function(other){
		return new vector2d(this.x - other.x, this.y - other.y);
	}
	
	this.scale = function(scale){
		return new vector2d(this.x * scale, this.y * scale);
	}
	
	this.length = function(){
		return Math.sqrt(this.dot(this));
	}
	
	this.angle = function(other){
		return Math.acos(this.dot(other) / (this.length() * other.length()));
	}
	
	this.setAngleVector = function(len, angle){
		this.x = -len * Math.sin(angle);
		this.y = len * Math.cos(angle);
		return this;
	}
	
	this.dot = function(other){
		return this.x * other.x + this.y * other.y;
	}
	
	this.normalize = function(){
		var l = this.length()
		return new vector2d(this.x / l, this.y / l);
	}
	
	this.clone = function(){
		return new vector2d(this.x, this.y);
	}
	
	this.distanceSquared = function(other){
		var xlen = this.x - other.x;
		var ylen = this.y - other.y;
		return xlen * xlen + ylen * ylen;
	}
	
	this.toString = function(){
		return "(" + this.x + ", " + this.y + ")";
	}

}

function vector2dCompareX(vector2dA, vector2dB){
	return vector2dA.x - vector2dB.x;
}

function vector2dCompareY(vector2dA, vector2dB){
	return vector2dA.y - vector2dB.y;
}