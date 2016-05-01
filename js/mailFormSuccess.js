$('.mail-form').submit(function(e) {
    $('#messages').removeClass('hide').addClass('alert alert-success alert-dismissible').slideDown().show();
    $('#messages_content ,#messages').html('<p><span class="custom-icon glyphicon glyphicon-ok"></span>Message sent ! Thanks for reaching out! Someone from our team will get back to you soon</p>').delay(1200).addClass("in").fadeOut(4500);
    e.preventDefault();
});

