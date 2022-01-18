const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server/index.js');
const should = require('chai').should();

chai.use(chaiHttp);

describe('GET /products/product', () => {
  it('it should return one formatted with product_id', (done) => {
    const id = 1;
    chai
      .request(app)
      .get(`/products/product/${id}`)
      .end((err, res) => {
        res.should.have.status(201);
        // res.body.should.be.a('object');
        // res.should.have.property('query').eql({});
        done(err);
      });
    });
  });