/**
 * Created by WenryXu on 15/2/4.
 */

$('.ascii span').one('mouseover', function () {
    $(this).zclip({
        path:  'assert/js/ZeroClipboard.swf',
        copy: function () {
            return $(this).html();
        },
        beforeCopy: null,
        afterCopy: null,
        clickAfter: true,
        setHandCursor: true,
        setCSSEffects: true
    });
});

$('.ascii').on('mouseout', function () {
    $(this).css('color', '');
    $(this).css('margin-left', '');
});

$('.ascii').on('mouseenter', function () {
    $(this).css('color', '#f39c12');
    $(this).css('margin-left', '-5px');
});