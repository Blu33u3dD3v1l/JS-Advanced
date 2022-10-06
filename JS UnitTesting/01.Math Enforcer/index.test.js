const expect = require('chai').expect;
const assert = require('assert').strict;

const mathEnforcer = require('./index');


describe('Tests', () => {
     
   it('Is not a num add5', () => {

      let current = undefined;
      let b = mathEnforcer.addFive('dsfdsf');

      assert.equal(b, current);

   });
   it('is negative num add5', () => {

      let current = 2;
      let b = mathEnforcer.addFive(-3);

      assert.equal(b, current);

   });
   it('Is correct num5', () => {

      let current = Math.abs(15);   
      let b = mathEnforcer.addFive(10);

      assert.equal(b, current);

   });
   it('Is correct floatingNum add5', () => {

      let current = 5.5;

      let a = 0.5;
      let b = mathEnforcer.addFive(a);

      assert.equal(b, current);

   });
   it('Is not a num SubtractTen', () => {

      let current = undefined;
      c = 'fdsfds';
      let b = mathEnforcer.subtractTen(c)

      assert.equal(b, current);

   });
   it('Is correct Num SubtractTen', () => {

       let current = 5;
       let c = 15;
       let b = mathEnforcer.subtractTen(c)

      assert.equal(b, current);

   });
   it('Is correct floatingNum SubtractTen', () => {

      let current = 1.5;
      let c = 11.5;
      let b = mathEnforcer.subtractTen(c)

     assert.equal(b, current);

  });

   it('Is not a num firstIndexNum Sum', () => {

      let current = undefined;
      let c = 'fsfsd';
      let b = mathEnforcer.sum(c,10);

     assert.equal(b, current);

  });
  it('Is not a num secondIndex Num', () => {

   let current = undefined;
   let c = 'fsfsd';
   let b = mathEnforcer.sum(10,c);

  assert.equal(b, current);

});
it('Is correct firstNum Sum', () => {

   let current = 20;
   let c = 10;
   let b = mathEnforcer.sum(10,c);

  assert.equal(b, current);

});
it('Is correct firstFloatingNum Sum', () => {

   let current = 20.5;
   let c = 10.5;
   let b = mathEnforcer.sum(10,c);

  assert.equal(b, current);

});it('Is correct secondFloatingNum Sum', () => {

   let current = 20.5;
   let c = 10.5;
   let b = mathEnforcer.sum(c,10);

  assert.equal(b, current);

});
it('Is not a num firstIndex Num Sum', () => {

   let current = undefined;
   let c = 'dfsfdsf';
   let b = mathEnforcer.sum(c,10);

  assert.equal(b, current);

});
it('Is not a num secondIndexNum Sum', () => {

   let current = undefined;
   let c = 'dfsfdsf';
   let b = mathEnforcer.sum(10,c);

  assert.equal(b, current);

});
it('Is correct firstFloatingIndexNum Sum', () => {

   let current = 19.5;
   let c = 9.5;
   let b = mathEnforcer.sum(10,c);

  assert.equal(b, current);

});
it('Is correct firstNegativeNumber Sum', () => {

   let current = 5;
   let c = -5;
   let b = mathEnforcer.sum(10,c);

  assert.equal(b, current);

});
it('Is correct negativeNum SubstractTen', () => {

   let current = -15;
   let c = -5;
   let b = mathEnforcer.subtractTen(c)

  assert.equal(b, current);

});
  
});