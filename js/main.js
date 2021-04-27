window.addEventListener('scroll', function() {
    // Hide arrow button when scrolling down the page
    var scrollPosition = window.scrollY;
    var logoContainer = document.getElementsByClassName('arrow')[0];
    if (scrollPosition >= 100) logoContainer.classList.add('arrow--scrolled');
    else logoContainer.classList.remove('arrow--scrolled');
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

document.addEventListener('DOMContentLoaded', function() {
    if (getParameterByName('old')) {
        document.querySelector('head').innerHTML += '<link href="/css/classic.css" type="text/css" rel="stylesheet">';
    }
});
