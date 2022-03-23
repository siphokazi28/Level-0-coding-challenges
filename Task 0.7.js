function fahrenheit(celsius) {
  fahrenheit = (celsius * 9) / 5 + 32
  return fahrenheit
}
{
  let result = fahrenheit(21)
  console.log(result)
}

function celsius(fahrenheit) {
  celsius = ((fahrenheit - 32) * 5) / 9
  return celsius
}
{
  let result = celsius(69.8)
  console.log(result)
}
