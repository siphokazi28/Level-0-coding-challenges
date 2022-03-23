function time(number) {
  hours = Math.floor(number / 60)
  minutes = number % 60
  return hours + ' hour(s),' + ' ' + minutes + ' minute(s)'
}
console.log(time(90))
