window.onload = function() {
    var f = document.getElementById("introduce-tab-btn");
    var btn = f.children;
    var div = document.getElementsByClassName("content-border");
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
    var winWidth = "";
    if (window.innerWidth) {
        winWidth = window.innerWidth;
    } else if ((document.body) && (document.body.clientWidth)) {
        winWidth = document.body.clientWidth;
    }
    var qqcall = document.getElementsByClassName("qqcall");
    for (var i = 0; i < qqcall.length; i++) {
        if (winWidth < 768) {
            qqcall[i].innerHTML = '<a target="_blank" class="btn btn-lg btn-page-banner" href="tel:13824637212" role="button"><span class="glyphicon glyphicon-earphone"></span>马上联系我们!</a>';
        } else {
            qqcall[1].innerHTML = '<a target="_blank" class="btn btn-lg btn-page-banner" href="http://wpa.qq.com/msgrd?v=3&uin=241639308&site=qq&menu=yes" role="button"><span class="glyphicon glyphicon-earphone"></span>马上联系我们!</a>';

        }
    }
}