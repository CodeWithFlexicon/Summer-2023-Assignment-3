const shoppingCart = require("./shoppingCart");

describe("addToCart() adds an item with a specified quantity and price to the shopping cart", () => {
  test("addToCart(protein shake, 1, 49.99)", () => {
    expect(shoppingCart.addToCart("Protein", 1, 49.99)).toBe();
    expect(console.log(shoppingCart)).toEqual(
      console.log({
        shoppingCart: [{ cost: 49.99, itemName: "Protein", quantity: 1 }],
      })
    );
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
    let addItem = shoppingCart.addToCart("Bananas", 5, 0.25);
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
});
