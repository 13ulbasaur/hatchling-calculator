$(document).ready(function(){
  $("#btnRun").click(function(){
      $(this).hide();
      $.ajax({
          url: "https://randomzack.twiggies.workers.dev/", success: function (result) {
              $("#zackTime").src(result);
          }
      });
  });
});
