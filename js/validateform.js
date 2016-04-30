/*$('.mail-form').submit(function(e) {
    $(".alert").delay(1000).addClass("in").fadeOut(4000);
    e.preventDefault();
});
*/

$('.mail-form').submit(function(e) {
    $('#messages').removeClass('hide').addClass('alert alert-success alert-dismissible').slideDown().show();
    $('#messages_content ,#messages').html('<h6>MESSAGE HERE</h6>').delay(1000).addClass("in").fadeOut(4000);
    e.preventDefault();
});

