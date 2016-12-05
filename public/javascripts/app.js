$('#get-dish').on('click', function(event) {
  event.preventDefault();

  var request = $.ajax({
    method: "GET",
    url: "/dishes/random.json"
  }).done(function(data) {
    alert("Your random recipe is: " + data["dish"]);
  });
});
