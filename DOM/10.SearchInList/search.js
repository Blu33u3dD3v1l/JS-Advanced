function search() {  

   let some = document.getElementById('searchText').value;
   let a = Array.from(document.querySelectorAll('#towns li'));
   let count = 0;
  for(town of a){
   if(town.textContent.includes(some)){
    town.style.fontWeight = 'bold';
    town.style.textDecoration = 'underline';
    count++;
   }
   else{
    town.style.fontWeight = 'normal';
    town.style.textDecoration = 'none';
   }
  }
   let end = document.getElementById('result');
   end.textContent = count + ' ' + 'matches found';
}
