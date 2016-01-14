$(function(){
  $('#blanks form').submit(function() {
    var sex = $("select#gender").val();
    var morality = parseInt($("select#goodbad").val());
    debugger;
    if (sex === "male") {
      if (morality > 6) {
      
      }
    }
  })
});
