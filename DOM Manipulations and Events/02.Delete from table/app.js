function deleteByEmail() {
    let a = document.querySelector('input');
    let c = document.querySelectorAll('td');
    let p = document.querySelectorAll('tr');
    let res = document.getElementById('result');
    for (let i = 0; i < c.length; i++) {
          if(a.value == c[i].textContent){
           c[i].parentNode.remove();
           res.textContent = 'Deleted.';
          }  
          else{
            res.textContent = 'Not found.';
          }
        
    } 
}
