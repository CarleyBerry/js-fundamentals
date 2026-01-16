function idx(s,c){
    for(var i=0;i<s.length;i++){
        if(s[i]==c){return i}
    }
    return -1
}
console.log(idx("hello","l"))
console.log(idx("javascript","s"))
