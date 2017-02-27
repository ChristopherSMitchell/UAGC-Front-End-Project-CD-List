$(document).ready(function () {

    $('#modal').hide();

    $('#open').on('click', function () {
        $('#modal').fadeIn(500);
    });

    $('#close').on('click', function () {
        $('#modal').fadeOut(500);
    });
});