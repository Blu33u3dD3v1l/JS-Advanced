function addItem() {   
        let a = document.getElementById('items');
        let b = document.getElementById('newItemText');
        let c = document.createElement('li');
        c.textContent = b.value;
        let h = document.createElement('a');
        h.href = '#';
        h.textContent = '[Delete]';
        h.addEventListener('click',  (x) => {
               x.currentTarget.parentElement.remove();
        });
        c.appendChild(h);
        a.appendChild(c);

        
}