const expect = require("chai").expect;

import { CarInsurance } from "../store/CarInsurance";
const CarInsurance = CarInsurance.CarInsurance;
const Product = CarInsurance.Product;

describe("Co Test", function () {
  it("should foo", function () {
    const coTest = new CarInsurance([new Product("foo", 0, 0)]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("fixme");
  });
});
