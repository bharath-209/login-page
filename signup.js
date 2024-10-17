document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("error-message");
  
    // Simple validation checks
    if (!validateEmail(email)) {
      errorMessage.textContent = "Please enter a valid email.";
      return;
    }
    
    if (password.length < 6) {
      errorMessage.textContent = "Password must be at least 6 characters long.";
      return;
    }
  
    if (password !== confirmPassword) {
      errorMessage.textContent = "Passwords do not match.";
      return;
    }
  
    // If all validations pass
    errorMessage.textContent = "";
    alert("Sign Up Successful!");
  
    // Further actions like saving the data can be handled here
  });
  
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  