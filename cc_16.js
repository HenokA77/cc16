// Task 2: Fetch products using .then() and .catch()
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
      .then(response => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status})`);
        }
        return response.json(); // parse JSON data
      })
      .then(products => {
        products.forEach(product => {
          console.log(`Product name: ${product.fields.name}`);
        });
      })
      .catch(error => {
        console.log('Error fetching products:', error.message);
      });
  }

  // Task 3: Fetch products using async/await and try/catch
async function fetchProductsAsync() {
    try {
      const response = await fetch('https://www.course-api.com/javascript-store-products');
  
      if (!response.ok) {
        throw new Error(`Network response was not ok (${response.status})`);
      }
  
      const products = await response.json();
  
      // Call the function to display products on the page (to be created in Task 4)
      displayProducts(products);
      
    } catch (error) {
      // Pass any errors to handleError (to be created in Task 5)
      handleError(error);
    }
}

// Task 4: Display products on the page
function displayProducts(products) {
    // Select the product container in your HTML
    const container = document.getElementById('product-container');
  
    // Clear previous contents
    container.innerHTML = '';
  
    // Display only the first 5 products
    products.slice(0, 5).forEach(product => {
      // Extract product details from API response
      const { name, price, image } = product.fields;
      const imageUrl = image[0].url;
  
      // Create a div element to hold the product info
      const productDiv = document.createElement('div');
      productDiv.classList.add('product'); // for CSS styling
  
      // Populate div with product details
      productDiv.innerHTML = `
        <img src="${imageUrl}" alt="${name}" />
        <h3>${name}</h3>
        <p>$${(price / 100).toFixed(2)}</p>
      `;
  
      // Append the product div to the container
      container.appendChild(productDiv);
    });
  }
  


// Task 5: Reusable error handling function
function handleError(error) {
    console.log('An error occurred:', error.message);
  }
  