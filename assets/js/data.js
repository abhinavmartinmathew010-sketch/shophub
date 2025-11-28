// assets/js/data.js
// Full default data with stock quantity and DYNAMIC images

if (!localStorage.getItem('users')) {
  localStorage.setItem('users', JSON.stringify([
    {
      id: 1,
      name: "Admin",
      email: "admin@shop.com",
      password: "admin123",
      role: "admin"
    }
  ]));
}

if (!localStorage.getItem('products')) {
  localStorage.setItem('products', JSON.stringify([
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 89.99,
      description: "Premium noise-cancelling wireless earbuds with 30h battery",
      // Keyword: earbuds
      image: "https://loremflickr.com/600/400/earbuds",
      stock: 15
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.00,
      description: "Fitness tracker with heart rate, GPS and notifications",
      // Keyword: smartwatch
      image: "https://loremflickr.com/600/400/smartwatch",
      stock: 8
    },
    {
      id: 3,
      name: "Fast Phone Charger",
      price: 29.99,
      description: "65W USB-C PD fast charger",
      // Keyword: charger, tech
      image: "https://loremflickr.com/600/400/charger,tech",
      stock: 25
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 79.99,
      description: "Portable waterproof speaker with deep bass",
      // Keyword: speaker, audio
      image: "https://loremflickr.com/600/400/speaker,audio",
      stock: 12
    },
    {
      id: 5,
      name: "Laptop Stand",
      price: 49.99,
      description: "Ergonomic aluminum stand for 13-17 inch laptops",
      // Keyword: laptop stand
      image: "https://loremflickr.com/600/400/laptop,stand",
      stock: 20
    },
    {
      id: 6,
      name: "Webcam 4K",
      price: 129.99,
      description: "Ultra HD webcam with autofocus and privacy cover",
      // Keyword: webcam
      image: "https://loremflickr.com/600/400/webcam",
      stock: 5
    }
  ]));
}

if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
}

if (!localStorage.getItem('orders')) {
  localStorage.setItem('orders', JSON.stringify([]));
}

console.log("ShopHub initialized – stock, orders, and dynamic images ready!");