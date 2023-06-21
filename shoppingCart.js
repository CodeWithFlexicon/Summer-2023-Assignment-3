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
    let cartSize = cart.length;
    let itemFound = false;
    if (quantity <= 0) {
      throw new Error(
        "You cannot remove 0 items unless... magic and knowledge of the unknown?"
      );
    }
    for (let i = 0; i < cartSize; i++) {
      if (cart[i].itemName === item) {
        itemFound = true;
      }
    }
    if (!itemFound) {
      throw new Error("This item is not in your cart");
    }
    for (let i = 0; i < cartSize; i++) {
      if (cart[i].itemName === item) {
        if (cart[i].quantity < quantity) {
          throw new Error(
            "You are trying to remove a quantity of an item that is more than in your cart"
          );
        } else {
          cart[i].quantity -= quantity;
          return;
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
