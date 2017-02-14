window.onload = function() {
    var winWidth = "";
    if (window.innerWidth) {
        winWidth = window.innerWidth;
    } else if ((document.body) && (document.body.clientWidth)) {
        winWidth = document.body.clientWidth;
    }
    var qqcall = document.getElementsByClassName("qqcall");
    for (var i = 0; i < qqcall.length; i++) {
        if (winWidth < 768) {
            qqcall[i].innerHTML = '<a target="_blank" class="btn btn-lg btn-page-banner" href="tel:13824633523" role="button"><span class="glyphicon glyphicon-earphone"></span>马上联系我们!</a>';
        } else {
            qqcall[1].innerHTML = '<a target="_blank" class="btn btn-lg btn-page-banner" href="http://wpa.qq.com/msgrd?v=3&uin=241639308&site=qq&menu=yes" role="button"><span class="glyphicon glyphicon-earphone"></span>马上联系我们!</a>';
        }
    }

}