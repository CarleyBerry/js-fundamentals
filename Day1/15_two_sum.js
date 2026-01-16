// 15_two_sum.js
function twoSum(a,target){
    for(var i=0;i<a.length;i++){
        for(var j=i+1;j<a.length;j++){
            if(a[i]+a[j]==target){return true}
        }
    }
    return false
}
console.log(twoSum([2,7,11,15],9))
console.log(twoSum([1,2,3],10))