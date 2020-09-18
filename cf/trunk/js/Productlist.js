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

    $("#djtg .com-title li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active")
        let index = $(this).index();
        $("#djtg .con").eq(index).addClass("cur").siblings().removeClass("cur");
    })
})
