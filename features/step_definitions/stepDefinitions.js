var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var angularPage = require('../pages/homePage.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

defineSupportCode(function({Given, When, Then}) {
  Given('I go to {stringInDoubleQuotes}', function (site, next) {
    angularPage.go(site);
    expect(browser.getTitle()).to.eventually.equal('BBC - Home').and.notify(next);


  });
       




});
