// jQuery code to add hover to icons with links
$(document).ready(function () {
// this part adds a hover effect to the email icon when scrolled over
    $('.email').hover(function () {
        $(this).attr('src', 'img/hoveremail.png');
    }, function () {
        $(this).attr('src', 'img/email.png');
    });
});
// this part adds a hover effect to the linkedin icon when scrolled over
$('.linkedin').hover(function () {
    $(this).attr('src', 'img/linkedinhover.png');
}, function () {
    $(this).attr('src', 'img/linkedin.png');
});
// this part adds a hover effect to the tumblr icon when scrolled over
$('.tumblr').hover(function () {
    $(this).attr('src', 'img/tumblrhover.png');
}, function () {
    $(this).attr('src', 'img/tumblr.png');
});

// first jQuery plugin

// second jQuery plugin
