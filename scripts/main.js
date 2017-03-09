// Production
var theRequest = new XMLHttpRequest();
theRequest.open('GET', 'main.json');
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

















// Testing
/*var pageCounter = 1;
var artistContainer = document.getElementById('artist-Info');
var btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    var theRequest = new XMLHttpRequest();
    theRequest.open('GET', 'main-' + pageCounter + '.json');
    theRequest.onload = function () {
        var theData = JSON.parse(theRequest.responseText);
        renderHTML(theData);
        pageCounter++;
        
        if(pageCounter > 5) {
            btn.classList.add('hide');
        }
    };

    theRequest.send();
});

function renderHTML(data) {
    htmlString = "";
    
    for(i = 0; i < data.albums.length; i++) {
        htmlString += "<p style=\"background-color:gray;padding:20px;font-size:32px;color:black\">" + data.albums[i].artist + " is an Artist in the " + data.albums[i].genre + " genre.</p>"
    }
    
    artistContainer.insertAdjacentHTML('beforeend', htmlString);
}*/