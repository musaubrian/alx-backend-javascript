const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('calculateNumber with diff types', function () {
  describe('use type SUM', function () {
    it('...', () => {
      assert.equal(calculateNumber('SUM', 1, 3), 4);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    }); it('...', () => {
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUM', 0.4, 0.9), 1);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUM', 0.6, 0), 1);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUM', 0.4, 0.1), 0);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUM', 0.5, 0.5), 2);
    });
  });
  describe('use type SUBTRACT', function () {
    it('...', () => {
      assert.equal(calculateNumber('SUBTRACT', 4.4, 2.1), 2);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUBTRACT', 4.5, 2.5), 2);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUBTRACT', 0.2, 4), -4);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUBTRACT', 3, 2.5), 0);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUBTRACT', 3, 2.4), 1);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    }); it('...', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUBTRACT', 0.4, 0.9), -1);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUBTRACT', 0.6, 0), 1);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUBTRACT', 0.4, 0.1), 0);
    });
    it('...', () => {
      assert.equal(calculateNumber('SUBTRACT', 0.5, 0.5), 0);
    });
  });
  describe('use DIVIDE type', function () {
    it('...', () => {
      assert.equal(calculateNumber('DIVIDE', 0.5, 0.5), 1);
    });
    it('...', () => {
      assert.equal(calculateNumber('DIVIDE', 10.4, 2), 5);
    });
    it('...', () => {
      assert.equal(calculateNumber('DIVIDE', 2.0, 0.4), 'Error');
    });
    it('...', () => {
      assert.equal(calculateNumber('DIVIDE', 0, 0), 'Error');
    });
    it('...', () => {
      assert.equal(calculateNumber('DIVIDE', 0.4, 0.4), 'Error');
    });
    it('...', () => {
      assert.equal(calculateNumber('DIVIDE', 10.5, 2.4), 5.5);
    });
  });
});
