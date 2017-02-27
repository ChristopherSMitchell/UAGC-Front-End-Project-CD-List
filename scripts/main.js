$(document).ready(function () {

    $('#betterDayz').hide();

    $('#open').on('click', function () {
        $('#betterDayz').fadeIn(500);
    });

    $('#close').on('click', function () {
        $('#betterDayz').fadeOut(500);
    });
    
});