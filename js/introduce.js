window.onload = function() {
    var f = document.getElementById("introduce-tab-btn");
    var btn = f.children;
    var div = document.getElementsByClassName("content-border");
    console.log(div);
    for (var i = 0; i < btn.length; i++) {
        btn[i].index = i;
        btn[i].onclick = function() {
            for (var i = 0; i < div.length; i++) {
                div[i].style.display = "none";
                btn[i].className = "col-sm-6 col-xs-6";
            }
            div[this.index].style.display = "block";
            btn[this.index].className = "col-sm-6 col-xs-6 active";

        }
    }
}