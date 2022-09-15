function myFunc(x,y,z){
    let fruitName = String(x);
    let grams = Number(y);
    let price = Number(z);
    
    let area = (grams / 1000) * price;
    let area2 = grams / 1000;
    console.log(`I need $${area.toFixed(2)} to buy ${area2.toFixed(2)} kilograms ${fruitName}.`);
    
    }
    myFunc('apple', 1563, 2.35);