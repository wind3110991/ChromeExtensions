chrome.cookies.get({
    url: 'https://github.com',
    name: 'wind3110991'
}, function(cookie){
    console.log(cookie.value);
});