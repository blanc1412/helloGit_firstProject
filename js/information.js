var bumenArr = [   //部门表
    {
        bumenId: "001",
        bumenName: '教务部',
        bumenLeader: "张三",
        count: 6
    },
    {
        bumenId: "002",
        bumenName: '财务部',
        bumenLeader: "李友乾",
        count: 2
    },
    {
        bumenId: "003",
        bumenName: '后勤部',
        bumenLeader: "王中旺",
        count: 8
    },
    {
        bumenId: "004",
        bumenName: '安保部',
        bumenLeader: "李广坤",
        count: 4
    },
];
var staffgArr = [   //职工表
    {
        bumenId: "004",
        staffgId: "043",
        staffName: "于照国",
        sex: "男",
        age: 40,
        phone: "13414578123",
        subject: "安保"
    }

];
var classArr = [
    {
        staffgId: "011",        //班级表职工ID，表示班主任
        classId: "001",
        className: "一年级一班",
        count: 36
    },
    {
        staffgId: "012",
        classId: "002",
        className: "一年级二班",
        count: 34
    },
    {
        staffgId: "014",
        classId: "003",
        className: "一年级三班",
        count: 34
    }
];
var studentArr = [
    {
        studentId: "001",
        studentName: "王小花",
        sex: "女",
        age: 6,
        className: "一年级三班",
    },
    {
        studentId: "002",
        studentName: "李天天",
        sex: "男",
        age: 6,
        className: "一年级一班",
    },
    {
        studentId: "003",
        studentName: "李罗",
        sex: "男",
        age: 7,
        className: "一年级一班",
    },
    {
        studentId: "004",         //学生表班级ID，表示所在班级
        studentName: "李逸",
        sex: "男",
        age: 7,
        className: "一年级一班",
    },
    {
        studentId: "005",         //学生表班级ID，表示所在班级
        studentName: "江晨熙",
        sex: "男",
        age: 6,
        className: "一年级二班",
    },
    {
        classId: "002",         //学生表班级ID，表示所在班级
        studentName: "杜文涛",
        sex: "男",
        age: 6
    },
    {
        classId: "002",         //学生表班级ID，表示所在班级
        studentName: "秋芯摇",
        sex: "男",
        age: 6
    },
    {
        classId: "002",         //学生表班级ID，表示所在班级
        studentName: "陈开元",
        sex: "男",
        age: 7
    },
    {
        classId: "002",         //学生表班级ID，表示所在班级
        studentName: "刘依曼",
        sex: "女",
        age: 6
    },
    {
        classId: "003",         //学生表班级ID，表示所在班级
        studentName: "杜俊毅",
        sex: "男",
        age: 7
    },
    {
        classId: "003",         //学生表班级ID，表示所在班级
        studentName: "刘一彤",
        sex: "女",
        age: 6
    },
    {
        classId: "003",         //学生表班级ID，表示所在班级
        studentName: "游兰",
        sex: "女",
        age: 6
    },
    {
        classId: "003",         //学生表班级ID，表示所在班级
        studentName: "张逸辰",
        sex: "男",
        age: 7
    },
    {
        classId: "003",         //学生表班级ID，表示所在班级
        studentName: "陈开齐",
        sex: "男",
        age: 7
    },
];
var stuDatas = [
    {
        id: '01',
        name: '欧阳倩',
        sexual: '女',
        age: '8',
        class: '三年二班',
    },
    {
        id: '02',
        name: '李修冉',
        sexual: '男',
        age: '8',
        class: '三年二班',
    },
    {
        id: '03',
        name: '冯跃',
        sexual: '女',
        age: '7',
        class: '三年二班',
    },
    {
        id: '04',
        name: '云天青',
        sexual: '男',
        age: '8',
        class: '三年二班',
    },
    {
        id: '05',
        name: '南宫煌',
        sexual: '男',
        age: '8',
        class: '三年二班',
    },
    {
        id: '06',
        name: '景天',
        sexual: '男',
        age: '8',
        class: '三年二班',
    },
    {
        id: '07',
        name: '云天河',
        sexual: '男',
        age: '8',
        class: '三年二班',
    },
    {
        id: '08',
        name: '穆迪',
        sexual: '男',
        age: '8',
        class: '三年二班',
    },
    {
        id: '09',
        name: '兰秀',
        sexual: '女',
        age: '8',
        class: '三年二班',
    },
    {
        id: '10',
        name: '伊芙',
        sexual: '女',
        age: '8',
        class: '三年二班',
    },
    {
        id: '11',
        name: '柯芮',
        sexual: '女',
        age: '9',
        class: '三年二班',
    },
    {
        id: '12',
        name: '景小楼',
        sexual: '男',
        age: '7',
        class: '三年二班',
    },
    {
        id: '13',
        name: '冯柯',
        sexual: '女',
        age: '9',
        class: '三年二班',
    },
    {
        id: '14',
        name: '萧索',
        sexual: '男',
        age: '9',
        class: '三年二班',
    },
    {
        id: '15',
        name: '南秀',
        sexual: '女',
        age: '8',
        class: '三年二班',
    },
    {
        id: '16',
        name: '卉慧',
        sexual: '女',
        age: '9',
        class: '三年二班',
    },
    {
        id: '17',
        name: '孔茜',
        sexual: '女',
        age: '8',
        class: '三年二班',
    },
    {
        id: '18',
        name: '黄不语',
        sexual: '男',
        age: '8',
        class: '三年二班',
    },
    {
        id: '19',
        name: '李白',
        sexual: '男',
        age: '7',
        class: '三年二班',
    },
    {
        id: '20',
        name: '霍尔',
        sexual: '男',
        age: '8',
        class: '三年二班',
    },
    {
        id: '21',
        name: '雪菜',
        sexual: '女',
        age: '9',
        class: '三年二班',
    },
    {
        id: '22',
        name: '姜小婉',
        sexual: '女',
        age: '8',
        class: '三年二班',
    },
    {
        id: '23',
        name: '屈晨',
        sexual: '男',
        age: '9',
        class: '三年二班',
    },
    {
        id: '24',
        name: '肖穆',
        sexual: '男',
        age: '8',
        class: '三年二班',
    },
    {
        id: '25',
        name: '田莉莉',
        sexual: '女',
        age: '8',
        class: '三年二班',
    },
    {
        id: '26',
        name: '顾思慧',
        sexual: '女',
        age: '8',
        class: '三年二班',
    },
    {
        id: '27',
        name: '卿熙',
        sexual: '男',
        age: '7',
        class: '三年二班',
    },
    {
        id: '28',
        name: '柯北',
        sexual: '男',
        age: '8',
        class: '三年二班',
    },
    {
        id: '29',
        name: '亚索',
        sexual: '男',
        age: '7',
        class: '三年二班',
    },
    {
        id: '30',
        name: '永恩',
        sexual: '男',
        age: '9',
        class: '三年二班',
    },
    {
        id: '31',
        name: '贝利尔',
        sexual: '男',
        age: '8',
        class: '三年二班',
    },
    {
        id: '32',
        name: '厄斐琉斯',
        sexual: '男',
        age: '8',
        class: '三年二班',
    },
    {
        id: '33',
        name: '野比君',
        sexual: '男',
        age: '8',
        class: '三年二班',
    },
];

var users = [
    {
        levelId: "001",
        user: 't1357',
        pw: '1234',
        name: '李校长',
        privacy: 1,
        beizhu: "超级管理员",
    },
    {
        levelId: "002",
        user: 'm1357',
        pw: '1234',
        name: '张老师',
        privacy: 2,
        beizhu: "班级管理员",
    },
    {
        levelId: "003",
        user: 's1357',
        pw: '1234',
        name: '李队长',
        privacy: 3,
        beizhu: "普通职工",
    },
    {
        levelId: "004",
        user: 't15647',
        pw: '1234',
        name: '李校长1',
        privacy: 1,
        beizhu: "超级管理员",
    },
    {
        levelId: "005",
        user: '2az357',
        pw: '1234',
        name: '李校长2',
        privacy: 1,
        beizhu: "超级管理员",
    },
    {
        levelId: "006",
        user: 'm4567',
        pw: '1234',
        name: '李校长3',
        privacy: 1,
        beizhu: "超级管理员",
    },
];
