// jQuery code to add hover to linked icons
$(document).ready(function () {

    $('.email').hover(function () {
        $(this).attr('src', 'img/hoveremail.png');
    }, function () {
        $(this).attr('src', 'img/email.png');
    });
});

$('.linkedin').hover(function () {
		$(this).attr('src', 'img/linkedinhover.png');
}, function () {
		$(this).attr('src', 'img/linkedin.png');
});

$('.tumblr').hover(function () {
		$(this).attr('src', 'img/tumblrhover.png');
}, function () {
		$(this).attr('src', 'img/tumblr.png');
});
