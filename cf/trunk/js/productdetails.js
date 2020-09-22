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

$("#buy .jia").click(function(){
    let num=$(this).siblings(".gw").val()
    num++;//隐式类型转换
    $(this).siblings(".gw").val(num);
})
$("#buy .jian").click(function(){
    let num=$(this).siblings(".gw").val();
    if(num>1){
        num--;//隐式类型转换
    }

    $(this).siblings(".gw").val(num);
})
$("#buy .gw").keyup(function(){
    let num=$(this).val();
    //判断：如果不是一个数字那么就改为1
    //如果不是一个数字，返回ture
    //如果是一个数字，返回false
    if(isNaN(num)){
        $(this).val(1);
        num=1;
    }
    if(num>200){
        $(this).val(200);
        num=200;
    }
})
$("#buy .pbbtn").click(function(){
    $(this).addClass("active").siblings().removeClass("active")
});
