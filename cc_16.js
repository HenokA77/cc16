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

