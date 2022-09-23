function colorize() {
    let s = document.getElementsByTagName('tr');
    let b = Array.from(s);
     b.forEach((x,i) => {
        if(i % 2 != 0){
            x.style.backgroundColor = 'teal';
        }
     });
   
}