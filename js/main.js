// jQuery code to add hover to linked icons
$(document).ready(function () {

    $('.email').hover(function () {
        $(this).attr('src', 'img/hoveremail.png');
    }, function () {
        $(this).attr('src', 'img/email.png');
    });
});
