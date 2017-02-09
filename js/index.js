$(function() {
    giveImg();

    function giveImg() {
        var $slideItems = $("#ad_carousel .item");
        $slideItems.each(function(key, element) {
            $element = $(element);
            var attr = $element.data("img");
            var url = "url('" + attr + "')";
            $element.css("background-image", url);
        });
    }
});