$(document).ready(function () {
    $("#btnRun").click(function () {
$.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('https://google.com',) + '&callback=?', function(data){
	alert(data.contents);
});
$.ajax({
  url: 'https://flightrising.com/includes/ol/scryer_bloodlines.php?id1=1&id2=2', ,
  dataType: "jsonp",
  success: function (data) {
    console.log(data)
    alert(data);
  }
});
        $.get('https://flightrising.com/includes/ol/scryer_bloodlines.php?id1=1&id2=2',
            function (data) {  // success callback
                var result = data.getElementsByTagName('div')[1];
                console.log(result);
            });
    });
});
