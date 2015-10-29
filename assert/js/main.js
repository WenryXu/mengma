/**
 * Created by WenryXu on 15/10/30.
 */

$('.ascii span').on('mouseenter', function () {
    $(this).css('color', '#f39c12');
    $(this).parent('.ascii').css('margin-left', '-5px');
});

$('.ascii span').on('mouseout', function () {
    $(this).css('color', '');
    $(this).parent('.ascii').css('margin-left', '');
});

var clipboard = new Clipboard('.ascii span', {
    text: function (trigger) {
        $(trigger).css('color', '#40d47e');
        return $(trigger).html();
    }
});
