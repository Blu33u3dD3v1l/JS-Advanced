function func(input){
let array = [];
for (let index = 0; index < input.length; index++){
if(Number.isInteger(input[index])){
    array.push(input[index]);
}
else{
    if(array.length < 2){
        console.log('Error: not enough operands!')
        return;
 
    }
    else{
        let a = array[array.length - 1];
        let b = array[array.length - 2];        
        array.pop();
        array.pop();
        let area = 0;
        if(input[index] == '+'){
            area = b+a;
            
        }
        else if(input[index] == '-'){
            area = b-a;
            
        }
        else if(input[index] == '*'){
            area = b * a;
        }
        else{
            area = b/a;
        }
        array.push(area);
        
    }
 
}
}
if(array.length == 1){
    console.log(array[0]);
    
}
else if(array.length >= 2){
    console.log('Error: too many operands!');
}

}
func([15,
    '/']              
   );