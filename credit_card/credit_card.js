$(document).ready(function () {
    Stripe.setPublishableKey('pk_test_9D43kM3d2vEHZYzPzwAblYXl');
    var cardNumber, cardMonth, cardYear, cardCVC, cardHolder;
    function findEmpty() {
      var emptyText = $('#form-container input').filter(function () {
        return $(this).val == null;
      });
      console.log(emptyText.prevObject);
      emptyText.prevObject.addClass('invalid');
    }
    function checkCardType() {
      cardNumber = $('#card-number').val();
      var cardType = Stripe.card.cardType(cardNumber);
      switch (cardType) {
        case 'Visa':
          $('#card-image').html('<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+...');
          break;
        case 'Master Card':
          $('#card-image').html('<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+...');
          break;
        case 'Discover':
          $('#card-image').html('<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+...');
          break;
      }
    }
  });
