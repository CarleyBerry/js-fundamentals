function mul(a){
    var p=1
    for(var i=0;i<a.length;i++){p*=a[i]}
    return p
}
console.log(mul([2,3,4]))
console.log(mul([5,2,3]))
