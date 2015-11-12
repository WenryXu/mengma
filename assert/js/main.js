/**
 * Created by WenryXu on 15/10/30.
 */
var drop;

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

clipboard.on('success', function (e) {
    drop = new Drop({
        target: e.trigger,
        content: 'Copied!',
        position: 'top center',
        openOn: '',
        classes: 'drop-theme-arrows-bounce-dark'
    });
    drop.open();
    setTimeout(function () {
        drop.close();
    }, 300);
});
