// let closer = document.querySelector('#closer');

// closer.onclick = () =>{
//     closer.style.display = 'none';
//     navbar.classList.remove('active');
//     cart.classList.remove('active');
//     loginForm.classList.remove('active');
// }

// let navbar = document.querySelector('.navbar');

// document.querySelector('#menu-btn').onclick = () =>{
//     closer.style.display = 'block';
//     navbar.classList.toggle('active');
// }

// let loginForm = document.querySelector('.login-form');

// document.querySelector('#login-btn').onclick = () =>{
//     closer.style.display = 'block';
//     loginForm.classList.toggle('active');
// }

const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

// add or remove the class "active" based on focus and blur events. 
inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

// switching between sign-in and sign-up forms
toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

// move a slider of images
// function moveSlider() {
//   let index = this.dataset.value;

//   //   let currentImage = document.querySelector(.img-${index});
//   images.forEach((img) => img.classList.remove("show"));
//   currentImage.classList.add("show");

//   const textSlider = document.querySelector(".text-group");
// }

//region-"signup"
function signup() {
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;
  const email = document.getElementById("signupEmail").value;
  // var invalidNameText = document.getElementById("invalidNameText");
  const emailRegex = /^[^\s@]+@gmail\.com\.(admin|customer)$/;
  if (!username || username.length < 4) {
    alert("Username must be at least 4 characters long.");
    document.getElementById("signupUsername").value = "";
    return false;
  } else if (!emailRegex.test(email)) {
    alert(
      "Please Entre Correct Email Must Be ended dot User or Admin and Only Gmail"
    );
    return false;
  } else if (!password || password.length < 4) {
    alert("Password must be at least 4 characters long.");
    document.getElementById("signupPassword").value = "";
    return false;
  }

  // Check if username already exists in local storage
  const existingData = JSON.parse(localStorage.getItem("Validation")) || [];
  if (existingData.some((user) => user.username === username)) {
    alert("Username already exists!");
    // Clear the form fields (optional)
    document.getElementById("signupUsername").value = "";
    document.getElementById("signupPassword").value = "";
    document.getElementById("signupEmail").value = "";
    return false;
  }

  // Store user data in the Validation array
  const userData = {
    username: username,
    email: email,
    password: password,
  };

  existingData.push(userData);

  // Store the updated Validation array in local storage
  localStorage.setItem("Validation", JSON.stringify(existingData));

  alert("Sign up successful! Please log in.");
  window.location.href = "signinfinal.html";
}

//endregion

function login() {
  
  const LoginEmail = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  // Retrieve user data from local storage
  const validationData = JSON.parse(localStorage.getItem("Validation"));

  if (!validationData || validationData.length === 0) {
    alert("User not found. Please sign up.");
    return;
  }
  const storedUserData = validationData.find(
    (user) => user.email === LoginEmail
  );
  if (!storedUserData) {
    alert("User not found. Please sign up.");
    return;
  }
  // Validate email format
  const storedEmail = storedUserData.email;
  const storedPassword = storedUserData.password;

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(storedEmail)) {
    alert("Invalid email format. Please enter a valid email.");
    return;
  }

  // Validate password
  if (password !== storedPassword) {
    alert("Invalid password. Please try again.");
    return;
  }
  if (storedEmail.endsWith(".admin")) {
    alert("Login successful as admin!");
    window.location.href = "admin-dashboard.html";
  } else if (storedEmail.endsWith(".customer")) {
    alert("Login successful as customer!");
    window.location.href = "home.html";
  } else {
    alert("Invalid email format. Please enter a valid email.");
    return;
  }

  // Clear the form fields (optional)
  document.getElementById("loginUsername").value = "";
  document.getElementById("loginPassword").value = "";
}
