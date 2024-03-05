// Declare variables that will store references for form elements
const fullNameInput = document.getElementById("full-name");
const emailInput = document.querySelector('input[type="email"]');
const messageInput = document.querySelector("textarea");
const submitButton = document.getElementById("submit-button");

// Declare variable that will store regular expression for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Function to validate the form
function validateForm(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Initialize empty objects to store form data and errors
  const data = {};
  const errors = [];

  // Validate full name
  if (fullNameInput.value.trim() !== "") {
    data.fullName = fullNameInput.value.trim();
  } else {
    errors.push("Full name is required");
  }

  // Validate email
  if (emailInput.value.trim() !== "") {
    if (emailRegex.test(emailInput.value.trim())) {
      data.email = emailInput.value.trim();
    } else {
      errors.push("Email is invalid");
    }
  } else {
    errors.push("Email is required");
  }

  // Validate message
  if (messageInput.value.trim() !== "") {
    data.message = messageInput.value.trim();
  } else {
    errors.push("Message is required");
  }

  // Display errors or submit data
  if (errors.length > 0) {
    console.error("Errors:", errors);
  } else {
    console.log("Collected Data:", data);
    // Clear form fields
    fullNameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }
}

// Register form submission event listener
submitButton.addEventListener("click", validateForm);
