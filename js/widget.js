$(document).ready(function(){

    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

});

$(document).ready(function(event) {
    $('.tab-cancel p').on('click', function(event){
        $('.widget-container').fadeOut('slow', function(event){
            $('.widget-container').remove();
        });
    });
});

$(document).ready(function() {
    $('.help-btn').click(function() {
        $('.widget-container').slideToggle("fast");
    });
});
