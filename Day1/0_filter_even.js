function f(arr){
    var out=[]
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==0){out.push(arr[i])}
    }
    return out
}
console.log(f([1,2,3,4,5,6]))
console.log(f([10,15,20,25]))
