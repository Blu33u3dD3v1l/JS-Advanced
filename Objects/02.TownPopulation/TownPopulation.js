function func(alabala){
    let towns = {};
   for (const info of alabala) {
    let array = info.split(' <-> ');
    let a = array[0];
    let b = Number(array[1]);
if(!towns[a]){
    towns[a] = 0;
}
    towns[a] += b;
    
    
   }
   for (const key in towns) {
    
       console.log(`${key} : ${towns[key]}`);
    }
}
func(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);