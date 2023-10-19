// Function to fetch data from JSON file
async function fetchData() {
	try {
	  const response = await fetch('../products.json');
	  const data = await response.json();
	  
	  let output = '';
  
	  data.forEach(item => {
		  // Check if image-1 and image-2 are empty and use the default image if they are
		  const image1 = item['image1'] === '' ? item.image3 : item['image1'];
		  const image2 = item['image2'] === '' ? item.image3 : item['image2'];
		output += `
		  <div class="col-6 col-md-4 col-xl-2">
			<div class="grid_item">
			  <figure>
				<a href="${item.url}" target="_blank">
				  <img class="img-fluid lazy" src="${image1}" alt="">
				  <img class="img-fluid lazy" src="${image2}" alt="">
				</a>
			  </figure>
			  <a href="${item.url}">
				<h3>${item.name1} ${item.name2}</h3>
			  </a>
			  <div class="price_box">
				<span >${item.price} ر.س</span>
			  </div>
			</div>
		  </div>
		`;
	  });
  
	  // Assuming your main container has an id of 'main-container'
	  document.getElementById('prodcuts-container').innerHTML = output;
  
	} catch (error) {
	  console.log('Error:', error);
	}
  }
  
  // Fetch the data when the page loads
  window.addEventListener('load', fetchData);
  