const calculateNumber = require('./2-calcul_chai.js');
const chai = require('chai');
const expect = chai.expect;

describe('Use chai', function () {
  describe('use type SUM', function () {
    it('...', () => {
      expect(calculateNumber('SUM', 1, 3)).equal(4);
    });
    it('...', () => {
      expect(calculateNumber('SUM', 1, 3.7)).equal(5);
    });
    it('...', () => {
      expect(calculateNumber('SUM', 4.5, 4.5)).equal(10);
    }); it('...', () => {
      expect(calculateNumber('SUM', 6.5, 5.4)).equal(12);
    });
    it('...', () => {
      expect(calculateNumber('SUM', 14.5, 12.8)).equal(28);
    });
    it('...', () => {
      expect(calculateNumber('SUM', 0.4, 0.9)).equal(1);
    });
    it('...', () => {
      expect(calculateNumber('SUM', 1.6, 1.9)).equal(4);
    });
  });
  describe('use type SUBTRACT', function () {
    it('...', () => {
      expect(calculateNumber('SUBTRACT', 4.4, 2.1)).equal(2);
    });
    it('...', () => {
      expect(calculateNumber('SUBTRACT', 4.5, 2.5)).equal(2);
    });
    it('...', () => {
      expect(calculateNumber('SUBTRACT', 0.2, 4)).equal(-4);
    });
    it('...', () => {
      expect(calculateNumber('SUBTRACT', 3, 2.5)).equal(0);
    });
    it('...', () => {
      expect(calculateNumber('SUBTRACT', 3, 2.4)).equal(1);
    });
    it('...', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).equal(-2);
    });
    it('...', () => {
      expect(calculateNumber('SUBTRACT', 0.6, 0)).equal(1);
    });
    it('...', () => {
      expect(calculateNumber('SUBTRACT', 0.5, 0.5)).equal(0);
    });
  });
  describe('use DIVIDE type', function () {
    it('...', () => {
      expect(calculateNumber('DIVIDE', 0.5, 0.5)).equal(1);
    });
    it('...', () => {
      expect(calculateNumber('DIVIDE', 10.4, 2)).equal(5);
    });
    it('...', () => {
      expect(calculateNumber('DIVIDE', 2.0, 0.4)).equal('Error');
    });
    it('...', () => {
      expect(calculateNumber('DIVIDE', 0, 0)).equal('Error');
    });
    it('...', () => {
      expect(calculateNumber('DIVIDE', 10.5, 2.4)).equal(5.5);
    });
  });
});
