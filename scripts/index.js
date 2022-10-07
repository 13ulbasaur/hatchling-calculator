$(document).ready(function(){
  $("#btnRun").click(function(){
      $.ajax({
          type: "GET",
          url: "https://randomzack.twiggies.workers.dev/",
          success: function (result) {
              $("#zackTime").src(result);
          }
      });
  });
});
