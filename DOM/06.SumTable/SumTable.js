function sumTable() {
        let a = document.getElementsByTagName('td');        
        let b = Array.from(a);
        let sum = 0;
        for (let index = 0; index < b.length - 1; index++) {
           if(index % 2 != 0){
              sum += Number(b[index].textContent);
           }
            
        }    
      let some = document.getElementById('sum');
      some.textContent = sum;
}