//财经登陆地址
if("http://i.finance.sina.com.cn/login.html?from=http%3A%2F%2Fi.finance.sina.com.cn%2Fzixuan%2Cstock%26from%3Dxzxg_tg"==location.href){
   debugger
   
   if(document.getElementById("name")){
        document.getElementById("name").value="13414333221";
        document.getElementById("pwd").value="iwen13414333221";
        document.getElementById("login").click();
    }
}
//我的财经
if("http://i.finance.sina.com.cn/zixuan,stock"==location.href){
     console.log($(".index>span").text());
     /*$(".block").remove();
      $.post("url"+$(".index>span").text(),
        {name:"xx", city:"xx"},
        function(data,status){
            alert("数据抓取成功");
        });*/
}

/*    if(document.getElementById("loginform-username")){
        document.getElementById("loginform-username").value="18878792844";
        document.getElementById("loginform-password").value="516171";
        document.getElementById("login").click();
    }*/

/*    window.setInterval(function(){


        if("http://member.g-emall.com/user/login"!=location.href){
           window.location.href='http://seller.g-emall.com/goods/one';
        }

    }, 100);*/



