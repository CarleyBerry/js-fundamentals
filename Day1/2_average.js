function h(a){
var sum=0
for(var i=0;i<a.length;i++){sum=sum+a[i]}
return sum/a.length
}
console.log(h([10,20,30]))
console.log(h([5,15,25,35]))
