function up(s){
    return s.charAt(0).toUpperCase()+s.slice(1)
}
console.log(up("hello"))
console.log(up("javaScript"))
