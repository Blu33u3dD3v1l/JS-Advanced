function myFunc(x,y){
   
    let speed = Number(x);
    let area = String(y);
    let numSpeed = 0;

    if(area === 'residential'){

         numSpeed = 20;
    }
    else if(area === 'motorway'){
        numSpeed = 130;
    }
    else if(area === 'interstate'){
        numSpeed = 90;
    }
    else if(area === 'city'){
        numSpeed = 50;
    }
    if(speed <= numSpeed){
        console.log(`Driving ${speed} km/h in a ${numSpeed} zone`);
    }
    else{
        var b;
        if(speed - numSpeed <= 20){
          b = 'speeding';
        }
        else if(speed - numSpeed > 20 && speed - numSpeed <= 40){
            b = 'excessive speeding';
        }
        else{
            b = 'reckless driving';
        }
        let a = speed - numSpeed;
        console.log(`The speed is ${a} km/h faster than the allowed speed of ${numSpeed} - ${b}`);
    }
    
}
myFunc(200, 'motorway');
myFunc(120, 'interstate');
myFunc(21, 'residential');
myFunc(40, 'city');