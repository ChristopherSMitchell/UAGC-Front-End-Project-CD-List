var theRequest = new XMLHttpRequest();
theRequest.open('GET', 'server/main.json');
theRequest.onload = function () {
    if (theRequest.status >= 200 && theRequest.status < 400) {
        var data = JSON.parse(theRequest.responseText);
        createHTML(data);
    } else {
        console.log("Oops, Something went wrong!");
    }
};

theRequest.onerror = function () {
    console.log("Connection error");
};

theRequest.send();

function createHTML(albumsData) {
    var rawTemplate = document.getElementById('albumsTemplate').innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var theGeneratedHTML = compiledTemplate(albumsData);

    var albumsContainer = document.getElementById('albums-container');
    albumsContainer.innerHTML = theGeneratedHTML;

    $('.btn').on('click', openModal);
    $('.close').on('click', closeModal);

    function openModal() {
        /*var target = $(this).data('target');
        $(target).fadeIn(100, function () {
            $(this).find('.modal').fadeIn(100);
        });
        console.log(target);*/
        var artistId = $(this).data('id');
        var album = searchAlbums(artistId);
        console.log(album);

        var rawAlbumTemplate = document.getElementById('modalTemplate').innerHTML;
        var compiledAlbumTemplate = Handlebars.compile(rawAlbumTemplate);
        var theGeneratedAlbumHTML = compiledAlbumTemplate(album);

        var albumContainer = document.getElementById('modalContent');
        albumContainer.innerHTML = theGeneratedAlbumHTML;
        
        $('.modal').fadeIn();
    }

    function searchAlbums(artistName) {
        var albums = albumsData.albums;
        for (i = 0; i < albums.length; i++) {
            console.log(albums[i].artist);
            console.log(artistName);
            if (albums[i].artist == artistName) {
                return albums[i];
            }
        }
    }

    function closeModal() {
        $('.modal').fadeOut(100, function () {
            $('.overlay').fadeOut(100);
        });

        $(document).off('keyup', function () {
            $('.overlay').off('click', closeModal);
        });
    }

};