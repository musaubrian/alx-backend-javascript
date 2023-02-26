const { expect } = require('chai');
const getPaymentToken = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', function () {
  describe('success = true', function () {
    it('resolved a promise', function (done) {
      getPaymentToken(true)
        .then((res) => {
          expect(res).to.include({ data: 'Successful response from the API' });
          done();
        })
        .catch((err) => { done(err); });
    });
  });
});
