function func(input){
   let obg = { model: 'VW Golf II',
   engine: { power: 0,
             volume: 0},
   carriage: { type: 'hatchback',
               color: 'blue' },
   wheels: [0,0,0,0]};

obg.model = input.model;
obg.carriage.color = input.color;
obg.carriage.type = input.carriage;

if(input.power < 106){
    obg.engine.power = 90;
    obg.engine.volume = 1800;
}
else if(input.power <  200 && input.power > 105){
    obg.engine.power = 120;
    obg.engine.volume = 2400;
}
else{
    obg.engine.power = 200;
    obg.engine.volume = 3500;
}

   for (let index = 0; index < obg.wheels.length; index++) {
    
    if(input.wheelsize % 2 !== 0){
       obg.wheels[index] = input.wheelsize;
    }
    else{
        obg.wheels[index] = input.wheelsize - 1;
    }
    
   } 
   return obg;
}
func({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
);