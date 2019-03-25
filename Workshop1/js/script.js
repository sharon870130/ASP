$(document).ready(function () {
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


    var datas = new kendo.data.DataSource({
        data: [{ Id: 1, Name: "one" }, { Id: 2, Name: "two" }],
        pageSize: 20
    });

    $("#book").kendoGrid({
        dataSource: datas,
        height: 500,
        columns: [
            { field: "Id", title: "id", width: "50%" },
            { field: "Name", title: "Name", width: "50%" },
        ],
        sortable:true
    });
});
