
//本地存储
// localStorage.setItem('users',JSON.stringify(stuDatas));
var getData = JSON.parse(localStorage.getItem('users'));
// console.log(getData);


//获取相关元素节点
var tableBody = document.getElementsByTagName('tbody')[0];
var pageBox = document.querySelector('#pageBox');
var currentPage = 1;
initTable();
//初始化页面默认状态
function initTable() {

    // getPageData(getData, 1, 10);

    render(getData, currentPage);

    getPages(getData.length, 10);

}

/**
 * 
 * @param {*} datas 渲染数据 
 * @param {*} index 页码 
 */
function render(datas, index) {
    var Data = '';
    // console.log(index);
    for (let i = (index - 1) * 10; i < currentPage * 10; i++) {
        // console.log(i);
        if (datas[i]) {
            Data += '<tr>' +
                '<td><input type="checkbox" class="check-list" data-index=' + i + '></td>' +
                '<td>' + datas[i].id + '</td>' +
                '<td>' + datas[i].name + '</td>' +
                '<td>' + datas[i].sexual + '</td>' +
                '<td>' + datas[i].age + '</td>' +
                '<td>' + datas[i].class + '</td>' +
                '<td class="caozuo"><a class="change" data-index=' + i + '>编辑</a><a class="del" data-index=' + i + '>删除</a></td>' +
                '<tr>'
        } else {
            break;
        }
    }
    // console.log(tableBody.innerHTML);
    tableBody ? tableBody.innerHTML = Data : '';
}

/**
 * 分页功能
 * @param {*} total 数据总条数
 * @param {*} perPage 每页的显示的条数
 */
function getPages(total, perPage) {
    var pages = Math.ceil(total / perPage);
    //添加页码
    var page = '';
    for (let i = 1; i <= pages; i++) {
        if (i == currentPage) {
            page += '<li class="active">' + i + '</li>';
        } else {
            page += '<li>' + i + '</li>';
        }
    }
    $('.page-nav').html(page);
}
/**
 * 
 * @param {*} arr 获取存放数据的数组 
 * @param {*} index 当前页码
 * @param {*} perPage 显示条数
 */
// function getPageData(arr, index, perPage) {
//     pageData = arr.slice((index - 1) * perPage, index * perPage)
// }

//翻页
$('.page-nav').on('click', 'li', function () {
    // getPageData(getData, Number($(this).html()), 10);
    $(this).addClass('active').siblings().removeClass('active');
    currentPage = $('li.active').html();
    // console.log(currentPage);
    render(getData, currentPage);
});

//显示添加数据modal
$('.add').on('click', function () {
    $('.add-mod').modal('show');
})

var insert = $('.insert');
insert.click(function () {
    var newId = $('#ids');
    var newName = $('#name');
    var sex = $('#sexual');
    var ages = $('#ages');
    var classes = $('#classes');

    getData.unshift({
        id: newId.val(),
        name: newName.val(),
        sexual: sex.val(),
        age: ages.val(),
        class: classes.val(),
    });
    localStorage.setItem('users', JSON.stringify(getData));

    // getData =  JSON.parse(localStorage.getItem('users'));
    // console.log(datas);
    initTable();
    $('.add-mod').modal('hide');
})
var first;
//删除数据
$(tableBody).on('click', '.del', function () {
    if (confirm('确定删除吗？')) {
        getData.splice($(this).data('index'), 1);
        localStorage.setItem('users', JSON.stringify(getData));
        first = (currentPage - 1) * 10;
        // console.log(first);
        if (!getData[first]) {
            currentPage--;
        }
        initTable();
    } else {
        return;
    };
})


var curentIndex;
//修改数据 --
$(tableBody).on('click', '.change', function () {
    $('.change-mod').modal('show');
    curentIndex = $(this).data('index');
    // console.log(curentIndex);

    var changeArr = [];
    $(this).parent().siblings().each(function (i, e) {
        changeArr.push($(e).text());
        // console.log(changeArr);
        // $('#c-ids').value = $(this).parent().siblings()[i].val();
    });
    for (let i = 0; i < 5; i++) {
        $('.change-mod input:eq(' + i + ')').val(changeArr[i + 1]);
    }
})

$('.modify').click(function () {
    if (confirm('确定修改吗？')) {
        getData[curentIndex].id = $('.change-mod input:eq(0)').val();
        getData[curentIndex].name = $('.change-mod input:eq(1)').val();
        getData[curentIndex].sexual = $('.change-mod input:eq(2)').val();
        getData[curentIndex].age = $('.change-mod input:eq(3)').val();
        getData[curentIndex].class = $('.change-mod input:eq(4)').val();
        localStorage.setItem('users', JSON.stringify(getData));
        initTable();
        $('.change-mod').modal('hide');
    } else {
        return;
    }
})

//全选,删除
// var state = false;
$('#all').click(function () {
    // console.log($(this));
    $('.check-list').prop('checked', $(this).prop('checked'));
})

$('.check-list').each(function (i) {
    $(this).click(function () {
        $('#all').prop('checked', false);
    })
})
$('.remove').click(function () {
    if (confirm('确定删除选中项吗？')) {
        var lis = document.querySelectorAll('.check-list');
        for (var i = lis.length - 1; i >= 0; i--) {
            // console.log($(this));
            if (lis[i].checked) {
                // console.log($('.check-list')[i].checked);
                getData.splice($(lis[i]).data('index'), 1);
                localStorage.setItem('users', JSON.stringify(getData));
                // console.log(first);
                first = (currentPage - 1) * 10;
                if (!getData[first]) {
                    currentPage--;
                }
            }
        }
        initTable();
    }

})


//筛选
$('.shaixuan').click(function () {
    // console.log(1);
    // var findName = $('.search input:eq(1)').val();
    // console.log($('#stuName').val());
    
    if($('#stuName').val() != ''){
        var finded = [];
        for(var i = 0; i < getData.length; i ++){
            if($('#stuName').val() == getData[i].name){
                finded.push(getData[i]);
            }
        }
        if(finded == ''){
            alert('未找到该学生信息！');
        }
        render(finded, currentPage);
        getPages(finded.length, 10);
    }else{
        alert('您还未输入需要筛选的名字！');
    }
})

