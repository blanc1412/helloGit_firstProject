/*
 * @Author: your name
 * @Date: 2020-08-05 20:29:27
 * @LastEditTime: 2020-08-05 22:50:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edito
 * @FilePath: \myWork\js\login.js
 */
//创建不同权限用户数组对象



//点击登录，匹配帐号和密码，以及错误提示
$('.btn-login').click(function(){
    var user = $('input[name="user"]').val();
    var pw = $('input[type="password"]').val();
    var privacyFlag = 0;
    $.each(users,function(i,obj){
        if(user == obj.user && pw == obj.pw){
            privacyFlag = obj.privacy;
            localStorage.setItem('currentUser',obj.user)
        }
    })
    if(privacyFlag){
        location.href = '../page/home.html#'+privacyFlag;
    }else{
        $('.login').css('height','420px')
        $('.errorInfo').fadeIn(200);
    }
})
// var privacy = users[localStorage.getItem('currentUser')];

// var index = localStorage.getItem('currentUser');
// var str = users[index].name + ','+ '已登录';
// $('#admin').html(str);

