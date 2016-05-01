var toggle = false;
var user="You";
var Chatbox = $(".userinput");

Chatbox.focus(function(){
    $(this).val(($(this).val()==searchBoxText)? '' : $(this).val());
}).blur(function(){
    $(this).val(($(this).val()=='')? searchBoxText : $(this).val());
}).keyup(function(e){
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code==13){
        $('.fixedContent').append("<span class=' user-side  pull-right'><span class='user pull-right'>"+user+"</span>"+$(this).val()+"</span><div class='clear'></div>");
        event.preventDefault();
        $(".fixedContent").scrollTop($(".fixedContent").height());
        $(this).val('');
    }
});

