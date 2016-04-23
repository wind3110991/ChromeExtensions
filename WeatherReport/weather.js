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

function showWeather(result){
    // result = JSON.parse(result);
    // var list = result.list;
    // for(var i in list){
    //     var d = new Date(list[i].dt*1000);
    //     table += '<tr>';
    //     table += '<td>'+d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+'</td>';
    //     table += '<td>'+list[i].weather[0].description+'</td>';
    //     table += '<td>'+Math.round(list[i].temp.min-273.15)+' °C</td>';
    //     table += '<td>'+Math.round(list[i].temp.max-273.15)+' °C</td>';
    //     table += '</tr>';
    // }
    document.getElementById('weather').innerHTML = result;
}

var city = localStorage.city;
city = city?city:'guangzhou';
//var url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+',china&lang=zh_cn';
var url = 'http://i.tianqi.com/index.php?c=code&id=19';
httpRequest(url, showWeather);