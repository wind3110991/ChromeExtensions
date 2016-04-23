function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

// httpRequest('http://127.0.0.1:8080/signup', function(){
//     //document.getElementById('ip_div').innerText = ip;
//     //var login_user =  $.cookie('loggin_user');
//     //alert(login_user);
// });

alert(window.location.href);