class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellin = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      if (
        this.products[i].name == "Medium Coverage" ||
        this.products[i].name == "Low Coverage"
      ) {
        if (this.products[i].price > 0) {
          this.products[i].price = this.products[i].price - 1;
          this.products[i].sellin = this.products[i].sellin - 1;
        } else {
          this.products[i].sellin = this.products[i].sellin - 1;
        }
      } else if (this.products[i].name == "Super Sale") {
        if (this.products[i].price > 0) {
          this.products[i].price = this.products[i].price - 2;
          this.products[i].sellin = this.products[i].sellin - 1;
        } else {
          this.products[i].sellin = this.products[i].sellin - 1;
        }
      } else if (this.products[i].name == "Special Full Coverage") {
        if (this.products[i].sellin > 0) {
          if (this.products[i].sellin < 11) {
            this.products[i].price = this.products[i].price + 2;
            this.products[i].sellin = this.products[i].sellin - 1;
          } else if (this.products[i].sellin < 6) {
            this.products[i].price = this.products[i].price + 3;
            this.products[i].sellin = this.products[i].sellin - 1;
          } else {
            this.products[i].price = this.products[i].price + 1;
            this.products[i].sellin = this.products[i].sellin - 1;
          }
        } else {
          this.products[i].price = 0;
          this.products[i].sellin = this.products[i].sellin - 1;
        }
      } else if (this.products[i].name == "Full Coverage") {
        if (this.products[i].price < 50) {
          this.products[i].price = this.products[i].price + 1;
          this.products[i].sellin = this.products[i].sellin - 1;
        } else {
          this.products[i].sellin = this.products[i].sellin - 1;
        }
      }
    }
    console.log(this.products);
    return this.products;
  }
}

module.exports = {
  CarInsurance,
  Product,
};
