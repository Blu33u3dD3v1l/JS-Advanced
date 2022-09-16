function func(x,y){

 for (let index = 0; index < y; index++) {  
        let z = x[x.length - 1];
        x.pop();
        x.unshift(z);
 }  
 console.log(x.join(' ')); 
}
func(['1', 
'2', 
'3', 
'4'], 
2
)