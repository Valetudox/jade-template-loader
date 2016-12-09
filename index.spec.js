const { expect } = require('chai');
const chai = require('chai');
chai.use(require('chai-string'));
const loader = require('./');
const fs = require('fs');

it('should give back an empty string with empty string', () => {
  expect(loader('')).to.eql('');
});

it('should give back the compiled jade', () => {
  const template = fs.readFileSync('./example.jade').toString(); 
  expect(loader(template)).to.eql('<h2 id="heading">Test content</h2>');
});

