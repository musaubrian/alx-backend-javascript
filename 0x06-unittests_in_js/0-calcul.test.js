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
    assert.equal(calculateNumber(1.5, 3.7), 6
    );
  });
});
