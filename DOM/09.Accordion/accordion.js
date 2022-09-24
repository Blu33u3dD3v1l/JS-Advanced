function toggle() {

    let a = document.getElementById('extra');
    let b = document.querySelector('.button');
    
   if(b.textContent === 'More'){
    b.textContent = 'Less';
    a.style.display = 'block';

   }else{
    b.textContent = 'More';
    a.style.display = 'none';
   }

}