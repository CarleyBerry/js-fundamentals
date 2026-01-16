function count(s,c){
    var cnt=0
    for(var i=0;i<s.length;i++){
        if(s[i]==c){cnt++}
    }
    return cnt
}
console.log(count("hello","l"))
console.log(count("mississippi","s"))
