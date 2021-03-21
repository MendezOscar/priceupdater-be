const expect = require("chai").expect;

const coTest = require('../store/CarInsurance');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("When product is Medium Coverage", function() {
  it("should foo", function() {
    const coTest = new CarInsurance([ new Product("Medium Coverage", 5, 7) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Medium Coverage");
    expect(products[0].sellin).equal(4);
    expect(products[0].price).equal(6);
  });
});

describe("When product is Full Coverage", function() {
  it("should foo", function() {
    const coTest = new CarInsurance([ new Product("Full Coverage", 2, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Full Coverage");
    expect(products[0].sellin).equal(1);
    expect(products[0].price).equal(2);
  });
});

describe("When product is Low Coverage", function() {
  it("should foo", function() {
    const coTest = new CarInsurance([ new Product("Low Coverage", 5, 7) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Low Coverage");
    expect(products[0].sellin).equal(4);
    expect(products[0].price).equal(6);
  });
});

describe("When product is Mega Coverage", function() {
  it("should foo", function() {
    const coTest = new CarInsurance([ new Product("Mega Coverage", 0, 80) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Mega Coverage");
    expect(products[0].sellin).equal(0);
    expect(products[0].price).equal(80);
  });
});

describe("When product is Special full Coverage", function() {
  it("should foo", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 15, 20) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Special Full Coverage");
    expect(products[0].sellin).equal(14);
    expect(products[0].price).equal(21);
  });
});

describe("When product is Super Sale", function() {
  it("should foo", function() {
    const coTest = new CarInsurance([ new Product("Super Sale", 3, 6) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Super Sale");
    expect(products[0].sellin).equal(2);
    expect(products[0].price).equal(4);
  });
});

