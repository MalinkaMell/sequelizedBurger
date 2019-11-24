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
    let inputValue = $("#customer-name").val();
    if (inputValue === "") {
      $("#invalid-message").show();
      $("#invalid-message").text("Please, insert your name");
      return;
    } else if (inputValue.length > 10) {
      $("#invalid-message").show();
      $("#invalid-message").text("Name cannot be more than 10 characters long");
      return;
    }

    const id = $(this).data("id");
    //const customerName = $("#customer-name").val();
    const burgerObj = {
      devoured: 1,
      name: $("#customer-name").val()
    };

    $
      .ajax(`/api/burgers/${id}`, {
        type: "PUT",
        data: burgerObj
      })
      .then(() => location.reload());
  });

});