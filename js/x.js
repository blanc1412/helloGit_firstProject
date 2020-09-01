var datas = [
    {
        id:1234,
        name:'hz',
        sex:'male',
        state:'无',
        tel:'13888'
    },
    {
        id:1235,
        name:'zc',
        sex:'male',
        state:'无',
        tel:'13188'
    },
    {
        id:1236,
        name:'naz',
        sex:'female',
        state:'无',
        tel:'13000'
    },
    {
        id:1238,
        name:'zard',
        sex:'female',
        state:'无',
        tel:'159000'
    }
]

var currentPage = 1;
$(function (){
    showData(); //显示数据
    delEvent();
    addEvent();
    changePage();
    showPages();
    editorEvent()
})


function showData(){
    //每次渲染页面前先清空之前渲染的的页面，否则会重复显示！
    $('#tbDatas').html('');
    for(var i = (currentPage - 1) * 3; i < currentPage * 3; i ++){
        if(datas[i]){
        $('#tbDatas').append('<tr>'+
        '<td>' + datas[i].id + '</td>'+
        '<td>' + datas[i].name + '</td>'+
        '<td>' + datas[i].sex + '</td>'+
        '<td>' + datas[i].state + '</td>'+
        '<td>' + datas[i].tel + '</td>'+
        '<td><i class="btnDel glyphicon glyphicon-trash" data-index=' + i + '></i><i class="btnEdi glyphicon glyphicon-pencil" data-index=' + i + '></i></td>'+
        '</tr>'
        )
        }
    }
}

//删除数据  ----  事件委派
function delEvent(){
    $('#tbDatas').on('click','.btnDel',function(){
        datas.splice($(this).data('index'),1);
        var first = (currentPage - 1) * 3;
        if(!datas[first]){
            currentPage --;
        }
        showPages();
        showData();
    })
}

//添加数据   -----  模态框
function addEvent(){
    $('#addData').click(function(){
        $('.add-mod').modal('show');
        })
    $('.insert').click(function(){
        // console.log($('#idCard').val());
        //获取文本框输入值
        let id = +$('#idCard').val();
        let name = $('#name').val();
        let sex = $('#sex').val();
        let state = $('#state').val();
        let tel = $('#tel').val();
        //新添一条数据对象放入数据数组中，隐藏modal
        newData = {
            id:id,
            name:name,
            sex:sex,
            state:state,
            tel:tel
        }
        // console.log(newData);
        datas.unshift(newData);
        // console.log(datas);
        showPages();
        showData();
        // console.log(datas);
        $('.add-mod').modal('hide');
        }
    )}

    //页码功能
    
    // console.log(total,perPage,pages)
    
    function showPages(){
        var [total,perPage,pages] = [datas.length,3,0];
        pages = Math.ceil(total / perPage);
        console.log(pages);
        var page = '';
        for(let i = 1; i <= pages; i ++){
            if(i == currentPage){
                page += '<button class="btn btn-primary">'+ i +'</button>';
            }else{
                page +='<button class="btn">'+ i +'</button>'
            }
        }
        $('#pageNav').html(page);
        // console.log(page);
        // console.log($('#pageNav button'));
    }

    
    function changePage(){
        $('#pageNav').on('click','button',function(){
            // console.log($(this));
            currentPage = $(this).text();
            // console.log(currentPage);
            $('#pageNav button').removeClass('btn-primary');
            $(this).addClass('btn-primary');
            
            
            showData();
        })
    }

    //修改数据
    function editorEvent(){
        $('#tbDatas').on('click','.btnEdi',function(){
            // console.log($('.btnEdi'));
            $('.add-mod').modal('show');
            var id = $(this).data('index');
            // console.log(id);
            for(let i = 0; i < datas.length; i++){
                if(datas[i] == id){
                    +$('#idCard').val(datas[i].id);
                    $('#name').val(datas[i].name);
                    $('#sex').val(datas[i].sex);
                    $('#state').val(datas[i].state);
                    $('#tel').val(datas[i].tel);
                    break;
                }
            }
        })
    }