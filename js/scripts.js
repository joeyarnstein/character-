$(function(){
  $('#blanks form').submit(function(event) {
    var sex = $("select#gender").val();
    var morality = parseInt($("select#goodbad").val());
    if (sex === "male") {
      if (morality > 6) {
        $(".soul").text("Ned Stark");
      } else if (morality > 3) {
        $(".soul").text("Tyrion Lannister");
      } else {
        $(".soul").text("Roose Bolton");
      }
    } else {
      if (morality > 6) {
        $(".soul").text("Danerys Targarian");
      } else if (morality > 3) {
        $(".soul").text("Sansa Stark");
      } else {
        $(".soul").text("Cercei Lannister");
      }
    }
    event.preventDefault();
  })
});
