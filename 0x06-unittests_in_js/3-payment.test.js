const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils');
const sinon = require('sinon');
const { expect } = require('chai');

describe('PaymentApi', function () {
  it('always returns the same number: 10', function () {
    const callback = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(200, 400);
    expect(callback.calledOnce).to.be.true;
    expect(callback.calledWith('SUM', 200, 400)).to.be.true;
    callback.restore();
  });
});
