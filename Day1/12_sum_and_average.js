function stats(a){
    var sum=0
    for(var i=0;i<a.length;i++){sum+=a[i]}
    var avg=sum/a.length
    return "Sum:"+sum+", Average:"+avg
}
console.log(stats([10,20,30,40]))
console.log(stats([5,5,5,5,5]))