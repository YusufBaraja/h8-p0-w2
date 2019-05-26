//1. Menyusun Barisan Bintang
var rows1=5;
for(var i=1; i <= rows1; i++){
    console.log("*");
}
console.log("=======================================");

//2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 =5;
var ast = "";
for(var i=1; i<= rows2;i++){
    for(var j=1; j<= rows2; j++){
        //console.log("*");
        ast = ast + "*";
    }
    console.log(ast);
    ast = "";
}
console.log("=======================================");

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3=5;
var ast3 ="";
for(var i3=1; i3<= rows3; i3++){
    for(var j3=1; j3<=i3;j3++){
        ast3 = ast3 + "*";
    }
    console.log(ast3);
    ast3 = "";
}
