function myFunc(x){
    let numToString = x.toString();
    let firstDigit = numToString[0];
    let d = true;
    let sum = 0;
    
    for (let index = 0; index < numToString.length; index++) {
     if(numToString[index] !== firstDigit){
         d = false;
         
     }
     sum+=Number(numToString[index]);
     
    }
     console.log(d)
     console.log(sum)
  
 }
 myFunc(1234);
 myFunc(2222222);