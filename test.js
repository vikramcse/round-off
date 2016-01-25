var expect = require('chai').expect;
var round = require('./index.js');

describe('Test for rounding numbers', function () {
  it('Expect a rounded +ve number', function () {
    expect(round(1.12)).to.be.equal(1);
  });

  it('Expect a rounded -ve number', function () {
    expect(round(-12.00001)).to.be.equal(-12);
  });
});
