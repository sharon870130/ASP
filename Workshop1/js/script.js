
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
    $(".delete_book").kendoButton();
    $("#book").kendoGrid({
        toolbar: "<center><input type='text' class='k-input bgcolor' placeholder='輸入' id='search'></center>",
        dataSource: {
            data: bookData,
            pageSize: 20

        },
        columns: [
            {
                template: "<script>$('.delete_book').kendoButton();</script>" +
                    "<button class='delete_book'>刪除</button> ",
                field: "",
                title: "",
                width: "9%",
            },
            {
                field: "BookId",
                title: "書籍<br>編號",
                width: "6%",
            },
            {
                field: "BookName",
                title: "書籍名稱",
                width: "20%",
            }, {
                field: "BookCategory",
                title: "書籍<br>種類",
                width: "8%"
            }, {
                field: "BookAuthor",
                title: "作者",
                width: "10%"
            }, {
                field: "BookBoughtDate",
                title: "購買<br>日期",
                width: "8%",
            }, {
                field: "",
                title: "送達<br>狀態",
                width: "6%",
            }, {
                field: "BookPrice",
                title: "金額",
                width: "8%",
            }, {
                field: "BookAmount",
                title: "數量",
                width: "6%",
            }, {
                field: "BookTotal",
                title: "總計",
                width: "8%",
            },

        ],
        height: 550,
        sortable: true,
        pageable: {
            pageSize: 20,
            messages: {

                display: "顯示條目 {0}-{1} 共 {2}"
            }
        }
    });

    
    $(".delete_book").kendoButton();

    $("#search").keyup(function () {
       
    });

});

$(document).click(function () {
    $('.delete_book').kendoButton();
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

$(document).ready(function () {
    var selectedthing;
    $("#book_category").kendoDropDownList({
        dataSource: bookCategoryList,
        dataTextField: "text",
        dataValueField: "value",
       
    });
    
    $('#book_category').change(function () {
        $(".book-image").attr('src', 'image/' + $("#book_category").find(":selected").val() + '.jpg');
    });
    
});


$(document).ready(function () {
    $("#bought_datepicker").kendoDatePicker();
    $("#delivered_datepicker").kendoDatePicker();

    var price, amount;
    $("#book_price").keyup(function () {
        $("#book_total").text(($("#book_price").val())*($("#book_amount").val()));
    });

    $("#book_amount").keyup(function () {
        $("#book_total").text(($("#book_price").val()) * ($("#book_amount").val()));
    });






    var validator = $("#book_form").kendoValidator().data("kendoValidator"),
        status = $(".status");

    $("form").submit(function (event) {
        event.preventDefault();
        if (validator.validate()) {
            status.text("Hooray! Your tickets has been booked!")
                .removeClass("invalid")
                .addClass("valid");
        } else {
            status.text("Oops! There is invalid data in the form.")
                .removeClass("valid")
                .addClass("invalid");
        }
    });
});







