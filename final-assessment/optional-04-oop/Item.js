class Item {
    constructor(id, name, quantity, price) {
      this.id = id;
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }
  
    // Method for update detail item
    updateDetails(name, quantity, price) {
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }
  
    // Method for view detail
    displayDetails() {
      return `ID: ${this.id}, Name: ${this.name}, Quantity: ${this.quantity}, Price: ${this.price}`;
    }
  }
  
  export default Item;