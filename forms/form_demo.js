function togglePaymentDetails(e) {
    const theForm = document.querySelector("#checkoutForm");
    const creditCardContainer = document.getElementById("creditCardNumberContainer");
    const paypalContainer = document.getElementById("paypalUsernameContainer");
  
    // Always hide both containers initially
    creditCardContainer.classList.add("hide");
    paypalContainer.classList.add("hide");
  
    // Disable required attributes for hidden fields
    theForm.creditCardNumber.required = false;
    theForm.paypalUsername.required = false;
  
    // Show container based on selected payment method
    if (theForm.paymentMethod.value === "creditCard") {
      creditCardContainer.classList.remove("hide");
      theForm.creditCardNumber.required = true;
    } else if (theForm.paymentMethod.value === "paypal") {
      paypalContainer.classList.remove("hide");
      theForm.paypalUsername.required = true;
    }
  }
  
  // Function to display error messages to the user
  function showErrors(errors) {
    const errorsContainer = document.querySelector('.errors');
    errorsContainer.innerHTML = "";
    errors.forEach(function(error) {
      const errorParagraph = document.createElement("p");
      errorParagraph.textContent = error;
      errorsContainer.appendChild(errorParagraph);
    });
  }
  
  // Validation function that checks for correct name and credit card number
  function validateForm(event) {
    const theForm = event.target;
    let isValid = true;
    const errors = [];
  
    // Only allow users named "Bob"
    if (theForm.fullName.value !== "Bob") {
      isValid = false;
      errors.push("Only users named 'Bob' are allowed to submit this form.");
    }
  
    // If credit card is selected, validate the credit card number
    if (theForm.paymentMethod.value === "creditCard") {
      if (theForm.creditCardNumber.value !== "1234123412341234") {
        isValid = false;
        errors.push("Invalid Credit Card Number. Please use 1234123412341234.");
      }
    }
  
    // If validations fail, prevent form submission and show errors
    if (!isValid) {
      event.preventDefault();
      showErrors(errors);
      return false;
    }
  }
  
  // Attach event listeners once the DOM is loaded
  document.addEventListener("DOMContentLoaded", function() {
    // Toggle payment details when payment method changes
    document.querySelector("#paymentMethod").addEventListener("change", togglePaymentDetails);
    // Ensure the initial state of payment fields is hidden
    togglePaymentDetails();
    // Add submit event listener to validate the form on submit
    document.querySelector("#checkoutForm").addEventListener("submit", validateForm);
  });