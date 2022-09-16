function func(x,y){
let z = [];
for (let index = 0; index < x.length; index+= y) {
    z.push(x[index]);
}
return z;
}
func(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);