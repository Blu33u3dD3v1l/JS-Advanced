function func(c){
   let a = c.sort((a,b) => a.localeCompare(b));
  for (let index = 0; index < a.length; index++) {
  console.log(`${index + 1}.${a[index]}`)    
}
}
func(["John", "Bob", "Christina", "Ema"]);