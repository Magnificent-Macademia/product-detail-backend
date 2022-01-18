const expect = require('chai').expect;
const should = require('chai').should();
const helpers = require('../server/helpers.js')
const test_data = require('../test/dummy_data.js')

//default test
expect(true).to.be.true;



//GET ONE PRODUCT WITH ID
//return an object with properies:
// id,name, slogan, description, category, default_price, features array with at least one object that has feature and value properties

expect(helpers.formatOne(test_data.productArr)).to.be.a("object");


//GET STYLES FOR ONE WITH ID
//return an object with properies:
// product_id, results array with object contaning photos array property that has an object with url and thumbnail_url properties, skus property with object inside, style_id property, name property, original_price property, sale_price property, default property


//spits out correct object 3 times??
expect(helpers.formatStyles(test_data.stylesArr)).to.be.a("object");



//GET RELATED ITEMS FOR ITEM WITH ID
//should return an array

expect(helpers.formatRelated(test_data.relatedArr)).to.be.a("array");



