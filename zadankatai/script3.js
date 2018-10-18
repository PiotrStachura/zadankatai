const n = 5;
const minx = 0;
const maxx = 1;
var counter=0;
function rand(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
for(var i=0;i<n;i++) {
    var kek=rand(0,1);
    document.write(kek , " ");
    if(kek==1){
        counter++;
    }
}
document.write("<br>" , counter, " razy wylosowano jedynkę");