function solve() {
    
   let buttons = document.getElementsByClassName('add-product');
   let products = document.getElementsByClassName('product-title');
   let checkout = document.getElementsByClassName('checkout');
   let bread = products[0].textContent;
   let milk = products[1].textContent;
   let tomatoes = products[2].textContent;
   let prices = document.getElementsByClassName('product-line-price');
   let breadPrice = prices[0].textContent;
   let milkPrice = prices[1].textContent;
   let tomatoesPrice = prices[2].textContent;    

   let sum = 0.00;
   let a = []
   buttons[0].addEventListener('click', function(){
      
     sum+= Number(breadPrice);
     if(!a.includes(bread)){
          a.push(bread);
     }
     
     let area = document.getElementsByTagName('textarea');
     for(afds of area){          
      afds.textContent += `Added Bread for ${Number(breadPrice).toFixed(2)} to the cart.\n`;
     }
    
    
   });
   buttons[1].addEventListener('click', function(){
      
      sum+= Number(milkPrice);
      if(!a.includes(milk)){
           a.push(milk);
      }
      
      let area = document.getElementsByTagName('textarea');
      for(afds of area){          
       afds.textContent += `Added Milk for ${Number(milkPrice).toFixed(2)} to the cart.\n`;
      }
    });
    buttons[2].addEventListener('click', function(){
      
      sum+= Number(tomatoesPrice);
      if(!a.includes(tomatoes)){
           a.push(tomatoes);
      }
      let area = document.getElementsByTagName('textarea');
      for(afds of area){          
       afds.textContent += `Added Tomatoes for ${Number(tomatoesPrice).toFixed(2)} to the cart.\n`;
      }
    
    });
    checkout[0].addEventListener('click', function(){  
      let area = document.getElementsByTagName('textarea');      
   for(afds of area){          
       afds.textContent += `You bought ${numberWithCommas(a)} for ${sum.toFixed(2)}.\n`;
      }
     buttons[0].setAttribute('disabled','');
     buttons[1].setAttribute('disabled','');
     buttons[2].setAttribute('disabled','');
     checkout[0].setAttribute('disabled','');
   });
   function numberWithCommas() {
      return a.toString().replace(/,(?=[^\s])/g, ", ");
    }

  
}