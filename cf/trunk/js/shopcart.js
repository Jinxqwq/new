/***
 * 1 全选
 *    选中或者不选中子项目前面的复选框
 */

 $(
     function(){


$(".selall").click(function(){
    let bool=$(this).prop("checked");
   
    $(".singlechk,.selall").prop("checked",bool);
    totalPrice();
    totalNum();
})
/**
 * 子项目的选中状态来决定全选的选中状态
 * 分析：
 * 当点击其中一个子选项的复选框时，
 * 要遍历所有的子项目的复选框，只要其中有一个没有选择中，
 * 那么全选就不选中，否则就选中全选中
 * 
 * 第一种做法：使用标杆思想
 * 用一个变量来引导页面的元素的状态
 * 第一步：定义一个变量
 * 第二步：在程序中改变变量的值
 * 第三步：根据变量的值来决定页面元素的状态
 */
// let flag=true;//true表示选中 false表示不选中
// $("table .singlechk").click(function(){
//     $("table .singlechk").each(function(index,dom){
//         let bool=$(this).prop("checked")
//         // 当这个值为假时，没有选中时就要改变flag的值为假
//         if(!bool){
//             flag=false;
//             return;
//         }
//     })

//     // if(flag){
//     //     $(".selall").prop("checked",flag);
//     //     // flag=false;
//     // }else{
//     //     $(".selall").prop("checked",flag);
//     //     // flag=true;
//     // }
//     $(".selall").prop("checked",flag);
//     flag=!flag;
// })

//第二种方法：
/**
 * 子项目的选中状态来决定全选的选中状态
 * 如果选中子项目复选框的个数与所有子项目复选框的个数相同时，那么就全选，否则就不全选
 * 选中复选框的个数=$("table .singlechk:checked").length;
 * 所有子项目复选框的个数=$("table .singlechk").length;
 */
$("table .singlechk").click(function(){
    let singleNum=$("table .singlechk:checked").length;
    let singleAll=$("table .singlechk").length;
    if(singleNum===singleAll){
        $(".selall").prop("checked",true);
    }else{
        $(".selall").prop("checked",false);
    }
    totalPrice();
    totalNum();
})

/*
3 增加数量
分析：当点击事件发生时，取出文本框的值，然后自增1，最后要把修改后的值赋给文本框
*/
$("#shopcartarea table tbody .addbtn").click(function(){
    let num=$(this).siblings(".count").val()
    num++;//隐式类型转换
    $(this).siblings(".count").val(num);
    //小计
    singleTotalPrice(this,num);
    totalPrice();
    totalNum();

})
/*
减少数量
分析：当点击事件发生时，取出文本框的值，然后自减1，最后要把修改后的值赋给文本框
*/
$("#shopcartarea table tbody .reducebtn").click(function(){
    let num=$(this).siblings(".count").val()
    if(num>1){
        num--;//隐式类型转换
    }
    $(this).siblings(".count").val(num);
    //小计
    singleTotalPrice(this,num);
    totalPrice();
    totalNum();
  
})

function singleTotalPrice(obj,num){
//计算小计：数量  *  单价
    //单价
    let singleprice=$(obj).parent().siblings(".singleprice").html()
    //小计
    let singleTotalPrice=singleprice*num;//隐式类型转换
    //赋回页面
    $(obj).parent().siblings(".singleTotalPrice").html(singleTotalPrice.toFixed(2))
    
}

/**
 * 计算总价
 * 分析：应该计算所有选中单项的小计之和，显示在总价处。
 *       找出选中的单项，分别取取出对应的小计，然后相加
 */
    function totalPrice(){
        let sum=0;
        $("table .singlechk:checked").each(function(index,dom){
            let singleTotalPrice=$(dom).parent().siblings(".singleTotalPrice").html();
            sum+=parseFloat(singleTotalPrice);

        })
        //遍历结束得到总价
        $(".totalprice").html(sum.toFixed(2));
    }

/**
 * 计算总件数
 */
    function totalNum(){
        let a=0;
        $("table .singlechk:checked").each(function(index,dom){
            let b=$(dom).parent().siblings().find(".count").val();
            a+=parseFloat(b);
        });
        $(".totalnum").html(a.toFixed(2));
    }
    
/**
 * 删除单个商品
 */
    $(".delbtn").click(function(){
        $(this).parent().parent().remove();
        totalPrice();
    })
    $(".delallbtn").click(function(){
        $("table .singlechk:checked").each(function(index,dom){
            $(this).parent().parent().remove();
            totalPrice();
            totalNum();
        })
    })

/*改变数量的事件
*/
    $("#shopcartarea table tbody .count").keyup(function(){
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
        singleTotalPrice(this,num);
        totalPrice();
        totalNum();
    })
 
})
