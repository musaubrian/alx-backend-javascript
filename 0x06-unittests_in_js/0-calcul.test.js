const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', function () {
  it('...', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('...', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('...', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  }); it('...', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('...', () => {
    assert.equal(calculateNumber(0.4, 0.9), 1);
  });
  it('...', () => {
    assert.equal(calculateNumber(0.6, 0), 1);
  });
  it('...', () => {
    assert.equal(calculateNumber(0.4, 0.1), 0);
  });
  it('...', () => {
    assert.equal(calculateNumber(0.5, 0.5), 2);
  });
});
