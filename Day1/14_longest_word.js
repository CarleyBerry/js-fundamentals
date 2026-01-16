function longest(s){
    var words=s.split(" ")
    var max=words[0]
    for(var i=1;i<words.length;i++){
        if(words[i].length>max.length){max=words[i]}
    }
    return max
}
console.log(longest("The quick brown fox"))
console.log(longest("JavaScript programming language"))