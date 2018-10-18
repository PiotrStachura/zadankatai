const k = 5;
const minx = -50;
const maxx = 50;
var counter=0;

function rand(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}

do {
randomka=rand(minx,maxx);
document.write(randomka , "<br>");
counter++;
}
while(randomka%k!=0)
document.write("wylosowano " , counter, " liczb<br>");
for(var i=0;i<counter;i++){
    for(var poziomo=0;poziomo<20;poziomo++) {
        document.write("*");
    }
    document.write("<br>");
}
document.write("<br>");
for(var i=0;i<counter;i++){
    for(var poziomo=0;poziomo<=i;poziomo++) {
        document.write("*");
    }
    document.write("<br>");
}

