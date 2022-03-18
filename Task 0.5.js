let side1 = 14;
let side2 = 16;
let side3 = 20;
function areaOfTriangle(side1, side2, side3) {
  let perimeter = (side1 + side2 + side3)/2;
  let areaOfTriangle = Math.sqrt(((perimeter - side1)*(perimeter - side2)*(perimeter - side3)*perimeter));
  return areaOfTriangle;
}
let result = areaOfTriangle(side1, side2, side3);
console.log(result);