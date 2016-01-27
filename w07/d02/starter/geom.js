var rect = rect || {};
var tri = tri || {};

function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype =  {
  isSquare: function(l, w) {
    if (l === w){
        return true;
    }
    else {
        return false;
    }
  },

  getArea: function(l, w) {
    return l * w;
  },

  getPerimeter: function(l, w) {
    return (2 * (l + w));
  },
};

rect.square = new Rectangle()
rect.square.isSquare(5, 5);
rect.square.getArea(5, 5);

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype = {
  isEquilateral: function(a, b, c){
    if (a === b && b === c){
      return true;
    }
    else {
        return false;
    }
  },

  isIsosceles: function(a, b, c){
    if (a === b & b === c & a === c){
      return true;
    }
    else {
      return false;
    }
  },

  isArea: function(a, b, c){
    var s = ((a + b + c) / 2);
    return Math.sqrt(s * (s - a)(s - b)(s - c))
  },

  isObtuse: function(a, b, c){
    if (a === b || b === c || a === c){
      return true;
    }
    else {
      return false;
    }
  }
};

tri.Triangle = new Triangle()
tri.Triangle.isEquilateral(3,2,3);
tri.Triangle.isIsosceles(2,3,3);
tri.Triangle.isLength(6,9,5);

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype = {
	isLength: function(x1, y1, x2, y2){
    return Math.sqrt((x1 - x2) ^ 2 + (y1 - y2)^2)
  }
};
