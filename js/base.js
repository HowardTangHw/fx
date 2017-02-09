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
            qqcall[i].innerHTML = '<a target="_blank" class="btn btn-lg btn-page-banner" href="tel:13824637212" role="button">马上联系我们!</a>';
            qqcall[0].innerHTML = '<a target="_blank" class="nav-call" href="tel:13824637212" role="button">马上联系我们!</a>';
        } else {
            qqcall[i].innerHTML = '<a target="_blank" class="btn btn-lg btn-page-banner" href="http://wpa.qq.com/msgrd?v=3&uin=241639308&site=qq&menu=yes" role="button">马上联系我们!</a>';
            qqcall[0].innerHTML = '<a target="_blank" class="nav-call" href="http://wpa.qq.com/msgrd?v=3&uin=241639308&site=qq&menu=yes" role="button">马上联系我们!</a>';
        }
    }

}