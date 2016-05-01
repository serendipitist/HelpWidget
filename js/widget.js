$(document).ready(function(){
    $('ul.tabs li + li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });
    $('.tab-cancel p').on('click', function(event){
        $('.widget-container').fadeOut('slow', function(event){
            $('.widget-container').hide();
        });
    });
    $('.help-btn').click(function() {
        $('.widget-container').toggle();
    });

    $('.mail-form').submit(function(e) {
        $('#messages').removeClass('hide').addClass('alert alert-success alert-dismissible').slideDown().show();
        $('#messages_content ,#messages').html('<p><span class="custom-icon glyphicon glyphicon-ok"></span>Message sent ! Thanks for reaching out! Someone from our team will get back to you soon</p>').delay(1200).addClass("in").fadeOut(4500);
        e.preventDefault();
    });
});


