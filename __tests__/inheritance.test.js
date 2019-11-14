import {
  Shape,
  Rectangle,
  Square,
  ShapeStore,
} from '../src/inheritance';

describe('Inheritance test', () => {
  describe('Shape test', () => {
    test('creation test', () => {
      const shape = new Shape('shape');

      expect(shape.name).toEqual('shape');
    });
  });

  describe('Rectangle test', () => {
    test('creation test', () => {
      const rectangle = new Rectangle('rectangle', 1, 2);

      expect(rectangle.name).toEqual('rectangle');
      expect(rectangle.width).toEqual(1);
      expect(rectangle.length).toEqual(2);
    });

    test('perimeter test', () => {
      const rectangle = new Rectangle('rectangle', 1, 2);

      expect(rectangle.perimeter()).toEqual(6);
    });

    test('area test', () => {
      const rectangle = new Rectangle('rectangle', 1, 2);

      expect(rectangle.area()).toEqual(2);
    });
  });

  describe('Square test', () => {
    test('creation test', () => {
      const square = new Square('square', 1);

      expect(square.name).toEqual('square');
      expect(square.sideLength).toEqual(1);
    });

    test('perimeter test', () => {
      const square = new Square('square', 1);

      expect(square.perimeter()).toEqual(4);
    });

    test('area test', () => {
      const square = new Square('square', 1);

      expect(square.area()).toEqual(1);
    });
  });

  describe('ShapeStore test', () => {
    const shapes = [
      new Square('square 1', 1),
      new Rectangle('rectangle 1', 1, 2),
      new Rectangle('rectangle 2', 2, 3),
      new Square('square 2', 2),
    ];

    test('rectanglesTotalPerimeter test', () => {
      const shapeStore = new ShapeStore(...shapes);

      expect(shapeStore.rectanglesTotalPerimeter()).toEqual(16);
    });

    test('squaresTotalArea test', () => {
      const shapeStore = new ShapeStore(...shapes);

      expect(shapeStore.squaresTotalArea()).toEqual(5);
    });
  });
});
