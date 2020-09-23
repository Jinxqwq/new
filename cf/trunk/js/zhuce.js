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
                hqyzm:{
                    required: true,
                },
                yanzheng:{
                    required: true,
                }


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
                hqyzm: {
                    required: "请输入手机验证码",
                },
                yanzheng: {
                    required: "请输入验证码",
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

    $("#zc .hqyzm").click(function () {
        var time = 60;
        var timer = setInterval(function(){
            time--;
            $("#zc .hqyzm").html("（"+time+"秒）重发");
            if(time==0){
                clearInterval(timer);
                $("#zc .hqyzm").text("获取验证码");
            }
        },1000);
    });



});