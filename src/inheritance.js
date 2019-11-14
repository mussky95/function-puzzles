function Shape(name) {
  this.name = name;
}

function Rectangle(name, width, length) {
  Shape.call(this, name);

  this.width = width;
  this.length = length;
}

Rectangle.prototype = Object.create(Shape.prototype);

Object.defineProperty(Rectangle.prototype, 'constructor', {
  value: Rectangle,
  enumerable: false,
  writable: true,
});

Rectangle.prototype.perimeter = function () {
  return (this.width + this.length) * 2;
};

Rectangle.prototype.area = function () {
  return this.width * this.length;
};

function Square(name, sideLength) {
  Shape.call(this, name);

  this.sideLength = sideLength;
}

Square.prototype = Object.create(Shape.prototype);

Object.defineProperty(Square.prototype, 'constructor', {
  value: Square,
  enumerable: false,
  writable: true,
});

Square.prototype.perimeter = function () {
  return 4 * this.sideLength;
};

Square.prototype.area = function () {
  return this.sideLength ** 2;
};

function ShapeStore(...shapes) {
  this.shapes = shapes;
}

ShapeStore.prototype.rectanglesTotalPerimeter = function () {
  return this.shapes.filter((shape) => shape instanceof Rectangle)
    .reduce((totalPerimeter, rectangle) => totalPerimeter + rectangle.perimeter(), 0);
};

ShapeStore.prototype.squaresTotalArea = function () {
  return this.shapes.filter((shape) => shape instanceof Square)
    .reduce((totalArea, square) => totalArea + square.area(), 0);
};

export {
  Shape, Rectangle, Square, ShapeStore,
};
