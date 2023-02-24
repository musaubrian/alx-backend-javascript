const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

describe('PaymentApi', function () {
  it('uses calculateNumber', function () {
    const callback = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(200, 400);
    expect(callback.calledOnce).to.be.true;
    expect(callback.calledWith('SUM', 200, 400)).to.be.true;
    callback.restore;
  });
});
