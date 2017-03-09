$(document).ready(function () {

    /* // Better Dayz
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
    }); */
    
    // Get Artist Name
    $.get('main.json', function (result) {
        
        var artist = result.artist.tupac.name;
        var title = result.artist.tupac.title1;
        
        for(var i = 0; i < artist.length; i++){
            var artist = artist[i];
        }
        
    });
    
    function testThis() {
        document.getElementById('test').innerHTML = "Artist: " + artist;
    }
    
});