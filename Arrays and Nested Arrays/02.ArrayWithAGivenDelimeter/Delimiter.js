function func(x,y){
    let z = [];
 for (let index = 0; index < x.length; index++) {
    z.unshift(x[index]);
    
 }
let result = z.reverse();
console.log(result.join(y));
}
func(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'
);