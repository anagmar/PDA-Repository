var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // add 1 to 4 and get 5
  it('it has to sum 1 to 4 and get 5', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    sumResult = calculator.runningTotal;
    assert.equal(sumResult, 5);
  });

  //subtract 4 from 7 and get 3
  it('it has to substract 4 from 7 and get 3', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    substractionResult = calculator.runningTotal;
    assert.equal(substractionResult, 3);
  });

  //multiply 3 by 5 and get 15
  it('it has to multiply 3 by 5 and get 15', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    multiplicationResult = calculator.runningTotal;
    assert.equal(multiplicationResult, 15);
  });

  //divide 21 by 7 and get 3
  it('it has to devide 21 by 7 and get 3', function(){
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    divisionResult = calculator.runningTotal;
    assert.equal(divisionResult, 3);
  });

  //INTEGRATION

  //concatenate multiple number button clicks
  it('it should concatenate multiple number button clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(9);
    calculator.numberClick(8);
    calculator.numberClick(9);
    concatenatedResult = calculator.runningTotal;
    assert.equal(concatenatedResult, 1989);
  });

  //chain multiple operations together
  it('it should chain multiple operations together', function(){
    calculator.numberClick(10);
    calculator.operatorClick('*');;
    calculator.numberClick(8);
    calculator.operatorClick('/');
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('-');
    calculator.numberClick(10);
    chainedResult = calculator.runningTotal;
    assert.equal(chainedResult, 10);
  });

  //clear the running total without affecting the calculation
it('it should clear the running total without affecting the calculation', function(){
  calculator.numberClick(10);
  calculator.operatorClick('*');;
  calculator.numberClick(8);
  calculator.operatorClick('=');
  calculator.clearClick();
  clearedResult = calculator.runningTotal;
  assert.equal(clearedResult, 0);
})


});
