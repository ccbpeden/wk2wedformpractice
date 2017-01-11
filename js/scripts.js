$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person1uppercase = person1Input.toUpperCase()
    $(".person1").append(person1uppercase);

    $("#story").show();

    event.preventDefault();
  });
});
