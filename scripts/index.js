$(document).ready(function () {
    $("#btnRun").click(function () {
        $.get('https://randomzack.twiggies.workers.dev/',
            function (data) {  // success callback
                var result = data.getElementsByTagName('div')[1];
                console.log(result);
            });
    });
});
