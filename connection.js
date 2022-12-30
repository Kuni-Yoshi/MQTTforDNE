var websocket_host = null;
var websocket_port = null;
var mqtt_username = null;
var mqtt_password = null;

function loadCookie(){
    if(document.cookie == "") resetCookie();
    var result;
    websocket_host = (result= new RegExp('(?:^|; )' + encodeURIComponent("address") + '=([^;]*)').exec(document.cookie)) ? String(result[1]) : null;
    websocket_port = (result= new RegExp('(?:^|; )' + encodeURIComponent("port") + '=([^;]*)').exec(document.cookie)) ? String(result[1]) : null;
    mqtt_username = (result= new RegExp('(?:^|; )' + encodeURIComponent("username") + '=([^;]*)').exec(document.cookie)) ? String(result[1]) : null;
    mqtt_password = (result= new RegExp('(?:^|; )' + encodeURIComponent("password") + '=([^;]*)').exec(document.cookie)) ? String(result[1]) : null;
}
function saveCookie(){ //need four input elements
    document.cookie = "address=" + document.getElementById("address").value + "; max-age=157680000;"
    document.cookie = "port=" + document.getElementById("port").value + "; max-age=157680000;";
    document.cookie = "username=" + document.getElementById("username").value + "; max-age=157680000;"
    document.cookie = "password=" + document.getElementById("password").value + "; max-age=157680000;"
}
function resetCookie(){
    document.cookie = "address=" + (window.location.hostname!=""?window.location.hostname:"localhost") + "; max-age=157680000;";
    document.cookie = "port=8080; max-age=157680000;";
    document.cookie = "username=mqtt; max-age=157680000;";
    document.cookie = "password=(internal_default); max-age=157680000;";
}
