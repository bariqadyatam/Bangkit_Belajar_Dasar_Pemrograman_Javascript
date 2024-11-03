class Inventory {
    constructor() {
      this.items = [];
    }
  
    // Method for add item
    addItem(item) {
      this.items.push(item);
    }
  
    // Method for remove item
    removeItem(id) {
      this.items = this.items.filter(item => item.id !== id);
    }
  
    // Method for view item
    listItems() {
      return this.items.map(item => item.displayDetails()).join("\n");
    }
  }
  
  export default Inventory;