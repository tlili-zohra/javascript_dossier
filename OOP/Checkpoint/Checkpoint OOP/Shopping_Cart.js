// 1.Create an object class for the product to store the properties for id, name and price of the product.
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}
// 2.Create an object class for the shopping cart item to store the properties for product and its quantity.
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  // 3.To the preceding object class, add the method to calculate the total price of the item.

  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

// 4.Create another object class for the shopping cart which contains an array of ShoppingCartItem instances.
class ShoppingCart {
  constructor() {
    this.items = []; //array of ShoppingCartItem instances
  }
  // 5.To the shopping cart object, add the following methods.
  // 5.1 Add the methods to:

  // 5.2. Get the total of items inside the cart
  getTotal() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }
  // 5.3. Add items
  addItem(product, quantity) {
    // check if product already exists in cart
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new ShoppingCartItem(product, quantity));
    }
  }

  // 5.4. Remove items
  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  // 5.5. Display cart items
  displayCart() {
    if (this.items.length === 0) {
      console.log("Cart is empty");
      return;
    }

    console.log("Cart Items:");
    this.items.forEach((item) => {
      console.log(
        `- ${item.product.name} | Quantity: ${item.quantity} | Unit: $${
          item.product.price
        } | Total: $${item.getTotalPrice()}`
      );
    });

    console.log(`Total Cart Price: $${this.getTotal()}`);
  }
}

// 6. Go on to test the ability of our objects to:
// 6.1. Create products
const product1 = new Product(1, "Laptop", 1200);
const product2 = new Product(2, "Mouse", 25);
const product3 = new Product(3, "Keyboard", 45);
const product4 = new Product(4, "HD Webcam", 60);

// 6.2. Create a shopping cart
const cart = new ShoppingCart();
// 6.3. Add items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 1);
cart.addItem(product4, 6);
// 6.4. Display the cart
cart.displayCart();
// 6.5. Remove an item from the cart
cart.removeItem(2);

// Run after removing
console.log("After removing item:");
cart.displayCart();
// second remove:
cart.removeItem(4);
console.log("After removing item:");
cart.displayCart();
