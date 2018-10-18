const n = 5;
const minx = -50;
const maxx = 50;
var parzysta;
function rand(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
let liczba = rand(minx,maxx);
document.write(liczba);
if (liczba%2==0){
    document.write("<br>" + liczba + " jest parzysta");
    parzysta=true;
}
else {
    document.write("<br>" + liczba + " jest nieparzysta");
    parzysta=false;
}
switch(true) {
    case liczba>0: 
    document.write("<br>" + liczba + " jest dodatnia");
    break;
    case liczba<0:
    document.write("<br>" + liczba + " jest ujemna");
    break;
    case liczba==0:
    document.write("<br>" + liczba + " jest równa zero");
    break;
}
if(parzysta) {
    document.write("<br>");
    for (var i=0; i<n; i++) {
        document.write(((liczba+2)+2*i)+ " ");
    }
}
else {
    document.write("<br>");
    for (var i=0; i<n; i++) {
        document.write(((liczba-1)-1*i)+ " ");
    }
}