window.onload=function() {
    var notification=document.getElementById("notification");
        notification.style.display="block";


    document.getElementById("ok-button").addEventListener("click",
        function() {
            notification.style.display="none";
        });
};