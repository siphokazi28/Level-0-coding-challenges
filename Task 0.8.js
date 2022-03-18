let number = 93;
function time(number){
    hours = Math.floor(number / 60);
    minutes = number % 60;
    return (hours + ":" + minutes);
}
console.log(time(number));