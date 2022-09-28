function create(words) {
   let contentElement = document.getElementById('content');
   for (let index = 0; index < words.length; index++) {
      let div = document.createElement('div');
      let paragraph = document.createElement('p');
      let text = document.createTextNode(words[index]);
      paragraph.appendChild(text);
      paragraph.style.display = 'none';
      div.appendChild(paragraph);
      div.addEventListener('click', result);
           
     
      contentElement.appendChild(div);     
   }
   function result(event){
      event.target.children[0].style.display = 'inline';
   }
}