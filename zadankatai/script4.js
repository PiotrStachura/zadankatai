const minx = -50;
const maxx = 50;
var counter=0;
var sum=0;
function rand(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}

do{
var liczba = rand(minx,maxx);
}
while(liczba>=0)
for(var i=liczba; i<0;i++){
document.write(i , " ");
counter++;
sum+=i;
}
document.write("<br>suma tych liczb to ", sum);
document.write("<br>ilosc tych liczb to ", counter, "<br>");