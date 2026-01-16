function sortAsc(a){
    return a.sort(function(x,y){return x-y})
}
console.log(sortAsc([5,2,8,1,9]))
console.log(sortAsc([3,1,4,1,5]))
