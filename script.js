let closer = document.querySelector('#closer');

closer.onclick = () =>{
    closer.style.display = 'none';
    navbar.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    closer.style.display = 'block';
    navbar.classList.toggle('active');
}

// let cart = document.querySelector('.shopping-cart');

// document.querySelector('#cart-btn').onclick = () =>{
//     closer.style.display = 'block';
//     cart.classList.toggle('active');
// }

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    closer.style.display = 'block';
    loginForm.classList.toggle('active');
}

let searchForm = document.querySelector('.header .search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

/*** header & back top btn active when window scroll down to 100px*/
    // Get the button
    const backToTopBtn = document.getElementById('backToTopBtn');

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = 'block';
      } else {
        backToTopBtn.style.display = 'none';
      }
    };

    // When the user clicks on the button, scroll to the top of the document
    backToTopBtn.addEventListener('click', () => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });

    
// When the user clicks on the button
function signup() {
    window.location.href = "signinfinal.html"; // Redirect to login page
}

function login() {
    window.location.href = "signinfinal.html"; // Redirect to login page
}

function logout() {
    alert("Are you sure logout");
    window.location.href = "signinfinal.html"; // Redirect to login page
}


// Sample product data (replace this with your actual product data)

// Function to render products based on filter and sort options



// Sample product data
// const productsData = [
//   { id: 1, name: 'Product 1', imageSrc: 'photo/faci3.jpg', price: 140, category: 'Facial Cleansers', description: 'clean your body' },
//   { id: 2, name: 'Product 2', imageSrc: 'photo/eye1.jpg', price: 180, category: 'Eye Care', description: 'clean your body'},
//   { id: 3, name: 'Product 3', imageSrc: 'photo/bc3.webp', price: 160, category: 'Body Cleansers',description: 'clean your body' },
//   { id: 4, name: 'Product 4', imageSrc: 'photo/bc1.webp', price: 1400, category: 'Body Cleansers',description: 'clean your body' },
//   { id: 5, name: 'Product 5', imageSrc: 'photo/eye5.jpg', price: 250, category: 'Eye Care' ,description: 'clean your body'},
//   { id: 6, name: 'Product 6', imageSrc: 'photo/bc4.jpeg', price: 260, category: 'Facial Moisturizers' ,description: 'clean your body'},
//   { id: 7, name: 'Product 7', imageSrc: 'photo/faci1.jpg', price: 280, category: 'Facial Cleansers',description: 'clean your body' },
//   { id: 8, name: 'Product 8', imageSrc: 'photo/bc3.webp', price: 70, category: 'Facial Moisturizers' ,description: 'clean your body'},
//   { id: 9, name: 'Product 9', imageSrc: 'photo/bm10.jpeg', price: 280, category: 'Body Moisturizers',description: 'clean your body' },
//   { id: 10, name: 'Product 10', imageSrc: 'photo/bm5.jpeg', price: 100, category: 'Body Moisturizers' ,description: 'clean your body'},
//   { id: 11, name: 'Product 11', imageSrc: 'photo/bm1.jpeg', price: 90, category: 'Body Moisturizers' ,description: 'clean your body'},
//   { id: 12, name: 'Product 12', imageSrc: 'photo/bm8.webp', price: 120, category: 'Body Moisturizers' ,description: 'clean your body'},
//   // Add other product objects here...
// ];

// // Function to create a product card HTML element
// function createProductCard(product) {
//   const productCard = document.createElement('div');
//   productCard.classList.add('product-card');
//   productCard.dataset.productId = product.id;

//   productCard.innerHTML = `
//   <div class="icons">
//   <a href="#" class="fas fa-shopping-cart" onclick="toggleProduct('${product.name}')"></a>
//   <a href="#" class="fas fa-heart add-to-wishlist"></a>
//   <a href="#category" class="fas fa-eye"></a>
// </div>
//     <div class="image">
//       <img src="${product.imageSrc}" alt="" class="product-image" style="text-align: center;">
//     </div>
//     <div class="content">
    
//       <h3>${product.name}</h3>
//       <p>${product.description || ''}</p>
//       <div class="price">$${product.price.toFixed(2)}</div>
//       <div class="stars">
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star"></i>
//         <i class="fas fa-star"></i>
//         <i class="far fa-star"></i>
//         <span> (50) </span>
//       </div>
//     </div>
    
//     <br>
//   `;



//   // Wishlist functionality
//   const heartIcon = productCard.querySelector('.fas.fa-heart');
//   heartIcon.addEventListener('click', function(event) {
//     // event.preventDefault();
//     const productId = productCard.dataset.productId;

//     let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

//     if (!wishlist.includes(productId)) {
//       wishlist.push(productId);
//       localStorage.setItem('wishlist', JSON.stringify(wishlist));
//       alert('Added to wishlist!');
//     } else {
//       wishlist = wishlist.filter(id => id !== productId);
//       localStorage.setItem('wishlist', JSON.stringify(wishlist));
//       alert('Removed from wishlist!');
//     }
//   });

//   return productCard;
// }



// Function to render products based on filter and sort options
function renderProducts() {
  const priceSort = document.getElementById('priceSort').value;
  const categoryFilter = document.getElementById('categoryFilter').value;
  const productContainer = document.getElementById('productContainer');

  // Clear previous products
  productContainer.innerHTML = '';

  // Filter and sort products based on selected options
  const filteredProducts = productsData.filter(product => {
    return categoryFilter === 'all' || product.category === categoryFilter;
  }).sort((a, b) => {
    return priceSort === 'lowToHigh' ? a.price - b.price : b.price - a.price;
  });

  // Create and append product cards to the container
  filteredProducts.forEach(product => {
    const productCard = createProductCard(product);
    productContainer.appendChild(productCard);
  });
}

// Event listeners for changes in select elements
document.getElementById('priceSort').addEventListener('change', function() {
  updateLocalStorage();
  renderProducts();
});

document.getElementById('categoryFilter').addEventListener('change', function() {
  updateLocalStorage();
  renderProducts();
});

// Function to update local storage with filter and sort options
function updateLocalStorage() {
  const priceSort = document.getElementById('priceSort').value;
  const categoryFilter = document.getElementById('categoryFilter').value;

  // Store selected options in local storage
  localStorage.setItem('priceSort', priceSort);
  localStorage.setItem('categoryFilter', categoryFilter);
}

// Function to retrieve filter and sort options from local storage
function getLocalStorageOptions() {
  const priceSort = localStorage.getItem('priceSort');
  const categoryFilter = localStorage.getItem('categoryFilter');

  // Set default values if local storage is empty
  document.getElementById('priceSort').value = priceSort || 'lowToHigh';
  document.getElementById('categoryFilter').value = categoryFilter || 'all';
}

// Load initial product display and options from local storage
window.onload = function() {
  getLocalStorageOptions();
  renderProducts();
};





  