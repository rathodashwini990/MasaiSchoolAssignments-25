const checkout = {
  items: [],
  total: 0,

  // Add item to checkout
  addItem(item) {
    // Convert string price to number and validate
    const price = Number(item.price);
    
    if (typeof item.name !== 'string' || !item.name.trim()) {
      console.log("Invalid item name.");
      return;
    }

    if (isNaN(price)) {
      console.log("Invalid price.");
      return;
    }

    // Push valid item
    this.items.push({ ...item, price });
    this.total += price;
  },

  // Get total in formatted string
  getTotal() {
    return `Total: $${this.total.toFixed(2)}`;
  }
};

// Adding items
checkout.addItem({ name: "Coffee Maker", price: "99.95" });
checkout.addItem({ name: "Milk", price: 3.50 });    

console.log(checkout.getTotal());