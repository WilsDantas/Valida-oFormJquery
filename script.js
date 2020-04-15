$("#name").focusout(function() {
    var name = $("#name").val();
    if(name.length >= 3){
        $('#msgname').css({display: 'none'});
    }else{
        $('#msgname').css({display: 'block'});
    }
})

$("#email").focusout(function() {
    var Email	= $("#email").val();
    var emailFilter = /^.+@.+\..{2,}$/;
    var illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]]/

    if(!(emailFilter.test(Email))||Email.match(illegalChars)){
        $('#msgemail').css({display: 'block'});
    }else{
        $('#msgemail').css({display: 'none'});
    }
})

$("#password").focusout(function() {
    var password = $("#password").val();
    if(password.length >= 8){
        $('#msgpassword').css({display: 'none'});
    }else{
        $('#msgpassword').css({display: 'block'});
    }
})

$("#confirmpassword").focusout(function() {
    var confirmpassword = $("#confirmpassword").val();
    var password = $("#password").val();
    if(confirmpassword == password){
        $('#msgconfirmpassword').css({display: 'none'});
    }else{
        $('#msgconfirmpassword').css({display: 'block'});
    }
})

$("#cadastre-se").click(function() {
    var check = $("#check").is(':checked');
    if(check){
        $('#msgcheck').css({display: 'none'});
    }else{
        $('#msgcheck').css({display: 'block'});
    }
    return false;
})
