
var bookDataFromLocalStorage = [];
var bookCategoryList = [
    { text: "資料庫", value: "database", src: "image/database.jpg" },
    { text: "網際網路", value: "internet", src: "image/internet.jpg" },
    { text: "應用系統整合", value: "system", src: "image/system.jpg" },
    { text: "家庭保健", value: "home", src: "image/home.jpg" },
    { text: "語言", value: "language", src: "image/language.jpg" }
];

// 載入書籍資料
function loadBookData() {
    bookDataFromLocalStorage = JSON.parse(localStorage.getItem('bookData'));
    if (bookDataFromLocalStorage == null) {
        bookDataFromLocalStorage = bookData;
        localStorage.setItem('bookData', JSON.stringify(bookDataFromLocalStorage));
    }
    
}

$(function () {
    loadBookData();
});




$(document).ready(function () {

    $("#add_book_window").hide();

    $("#book").kendoGrid({
        dataSource: {
            data: {
                "items": bookDataFromLocalStorage
            },
            schema: {
                data: "items"
            },
            pageSize: 20

        },
        height: 500,

        columns: [
            {
                template: "<button class='delete_book'>刪除</button>",
                field: "",
                title: ""
            },
            {
                field: "BookId",
                title: "書籍編號"
            },
            {
                field: "BookName",
                title: "書籍名稱",
            }, {
                field: "BookCategory",
                title: "書籍種類",
            }, {
                field: "BookAuthor",
                title: "作者",
            }, {
                field: "BookBoughtDate",
                title: "購買日期",
            }, {
                field: "",
                title: "送達狀態",
            }, {
                field: "BookPrice",
                title: "金額",
            }, {
                field: "BookAmount",
                title: "數量",
            }, {
                field: "BookTotal",
                title: "總計",
            },

        ]
    });


    $(".delete_book").kendoButton();



});

$("#add_book").click(function () {
    $("#add_book_window").kendoWindow({
    width: "600px",
    title: "新增書籍",
    visible: false,
    actions: [
        "Pin",
        "Minimize",
        "Maximize",
        "Close"
    ]
}).data("kendoWindow").center().open();
});
