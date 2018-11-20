(function (window, document){

// Check for addEventListener browser support (prevent errors in IE<9)
var _eventListener = 'addEventListener' in window;

// Check if document is loaded, needed by autostart
var _DOMReady = false;
if ( document.readyState === 'complete' ) {
    _DOMReady = true;
} else if  ( _eventListener ) {
    window.addEventListener('load', loaded, false);
}

function loaded () {
    window.removeEventListener('load', loaded, false);
    _DOMReady = true;
}

// regex used to detect if app has been added to the homescreen
var _reSmartURL = /\/ath(\/)?$/;
var _reQueryString = /([\?&]ath=[^&]*$|&ath=[^&]*(&))/;

// singleton
var _instance;
function ath (options){
    _instance = _instance || new ath.Class(options);

    return _instance;
}

// message in all supported languages
ath.intl = {
    fr_fr: {
        ios: 'Pour ajouter cette application web sur l\'écran d\'accueil',
        android: 'Pour ajouter cette application web sur l\'écran d\'accueil'
    }
    
}


})