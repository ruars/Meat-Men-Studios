emailjs.init("FOjWoCrmPGL6aEQOW");


document.addEventListener('DOMContentLoaded', function() {
  var checkoutForm = document.querySelector('.checkout-container');

  checkoutForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    var formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      ticketType: document.getElementById('ticket-type').value,
      insurance: document.getElementById('insurance').checked
    };

    // Send the email using EmailJS
    emailjs.send("service_gozy6z9", "template_feggogc", formData)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        // Display a confirmation message to the user
        alert('Your order has been placed, and a confirmation email has been sent.it is probably in your spam lol ');
      }, function(error) {
        console.log('FAILED...', error);
        // Display an error message to the user
        alert('Failed to send the confirmation email. Please try again.');
      });
  });
});
