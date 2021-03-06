$("#denglu .saoma").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $("#denglu .bbox").show().siblings().hide();
})

$("#denglu .zhanghu").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $("#denglu .zhbox").show().siblings().hide();
})

// $("#denglu .bbox .smdl").mouseenter(function(){
//     $("#denglu .bbox .eym").show();
// })
// $("#denglu .bbox .smdl").mouseleave(function(){
//     $("#denglu .bbox .eym").hide();
// })
 // 登录二维码移入移出事件
 $("#denglu .bbox .smdl").hover(function(){
    $(this).stop().animate({right:8+'px'},1000);
    $("#denglu .bbox .eym").stop(true).fadeIn(1000);
},function(){
    $(this).stop().animate({right:110+'px'},1000);
    $("#denglu .bbox .eym").stop(true).fadeOut(1000);
});

$().ready(function () {
    // 在键盘按下并释放及提交后验证提交表单
    $("#signupForm").validate(
        {
            // 验证规则 
            rules: {

                username: {
                    required: true,
                    //自定义的规则
                    myUser: true
                },
                pwd: {
                    required: true,
                    myPwd: true

                },
                repwd: {
                    required: true,
                    myPwd: true,
                    equalTo: "#pwd"
                },
                phone: {
                    required: true,
                    isZipCode: true,
                },
                sex:{
                    required: true,
                },
                sm:{
                    required: true,
                },
                xia:{
                    required: true,
                    isxia:true,
                },


            },
            //提示信息
            messages: {

                username: {
                    required: "用户名必填",
                },
                pwd: {
                    required: "密码必填",

                },
                repwd: {
                    required: "请输入密码",
                    equalTo: "两次密码输入不一致"
                },
                phone: {
                    required: "请输入手机号",
                },


            }
        }
    )

    jQuery.validator.addMethod("myUser", function (value, element) {
        var tel = /^[A-Za-z0-9_]{4,10}$/;
        return this.optional(element) || (tel.test(value));
    }, "请输入正确的用户名");
    jQuery.validator.addMethod("myPwd", function (value, element) {
        var tel = /^[A-Za-z0-9_]{6,12}$/;
        return this.optional(element) || (tel.test(value));
    }, "请输入正确的密码");




});