
//文档加载事件
$(function () {
    $("#slider").slidebox({
        boxh: 420,//盒子的高度
        w: 1000,//图片的宽度
        h: 420,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });


    $(function () {
        $(".bookslider").slidebox({
            boxh: 218,//盒子的高度
            w: 330,//图片的宽度
            h: 218,//图片的高度
            isShow: true,//是否显示控制器
            isShowBtn: true,//是否显示左右按钮
            controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
            controlsW: 12,//控制按钮宽度
            controlsH: 12,//控制按钮高度
            radius: 6//控制按钮圆角度数
        });
    })
    $(function () {
        $(".childclothbox").slidebox({
            boxh: 336,//盒子的高度
            w: 430,//图片的宽度
            h: 336,//图片的高度
            isShow: true,//是否显示控制器
            isShowBtn: true,//是否显示左右按钮
            controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
            controlsW: 12,//控制按钮宽度
            controlsH: 12,//控制按钮高度
            radius: 6//控制按钮圆角度数
        });
    })
    $(function () {
        $(".clothbox").slidebox({
            boxh: 336,//盒子的高度
            w: 430,//图片的宽度
            h: 336,//图片的高度
            isShow: true,//是否显示控制器
            isShowBtn: true,//是否显示左右按钮
            controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
            controlsW: 12,//控制按钮宽度
            controlsH: 12,//控制按钮高度
            radius: 6//控制按钮圆角度数
        });
    })
    $(function () {
        $(".sportbox").slidebox({
            boxh: 336,//盒子的高度
            w: 430,//图片的宽度
            h: 336,//图片的高度
            isShow: true,//是否显示控制器
            isShowBtn: true,//是否显示左右按钮
            controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
            controlsW: 12,//控制按钮宽度
            controlsH: 12,//控制按钮高度
            radius: 6//控制按钮圆角度数
        });
    })
    //电子书模块选项卡
    $("#ebook .ebook-left .com-title li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active")
        let index = $(this).index();
        $("#ebook .ebook-left .con").eq(index).addClass("cur").siblings().removeClass("cur");
    })

    $("#cloth .com-title li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active")
        let index = $(this).index();
        $("#cloth .con").eq(index).addClass("cur").siblings().removeClass("cur");
    })

    $("#sport .com-title li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active")
        let index = $(this).index();
        $("#sport .con").eq(index).addClass("cur").siblings().removeClass("cur");
    })

    $("#childcloth .com-title li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active")
        let index = $(this).index();
        $("#childcloth .con").eq(index).addClass("cur").siblings().removeClass("cur");
    })
    /*
    新书畅销榜
    鼠标移入显示当前div 隐藏其他div 隐藏以自己的标题
    */
    $("#ebook .ebook-right ul li").mouseenter(function () {
        $(this).find("div").show();
        $(this).find(".title").hide();
        $(this).siblings().find("div").hide();
        $(this).siblings().find(".title").show();
    });



//楼层滚动导航
$(".floornav ul li").hover(function () {
    $(this).css({
        "backgroundColor": $(this).attr("bgc"),
        "backgroundPositionX": -40,
        width: 40
    });
}, function () {
    $(this).css({
        "backgroundColor": '',
        "backgroundPositionX": 0,
        width: 0
    });
}).click(function(){
    let $jumpBox=$(".floor").eq($(this).index());
    let top=$jumpBox.offset().top;
    $("html,body").stop().animate({scrollTop:top},300)
})

    $(window).scroll(function(){
        let st=$("html,body").scrollTop();
            if(st>=400){
                $(".topsearch").stop().slideDown();
                $("header .searchbox form").appendTo(".topsearch>div")
            }else{
                $(".topsearch").stop().slideUp();
                $(".topsearch>div form").appendTo("header .searchbox")
            }
        
    })
   
})


//  显示二维码
$(".cbl2").mouseenter(function () {
    $(".cbl4").css("display", "block");
});
$(".cbl2").mouseleave(function () {
    $(".cbl4").css("display", "none");
});


//窗口的卷动事件 
$(window).scroll(function () {
    // 获取到窗口卷动的值
    let st = document.documentElement.scrollTop || document.body.scrollTop

    if (st >= 1000) {
        returnTop.style.display = "block";
    } else {
        returnTop.style.display = "none";
    }
})
// 回到顶部
$("#returnTop").click(function () {
    //卷动的距离
    let st = document.documentElement.scrollTop || document.body.scrollTop;
    let time = 500 //500毫秒
    //速度
    let v = st / time;
    let timerId = setInterval(function () {
        st = document.documentElement.scrollTop || document.body.scrollTop;
        //剩余的滚动距离
        let newSt = st - v * 30;
        document.documentElement.scrollTop = newSt;
        document.body.scrollTop = newSt;
        if (newSt <= 0) {
            clearInterval(timerId);
        }
    }, 30)
})