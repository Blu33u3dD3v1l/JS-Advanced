const expect = require('chai').expect;
const assert = require('assert').strict;
const { throws } = require('assert');
const { Cipher } = require('crypto');
const { suitableTitles } = require('./index');
const rentCar = require('./index');


describe('Tests', () => {
   
   it('No matching element in shop', () => {  
          
          expect(() => rentCar.searchCar([], 'Trabant')).throw('There are no such models in the catalog!');
   });
   it('Car exist in shop', () => {
   
      let a = rentCar.searchCar(['BMW', 'BMW'], 'BMW');
      let b = `There is 2 car of model BMW in the catalog!`;
      assert.equal(a,b);
     
 
   });
   it('Is invalid array', () => {
   
     
      expect(() => rentCar.searchCar(![], String)).throw('Invalid input!');
 
   });
   it('Is invalid Model', () => {
   
     
      expect(() => rentCar.searchCar([], !String)).throw('Invalid input!');
 
   });
   it('Is invalid Calculate Model', () => {
   
     
      expect(() => rentCar.calculatePriceOfCar(!String, Number)).throw('Invalid input!');
 
   });
   it('Is invalid Calculate Days', () => {
   
     
      expect(() => rentCar.calculatePriceOfCar(String, !Number)).throw('Invalid input!');
 
   });
   it('No such car in catalogue', () => {
   
     
      expect(() => rentCar.calculatePriceOfCar('Trabant', 20)).throw('No such model in the catalog!');
 
   });
   it('There is Car in catalogue', () => {

     let a = rentCar.calculatePriceOfCar('BMW', 20);
     let c = 45 * 20;
     let b = `You choose BMW and it will cost $${c}!`
     assert.equal(a,b);
 
   });
   
   it('CostPerDay Invalid Input', () => {
   
     
      expect(() => rentCar.checkBudget(!Number, 20, 49)).throw('Invalid input!');
 
   });
   it('Days Invalid Input', () => {
   
     
      expect(() => rentCar.checkBudget(33, !Number, 49)).throw('Invalid input!');
 
   });
   it('Budgete Invalid Input', () => {
   
     
      expect(() => rentCar.checkBudget(33, 44, !Number)).throw('Invalid input!');
 
   });
   
   it('Successful rent', () => {
   
     let cost = 1;
     let dayss = 2;
     let buggette = 100;
     let a = rentCar.checkBudget(cost,dayss,buggette);
     let b = `You rent a car!`;
     assert.equal(a,b);
   });
   it('Successfil rent with 0 money left', () => {
   
      let cost = 50;
      let dayss = 2;
      let buggette = 100;
      let a = rentCar.checkBudget(cost,dayss,buggette);
      let b = `You rent a car!`;
      assert.equal(a,b);
    });
   it('Buggete is low', () => {
   
      let cost = 10;
      let dayss = 20;
      let buggette = 100;
      let a = rentCar.checkBudget(cost,dayss,buggette);
      let b = 'You need a bigger budget!';
      assert.equal(a,b);
    });
   

    
});
