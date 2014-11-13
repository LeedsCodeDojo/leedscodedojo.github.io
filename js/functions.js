function adjustImage() {
    var current_img_height = $("#mainIdentImage").height();
    var current_img_width = $("#mainIdentImage").width();
    if (current_img_width < 1661 && current_img_width > 615) {
        $('.mainIdent').css('height',current_img_height);
    } else if (current_img_width < 615)  {
        $('.mainIdent').css('height',40);
    } else {
        $('.mainIdent').css('height',487);
    }
};
$(document).ready(function(){
    adjustImage();
});
$(window).resize(function(){
    adjustImage();
});