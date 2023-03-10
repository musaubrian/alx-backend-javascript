const request = require('request');
const { expect } = require('chai');

describe('Intergration Testing', () => {
  describe('GET /', () => {
    it('Returns StatusCode: 200 | Body: Welcome to the payment system', (done) => {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
  describe('GET /cart/', () => {
    it('Reponds with 404, not found', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
  describe('GET /cart/t', () => {
    it('Responds with 404, not found', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
  describe('GET /cart/1a', () => {
    it('Responds with 404, not found', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
  describe('GET /cart/1', () => {
    it('Responds with 200 and id of 1', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/1',
        method: 'GET'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 1');
        done();
      });
    });
  });
  describe('GET /cart/100', () => {
    it('Responds with status 200 and id of 100', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/100',
        method: 'Get'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 100');
        done();
      });
    });
  });
  describe('GET /available_payments', () => {
    it('Responds with status 200 and a json response', (done) => {
      const options = {
        url: 'http://localhost:7865/available_payments',
        method: 'Get'
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        const bodyGot = JSON.parse(body);

        const expectedBody = {
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        };
        expect(bodyGot).to.deep.equal(expectedBody);
        done();
      });
    });
  });
  describe('POST /login', () => {
    it('Repsonds with statuscode 200 | Welcome msg', (done) => {
      const url = 'http://localhost:7865/login';

      request.post(
        url,
        { json: { userName: 'Stranger' } },
        function (error, response, body) {
          expect(response.statusCode).to.be.equal(200);
          expect(body).to.be.equal('Welcome Stranger');
          done();
        }
      );
    });
  });
});
