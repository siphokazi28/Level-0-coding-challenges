function areaOfTriangle(side1, side2, side3) {
  const perimeter = (side1 + side2 + side3) / 2
  const areaOfTriangle = Math.sqrt(
    (perimeter - side1) * (perimeter - side2) * (perimeter - side3) * perimeter,
  )
  return areaOfTriangle
}
let result = areaOfTriangle(14, 16, 20)
console.log(result)
