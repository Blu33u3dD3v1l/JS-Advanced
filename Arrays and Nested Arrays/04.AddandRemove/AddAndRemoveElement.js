function func(x){
    
let b = [];
for (let index = 0; index <= x.length; index++) {    
      if(x[index] === 'add'){      
        b.push(index + 1);
      }    
      else if(x[index] == 'remove'){
        b.pop();
      }
    
    
}
if(b.length !== 0){
    console.log(b.join('\n'));
}
else{
    console.log('Empty');
}
}
func(['add', 
'add', 
'remove', 
'add', 
'add']
);