$(function() {
    $('.menu .item')
        .tab()
    ;

    // $('#list .ui.rating')
    //     .rating('disable')
    // ;

    // $('#review .ui.rating')
    //     .rating()
    // ;

    // $('#create .ui.rating')
    //     .rating()
    // ;

    // $('#create .ui.checkbox')
    //     .checkbox()
    // ;
    // $('#create .ui.radio.checkbox')
    //     .checkbox()
    // ;
    var finCanvas = document.getElementById('financial').getContext("2d");
    var finData = [
        {
            value: 2150807000,
            color:"#f39c12",
            highlight: "#f1c40f",
            label: "政務"
        },
        {
            value: 5837260000,
            color: "#2980b9",
            highlight: "#3498db",
            label: "教育科學文化"
        },
        {
            value: 2030015000,
            color: "#c0392b",
            highlight: "#e74c3c",
            label: "經濟發展"
        },
        {
            value: 2132917000,
            color: "#27ae60",
            highlight: "#2ecc71",
            label: "社會福利"
        },
        {
            value: 1326149000,
            color: "#16a085",
            highlight: "#1abc9c",
            label: "社區與環境"
        },
        {
            value: 2110240000,
            color: "#DD3745",
            highlight: "#2980b9",
            label: "退休撫卹"
        },
        {
            value: 1471375000,
            color: "#2c3e50",
            highlight: "#34495e",
            label: "警政"
        },
        {
            value: 18900000,
            color: "#bdc3c7",
            highlight: "#ecf0f1",
            label: "債務"
        },
        {
            value: 1249900000,
            color: "#d35400",
            highlight: "#e67e22",
            label: "其他"
        }
    ];
    var finPie = new Chart(finCanvas).Doughnut(finData, {
    });
});