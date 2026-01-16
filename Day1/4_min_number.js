function min(a){
    var m=a[0]
    for(var i=1;i<a.length;i++){
        if(a[i]<m){m=a[i]}
    }
    return m
}
console.log(min([3,7,2,9,1]))
console.log(min([100,50,75]))
