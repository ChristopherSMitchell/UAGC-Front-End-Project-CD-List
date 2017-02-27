$(document).ready(function () {

    // Better Dayz
    $('#betterDayz').hide();
    
    $('#bdOpen').on('click', function () {
        $('#betterDayz').fadeIn(500);
    });

    $('#bdClose').on('click', function () {
        $('#betterDayz').fadeOut(500);
    });
    
    // Pacs Life
    $('#pacsLife').hide();
    
    $('#plOpen').on('click', function () {
        $('#pacsLife').fadeIn(500);
    });

    $('#plClose').on('click', function () {
        $('#pacsLife').fadeOut(500);
    });
    
});