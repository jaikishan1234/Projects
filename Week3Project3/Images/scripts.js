// You can use JavaScript to dynamically generate product cards based on data from a server.
// For this example, we'll just create a few sample product cards.

const products = [
    { name: 'Product 1', category: 'electronics', price: 49.99, image: 'product1.jpg' },
    { name: 'Product 2', category: 'clothing', price: 29.99, image: 'product2.jpg' },
    { name: 'Product 3', category: 'books', price: 15.99, image: 'product3.jpg' },
    // Add more products as needed
  ];
  
  const productList = document.getElementById('product-list');
  
  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');
  
    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.name;
    card.appendChild(image);
  
    const name = document.createElement('h2');
    name.textContent = product.name;
    card.appendChild(name);
  
    const category = document.createElement('p');
    category.textContent = `Category: ${product.category}`;
    card.appendChild(category);
  
    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `$${product.price.toFixed(2)}`;
    card.appendChild(price);
  
    productList.appendChild(card);
  });
  