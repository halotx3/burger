$(function() {
    $('.change-devour').on('click', function(event) {
      const id = $(this).data('id');
      const newDevour = $(this).data('newdevour');
  
      const newDevourState = {
        devoured: newDevour
      };
  
      // Send the PUT request.
      $.ajax('/api/burger/' + id, {
        type: 'PUT',
        data: newDevourState
      }).then(
        function() {
          console.log('changed devour state to', newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $('#bSub').on('submit', function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newBurger = {
        type: $('#bur').val().trim()
    };
  
      // Send the POST request.
      $.ajax('/api/burger', {
        type: 'POST',
        data: newBurger
      }).then(
        function() {
          console.log('created new burger');
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });