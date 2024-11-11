type Circle = {
  shape: string;
  radius: number;
};
type Rectangle = {
  shape: string;
  width: number;
  height: number;
};
type Shape = Circle | Rectangle;
const calculateShapeArea = (shape: Shape): number => {
  if (shape.shape === "circle") {
    return 3.1416 * shape.radius * shape.radius;
  } else {
    return shape.width * shape.height;
  }
};
console.log(
  calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  })
);
