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
  