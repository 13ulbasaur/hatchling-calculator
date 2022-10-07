$(document).ready(function () {
    $("#btnRun").click(function () {
        $.get('https://flightrising.com/includes/ol/scryer_bloodlines.php?id1=1&id2=2',
            function (data) {  // success callback
                var result = data.getElementsByTagName('div')[1];
                console.log(result);
            });
    });
});
