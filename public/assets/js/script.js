$(document).ready(function () {

  $("#submit").on("click", function (event) {

    event.preventDefault();

    if ($("#burger_name").val() === "") {
      $(".invalid-feedback").show();
      $(".invalid-feedback").text("Please, insert hamburger's name");
      return;
    }

    const burgerObj = {
      burger_name: $('#burger_name').val().trim(),
      devoured: 0
    }

    $.post('/api/burgers', burgerObj)
      .then(() => location.reload());
  });


  $(".eat").on("click", function (event) {
    event.preventDefault();
    const id = $(this).data("id");

    $(".customer-name").each(function (index) {    //selecting input and comparing with the button id
      const inputValue = $(this).val();
      const inputId = $(this).attr("id");
      if (id == inputId) {
        console.log("matching: " + inputId, id);

        if (inputValue === "") {
          $("#invalid-message-" + inputId).show();
          $("#invalid-message-" + inputId).text("Please, insert your name");
          return;
        } else if (inputValue.length > 10) {
          $("#invalid-message-" + inputId).show();
          $("#invalid-message-" + inputId).text("Name cannot be more than 10 characters long");
          return;
        }
        const burgerObj = {
          devoured: 1,
          name: inputValue
        };

        $
          .ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: burgerObj
          })
          .then(() => location.reload());

      }

    });

  });

});