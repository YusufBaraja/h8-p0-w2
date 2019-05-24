function konversiMenit(menit) {
    // you can only write your code here!
    var result=0;
    var jam = Math.floor(menit/60);
    var localMenit = menit % 60;
    if(localMenit.toString().length === 1){
        localMenit= "0" + localMenit;
    }
    result= jam + ':' + localMenit;
    
    return result;
  }
  
  // TEST CASES
  
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
   console.log(konversiMenit(53)); // 0:53
   console.log(konversiMenit(88)); // 1:28
   console.log(konversiMenit(520)); // 2:00