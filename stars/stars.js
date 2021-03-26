
//1
/*function stars(col,row){
var star = "";
    for (var i = 1; i <= row; i ++) {
        for (var j = 1; j <= col; j ++){
            star += " *";
        }
        star += "\n";
    }
    return star;
}

console.log(stars(7,7));*/

//2
/*function stars(col,row) {
    var star = "";
    for (var i = 1; i <= row; i++) {
        for (var j = 1; j <= col; j++){
            if(i === 1 || i === 7 || j === 1 || j === 7  ){
                star += " * ";
            }
            else {
                star += "   ";
            }
        }
        star += "\n";
    }
    return star;
}
console.log(stars(7,7));*/


//3

/*function stars(col,row) {
    var star = "";
    for (var i = 1; i <= row; i++) {
        for (var j = 1; j <= col; j++){
            if((i === 1) || (j === 7 - i ) || (j === 1)){
                star += " *";
            }
            else {
                star += "   ";
            }
        }
        star += "\n";
    }
    return star;
}
console.log(stars(7,7));*/

//4
/*function stars(col,row) {
    var star = "";
    for (var i = 1; i <= row; i++) {
        for (var j = 1; j <= col; j++){
            if((i === 7) || (j === 1) || (i === j)){
                star += " * ";
            }
            else {
                star += "   ";
            }
        }
        star += "\n";
    }
    return star;
}
console.log(stars(7,7));*/


//5


