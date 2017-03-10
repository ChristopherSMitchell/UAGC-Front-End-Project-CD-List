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

theRequest.onerror = function() {
    console.log("Connection error");
};

theRequest.send();

function createHTML(albumsData) {
    var rawTemplate = document.getElementById('albumsTemplate').innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var theGeneratedHTML = compiledTemplate(albumsData);
    
    var albumsContainer = document.getElementById('albums-container');
    albumsContainer.innerHTML = theGeneratedHTML;
};