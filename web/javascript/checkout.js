document.addEventListener('DOMContentLoaded', function() {
    var ticketTypeSelect = document.getElementById('ticket-type');
    var insuranceCheckbox = document.getElementById('insurance');
    var totalPriceElement = document.getElementById('total-price');
  
    console.log(ticketTypeSelect); // Should log the select element
    console.log(insuranceCheckbox); // Should log the checkbox element
    console.log(totalPriceElement); // Should log the paragraph element
  
    function updateTotalPrice() {
      if (totalPriceElement) {
        var ticketPrice = 0;
        var selectedOption = ticketTypeSelect.value;
        switch (selectedOption) {
          case 'standard':
            ticketPrice = 50;
            break;
          case 'standard1':
            ticketPrice = 52.80;
            break;
          case 'standard2':
            ticketPrice = 86.85;
            break;
          case 'standard3':
            ticketPrice = 98;
            break;
          case 'premium':
            ticketPrice = 100;
            break;
          case 'premium1':
            ticketPrice = 56;
            break;
          case 'premium2':
            ticketPrice = 21;
            break;
          case 'premium3':
            ticketPrice = 15;
            break;
          case 'vip':
            ticketPrice = 150;
            break;
          case 'vip2':
            ticketPrice = 76;
            break;
          default:
            console.error('Invalid ticket type selected');
            break;
        }
    
        var insurancePrice = insuranceCheckbox.checked ? 10 : 0;
        var totalPrice = ticketPrice + insurancePrice;
        totalPriceElement.textContent = 'Total Price: £' + totalPrice;
      } else {
        console.error('Total price element not found');
      }
    }
    
  
    if (ticketTypeSelect && insuranceCheckbox) {
      ticketTypeSelect.addEventListener('change', updateTotalPrice);
      insuranceCheckbox.addEventListener('change', updateTotalPrice);
    } else {
      console.error('Ticket type select or insurance checkbox not found');
    }
  
    // Initialize the total price display
    updateTotalPrice();
  });
  