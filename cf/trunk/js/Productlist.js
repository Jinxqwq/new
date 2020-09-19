$(function () {
    $("#list").slidebox({
        boxh: 420,//盒子的高度
        w: 1200,//图片的宽度
        h: 390,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });

    $("#newbook .book-right ul li").mouseenter(function () {
        $(this).find(".box2").show();
        $(this).find(".title").hide();
        $(this).siblings().find(".box2").hide();
        $(this).siblings().find(".title").show();
    });

    $("#provide .com-title li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active")
        let index = $(this).index();
        $("#provide .con").eq(index).addClass("cur").siblings().removeClass("cur");
    });
    
    lunbox(".prolistslider", 520, 1200, 520)

    /* 
    selector:选择器
     boxh:盒子的高度
     w:图片的宽度
     h:图片的高度
     */
    function lunbox(selector, boxh, w, h) {
        $(selector).slidebox({
            boxh: boxh,//盒子的高度
            w: w,//图片的宽度
            h: h,//图片的高度
            isShow: true,//是否显示控制器
            isShowBtn: true,//是否显示左右按钮
            controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
            controlsW: 12,//控制按钮宽度
            controlsH: 12,//控制按钮高度
            radius: 6//控制按钮圆角度数
        });
    }
    

})
$(function () {

    //定义一个变量保存索引值
    let index = 0;
    // 单个盒子的高度
    let singleBoxHeight = $("#guess >.pro-con .proconbox").outerHeight(true);
    //获取初始的个数
    let boxLength = $("#guess >.pro-con .proconbox").length   //3

    //克隆第一个盒子添加到最后。
    $("#guess >.pro-con .proconbox").eq(0).clone(true).appendTo("#guess >.pro-con .box")

    console.log(" 单个盒子的高度", singleBoxHeight);
    //给a标签添加点击事件
    $("#guess .rightbox").click(function () {
        index++;
        //运动的距离
        let st = -(index * singleBoxHeight);

        console.log("运动的距离:", st, "当前索引：", index);


        // else{
        //动画完成之后判断是否是最后一个元素(是不是克隆的那个盒子) 
        $("#guess >.pro-con .box").stop().animate({ top: st }, 200, function () {
            //4  3
            //当是最后一个盒子时，就立即回到第一个盒子。
            //这一瞬间用户是看不到的
            if (index === boxLength) {
                index = 0;
                $("#guess .box").css("top", index);
            }
        });
       
    });
})
