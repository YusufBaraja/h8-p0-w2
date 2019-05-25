//1. Melakukan Looping Menggunakan While

var counter1 = 2;
console.log("Looping Pertama");
while (counter1 <= 20){
    console.log(counter1 + "- I love coding");
    counter1=counter1 +2;
}

var counter2 = 20;
console.log("Looping Kedua");
while (counter2 >= 2){
    console.log(counter2 + "- I will become fullstack developer");
    counter2 = counter2 -2;
}

console.log("=================================================");
//2. Melakukan Looping Menggunakan For
console.log("LOOPING PERTAMA");
for(var i =1;i <=20;i++){
    console.log(i + "- I love coding");
}
console.log("LOOPING KEDUA");
for(var j = 20; j >= 1; j--){
    console.log(j + "- I will become fullstack developer");
 }

 console.log("=================================================");
 //3. Angka Ganjil dan Genap
 for(var i2 =1; i2<=100; i2++){
    if(i2 % 2 === 0){
        console.log("Genap");
    }
    else{
        console.log("Ganjil");
    }
}
console.log("");

//Kelipatan 3

for(var j2 =1; j2 <= 100; j2+=2){
    if(j2 % 3 === 0){
        console.log(j2 + " KELIPATAN 3 ");
    }
}


//Kelipatan 6
console.log("");

for(var k =1; k <= 100; k+=5){
    if(k % 6 === 0){
        console.log(k + " KELIPATAN 6 ");
    }
}

//Kelipatan 10
console.log("");

for(var l =1; l <= 100; l+=9){
    if(l % 10 === 0){
        console.log(l + " KELIPATAN 10 ");
    }
    
}
