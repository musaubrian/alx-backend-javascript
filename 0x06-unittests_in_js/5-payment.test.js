const sendPaymentRequestToAPI = require('./5-payment.js');
const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');

describe('use before and after hooks', function () {
  let callback;
  let csl;

  beforeEach(function () {
    callback = sinon.stub(Utils, 'calculateNumber').returns(10);
    csl = sinon.spy(console, 'log');
  });

  afterEach(function () {
    callback.restore();
    csl.restore();
  });

  it('call sendPaymentRequestToAPI with 100, and 20:', () => {
    sendPaymentRequestToAPI(100, 20);
    expect(callback.calledWith('SUM', 100, 20)).to.be.true;
    expect(csl.calledOnceWithExactly('The total is: 120'));
  });
  it('call sendPaymentRequestToAPI with 10, and 10', function () {
    sendPaymentRequestToAPI(10, 10);
    expect(callback.calledWith('SUM', 10, 10)).to.be.true;
    expect(csl.calledOnceWithExactly('The total is: 20'));
  });
});
