function rm(s){
    var r=""
    for(var i=0;i<s.length;i++){
        if(s[i]!=" "){r+=s[i]}
    }
    return r
}
console.log(rm("Hello World"))
console.log(rm("Java Script is fun"))