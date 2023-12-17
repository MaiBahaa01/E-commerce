document.getElementById("feedback-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get the selected rating
  var rating = document.querySelector('input[name="rating"]:checked');
  if (rating) {
    console.log("التقييم المحدد: " + rating.value + " stare");
  } else {
    console.log("يرجى تحديد التقييم");
  }
  
  // Get the feedback message
  var feedbackMessage = document.getElementById("feedback-message").value;
  console.log("رسالة التقييم: " + feedbackMessage);
  alert("thanks for feedback");
});

document.getElementById("cancel-btn").addEventListener("click", function() {
  // Clear the form and reset the rating
  document.getElementById("feedback-form").reset();
  var stars = document.querySelectorAll('input[name="rating"]');
  for (var i = 0; i < stars.length; i++) {
    stars[i].checked = false;
  }
  
});