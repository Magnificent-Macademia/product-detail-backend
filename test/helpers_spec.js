const expect = require('chai').expect;
const should = require('chai').should();
const helpers = require('../server/helpers.js')
const test_data = require('../testing_data/dummy_data.js')


//example test
it('it should pass all example tests', () => {
expect(true).to.be.true;
expect({a: 1}).to.not.have.property('b');
expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]');
expect({a: {b: ['x', 'y']}}).to.nested.include({'a.b[1]': 'y'});
expect([1, 2]).to.have.ordered.members([1, 2])
expect({a: 1, b: 2}).to.not.have.any.keys('c', 'd');
expect({a: 1, b: 2}).to.have.all.keys('a', 'b');
});


//GET ONE PRODUCT WITH ID
//return an object with properies:
// id,name, slogan, description, category, default_price, features array with at least one object that has feature and value properties
it('it should return one formatted product object', () => {
  expect(helpers.formatOne(test_data.productArr)).to.be.an("object");
  expect(helpers.formatOne(test_data.productArr)).to.not.have.property("photos");
  expect(helpers.formatOne(test_data.productArr)).to.not.have.property("skus");
  expect(helpers.formatOne(test_data.productArr)).to.have.nested.property('features[0].feature');
  expect(helpers.formatOne(test_data.productArr)).to.have.nested.property('features[0].value')
  expect(helpers.formatOne(test_data.productArr)).to.have.all.keys('id','name','slogan', 'description','category','default_price','features');
})


//GET STYLES FOR ONE WITH ID
//return an object with properies:
// product_id, results array with object contaning photos array property that has an object with url and thumbnail_url properties, skus property with object inside, style_id property, name property, original_price property, sale_price property, default property

it('it should return one formatted style product object', () => {
expect(helpers.formatStyles(test_data.stylesArr)).to.be.an("object");
expect(helpers.formatStyles(test_data.stylesArr)).to.not.have.property('features')
expect(helpers.formatStyles(test_data.stylesArr)).to.have.nested.property('results[0].style_id');
expect(helpers.formatStyles(test_data.stylesArr)).to.have.nested.property('results[0].name');
expect(helpers.formatStyles(test_data.stylesArr)).to.have.nested.property('results[0].original_price');
expect(helpers.formatStyles(test_data.stylesArr)).to.have.nested.property('results[0].sale_price');
expect(helpers.formatStyles(test_data.stylesArr)).to.have.nested.property('results[0].default');
expect(helpers.formatStyles(test_data.stylesArr)).to.have.nested.property('results[0].photos');
expect(helpers.formatStyles(test_data.stylesArr)).to.have.nested.property('results[0].skus');
expect(helpers.formatStyles(test_data.stylesArr)).to.have.all.keys('product_id','results');
});



// //GET RELATED ITEMS FOR ITEM WITH ID
// //should return an array
it('it should return one formatted related product array', () => {
  expect(helpers.formatRelated(test_data.relatedArr)).to.be.an("array");
});



