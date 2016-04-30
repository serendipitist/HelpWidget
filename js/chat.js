var toggle = false;
var user="You";
var fixIntv;
var fixedBoxsize = $('#fixed').outerHeight()+'px';
var Parent = $("#fixed"); // cache parent div
var Header = $(".fixedHeader"); // cache header div
var Chatbox = $(".userinput"); // cache header div

Chatbox.focus(function(){
    $(this).val(($(this).val()==searchBoxText)? '' : $(this).val());
}).blur(function(){
    $(this).val(($(this).val()=='')? searchBoxText : $(this).val());
}).keyup(function(e){
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code==13){
        $('.fixedContent').append("<div class='userwrap'><span class='user'>"+user+"</span><span class='messages'>"+$(this).val()+"</span></div>");
        event.preventDefault();

        $(".fixedContent").scrollTop($(".fixedContent").height());
        $(this).val('');
    }

});