class ShoppingCart {
  constructor() {
    this.shoppingCart = [];
  }

  addToCart(itemName, quantity, cost) {
    let cart = this.shoppingCart;
    let cartSize = cart.length;

    for (let i = 0; i < cartSize; i++) {
      if (cart[i].itemName === itemName) {
        cart[i].quantity += quantity;
        return;
      }
    }

    cart[cartSize++] = {
      itemName: itemName,
      quantity: quantity,
      cost: cost,
    };
  }

  removeFromCart(item, quantity) {
    let cart = this.shoppingCart;
    for (let thing in cart) {
      if (cart[thing].itemName === item) {
        if (cart[thing].quantity <= quantity) {
          delete cart[thing];
        } else {
          cart[thing].quantity -= quantity;
        }
      }
    }
  }

  calculateTotal() {
    let cart = this.shoppingCart;
    let total = 0;
    for (let item in cart) {
      total += cart[item].cost * cart[item].quantity;
    }
    return total;
  }
}

let myCart = new ShoppingCart();

/* myCart.addToCart("Bananas", 5, 0.25);
myCart.addToCart("Bananas", 5, 0.25);
myCart.addToCart("Protein", 1, 49.99);
myCart.addToCart("Bananas", 5, 0.25);
myCart.addToCart("Bananas", 5, 0.25);
myCart.addToCart("Bananas", 5, 0.25);
myCart.addToCart("Bananas", 5, 0.25);
myCart.addToCart("Bananas", 5, 0.25);
myCart.addToCart("Bananas", 5, 0.25);
myCart.addToCart("Protein", 1, 49.99);
myCart.addToCart("Bananas", 5, 0.25);
console.log(myCart.shoppingCart); */

module.exports = myCart;
