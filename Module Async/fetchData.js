async function fetchData() {
    try {
      // Use the Fetch API to retrieve data from the endpoint
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      // Check if the response status is OK
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Parse the response data as JSON
      const data = await response.json();
  
      // Log the titles of the first 5 posts
      data.slice(0, 5).forEach(post => console.log(post.title));
    } catch (error) {
      // Handle and log any errors that occur during the fetch operation
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();
  