const expect = require("chai").expect;

const coTest = require('../store/CarInsurance');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test", function() {

  it("should foo", function() {
    const coTest = new CarInsurance([ new Product("Low Coverage", 5, 7) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Low Coverage");
    expect(products[0].sellin).equal(4);
    expect(products[0].price).equal(6);
  });

});
