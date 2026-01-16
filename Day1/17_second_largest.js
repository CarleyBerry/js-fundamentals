// 17_second_largest.js
function second(a){
    var max=-Infinity,second=-Infinity
    for(var i=0;i<a.length;i++){
        if(a[i]>max){second=max;max=a[i]}
        else if(a[i]>second && a[i]!=max){second=a[i]}
    }
    return second
}
console.log(second([10,5,8,12,3]))
console.log(second([100,50,75,90]))