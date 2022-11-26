const setTime = function () {
    var DateTime = new Date();
    var strYear = DateTime.getFullYear();
    var strMonth = DateTime.getMonth() + 1;
    var strDay = DateTime.getDate();
    var strHours = DateTime.getHours();
    var strMinutes = DateTime.getMinutes();
    var strSeconds = DateTime.getSeconds();
    var tagDiv = document.getElementById("time");
    tagDiv.innerText = "DD/MM/YYYY  HH:MM:SS";
    tagDiv.innerText = "🕑Current time: " + strDay + "/" + strMonth + "/" + strYear + "  " + strHours + ":" + strMinutes + ":" + strSeconds;
}

document.addEventListener('DOMContentLoaded', function() {
    setTime();
 });
window.setInterval(setTime, 1000);