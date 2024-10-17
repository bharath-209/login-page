document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
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
  
    // If both are valid
    errorMessage.textContent = "";
    alert("Login Successful!");
  
    // Further actions like redirecting to another page can be handled here
  });
  
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  