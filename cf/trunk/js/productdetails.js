$("#bottombox .right .spbtn").click(function(){
    $("#bottombox .right .pingjia").addClass("hide");
    $(this).addClass("active").siblings().removeClass("active");
    $("#bottombox .right .spjs").removeClass("hide");
})
$("#bottombox .right .pjbtn").click(function(){
    $("#bottombox .right .spjs").addClass("hide");
    $(this).addClass("active").siblings().removeClass("active");
    $("#bottombox .right .pingjia").removeClass("hide");
})
