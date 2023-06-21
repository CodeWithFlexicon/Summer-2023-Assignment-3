const shoppingCart = require("./shoppingCart");

describe("addToCart() adds an item with a specified quantity and price to the shopping cart", () => {
  test("addToCart(protein shake, 1, 49.99)", () => {
    expect(shoppingCart.addToCart("Protein", 1, 49.99)).toBe();
    expect(shoppingCart.shoppingCart).toEqual([
      {
        cost: 49.99,
        itemName: "Protein",
        quantity: 1,
      },
    ]);
  });

  test("addToCart(Bananas, 5, 0.25)", () => {
    expect(shoppingCart.addToCart("Bananas", 5, 0.25)).toBe();
    expect(shoppingCart.shoppingCart).toEqual([
      {
        cost: 49.99,
        itemName: "Protein",
        quantity: 1,
      },
      {
        cost: 0.25,
        itemName: "Bananas",
        quantity: 5,
      },
    ]);
  });

  test("addToCart(Bananas, 5, 0.25)", () => {
    expect(shoppingCart.addToCart("Bananas", 5, 0.25)).toBe();
    expect(shoppingCart.shoppingCart).toEqual([
      {
        cost: 49.99,
        itemName: "Protein",
        quantity: 1,
      },
      {
        cost: 0.25,
        itemName: "Bananas",
        quantity: 10,
      },
    ]);
  });

  test("calculateTotal() => 52.49", () => {
    expect(shoppingCart.calculateTotal()).toBe(52.49);
  });

  test("removeFromCart(Bananas, 4)", () => {
    expect(shoppingCart.removeFromCart("Bananas", 4)).toBe();
    expect(shoppingCart.shoppingCart).toEqual([
      {
        cost: 49.99,
        itemName: "Protein",
        quantity: 1,
      },
      {
        cost: 0.25,
        itemName: "Bananas",
        quantity: 6,
      },
    ]);
  });

  test("removeFromCart(Protein, 5)", () => {
    expect(() => {
      shoppingCart.removeFromCart("Protein", 5);
    }).toThrow(Error);
  });

  test("removeFromCart(PineApple, 1)", () => {
    expect(() => {
      shoppingCart.removeFromCart("PineApple", 1);
    }).toThrow(Error);
  });

  test("removeFromCart(Juice, 0)", () => {
    expect(() => {
      shoppingCart.removeFromCart("Juice", 0);
    }).toThrow(Error);
  });

  test("calculateTotal() => 51.49", () => {
    expect(shoppingCart.calculateTotal()).toBe(51.49);
  });
});
