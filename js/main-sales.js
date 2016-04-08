//Bootstrap toggle Active
$(".btn-group > .btn").click(function(){
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
});


//Total Sales Amount Bar graph
$(function () {
    $('#total-year').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Total Sales Amount'
        },
        xAxis: {
            categories: ['2013', '2014'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Dollars ($)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valuePrefix: '$'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Year Total',
            data: [306456 , 290972 ]
        }]
    });
});

//Overall Quarter Sales Amount Line Graph
function quarter() {
    $('#quarter').highcharts({
        title: {
            text: 'Overall Quarter Sales',
            x: -20 //center
        },
        xAxis: {
            categories: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']
        },
        yAxis: {
            title: {
                text: 'Sales Amount ($)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valuePrefix: '$'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '2013',
            data: [84057 , 63215 , 82924 , 76260]
        }, {
            name: '2014',
            data: [66726 , 76493 , 85992 , 61761]
        }]
    });
};

//Call the overall quarter function
quarter();

//Overall Quarter Onclick handler 
$("#overall-qt").click(quarter);


//Overall SE Quarter Sales Line Graph
$("#se-qt").click(function () {
    $('#quarter').highcharts({
        title: {
            text: 'Regional Quarter Sales',
            x: -20 //center
        },subtitle: {
            text: 'South East',
            x: -20
        },
        xAxis: {
            categories: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']
        },
        yAxis: {
            title: {
                text: 'Sales Amount ($)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valuePrefix: '$'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '2013',
            data: [ 14013, 18600, 23353, 20756]
        }, {
            name: '2014',
            data: [ 18378, 22284, 24473, 16286]
        }]
    });
});


//Overall SW Quarter Sales
$("#sw-qt").click(function () {
    $('#quarter').highcharts({
        title: {
            text: 'Regional Quarter Sales',
            x: -20 //center
        },subtitle: {
            text: 'South West',
            x: -20
        },
        xAxis: {
            categories: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']
        },
        yAxis: {
            title: {
                text: 'Sales Amount ($)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valuePrefix: '$'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '2013',
            data: [ 23409, 13113, 17097, 21796]
        }, {
            name: '2014',
            data: [ 11436, 18152, 17919, 12747]
        }]
    });
});

//Overall NE Quarter Sales
$("#ne-qt").click(function () {
    $('#quarter').highcharts({
        title: {
            text: 'Regional Quarter Sales',
            x: -20 //center
        },subtitle: {
            text: 'North East',
            x: -20
        },
        xAxis: {
            categories: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']
        },
        yAxis: {
            title: {
                text: 'Sales Amount ($)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valuePrefix: '$'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '2013',
            data: [ 24149, 13119, 23284, 12697]
        }, {
            name: '2014',
            data: [ 21630, 19603, 23947, 22444]
        }]
    });
});

//Overall NW Quarter Sales
$("#nw-qt").click(function () {
    $('#quarter').highcharts({
        title: {
            text: 'Regional Quarter Sales',
            x: -20 //center
        },subtitle: {
            text: 'North West',
            x: -20
        },
        xAxis: {
            categories: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']
        },
        yAxis: {
            title: {
                text: 'Sales Amount ($)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valuePrefix: '$'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '2013',
            data: [ 22486, 18383, 19190, 21011]
        }, {
            name: '2014',
            data: [ 15282, 16454, 19653, 10284]
        }]
    });
});