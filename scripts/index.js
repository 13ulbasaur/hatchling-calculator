$(document).ready(function () {
    $("#btnRun").click(function () {
//$.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('https://google.com',) + '&callback=?', function(data){
	//alert(data.contents);
//});
        $.get('https://flightrising.com/main.php?p=scrying&view=bloodlines',
            function (data) {  // success callback
                var result = data.getElementsByTagName('div')[1];
                console.log(result);
            });
    });
});
