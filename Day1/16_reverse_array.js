function rev(a){
    var r=[]
    for(var i=a.length-1;i>=0;i--){r.push(a[i])}
    return r
}
console.log(rev([1,2,3,4,5]))
console.log(rev(["a","b","c"]))