// document.write("hello");
console.log("Привет братва");

var num = 15;
var stroka = "punp"

if(num == 15)
{
    console.log("num = " + num);
    console.log("Ok");
}
else
{
    
    console.error("Error!")
}

switch(stroka) 
{
    case "swat":
        console.log("Ты допизделся дружок")
        break;
    case "dox":
        console.log("Запускаю глаз боба")
        break;
}

var arr = [5,15,20,25,30];
console.log("массов:" + arr);
console.log("длина массива:" + arr.length);

var matrix = [
    [5, 15, 76], [25, "число", 5], [20, 51,"буква"]
]
console.log(matrix)

for(var i = 100; i > 5; i /= 2) {
    console.log(i);
}

var j = 1000;
while(j >= 500) {
    console.log(j);
    j -= 20;
}

function infoButton()
    {
        alert('ебанный нищий пацан')
    }