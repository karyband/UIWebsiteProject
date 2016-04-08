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
            text: null
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


//2013 Quarter Breakdown Pie Chart
function breakdown13() {
        $('#breakdown13').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: null
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Region',
                colorByPoint: true,
                data: [{
                    name: 'Quarter 1($84,057)',
                    y:  84057
                }, {
                    name: 'Quarter 2($63,215)',
                    y:  63215 
                }, {
                    name: 'Quarter 3($82,924)',
                    y:  82924 
                }, {
                    name: 'Quarter 4($76,260)',
                    y:  76260
                }]
            }]
        });
}

breakdown13();

//2013 Quarter Onclick Handler
$("#quarter-brkdwn13").click(breakdown13);

//2013 Regional Breakdown
$("#regional-brkdwn13").click(function () {
  $('#breakdown13').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: null
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Region',
                colorByPoint: true,
                data: [{
                    name: 'South East($76,722)',
                    y:  76722 
                }, {
                    name: 'South West($75,415)',
                    y:  75415 
                }, {
                    name: 'North East($73,249)',
                    y:  73249 
                }, {
                    name: 'North West($81,070)',
                    y:  81070
                }]
            }]
        });
});


//2014 Regional Sales Pie Chart
function breakdown14() {
        $('#breakdown14').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: null
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Region',
                colorByPoint: true,
                data: [{
                    name: 'Quarter 1($66,726)',
                    y:  66726
                }, {
                    name: 'Quarter 2($76,493)',
                    y:  76493 
                }, {
                    name: 'Quarter 3($85,992)',
                    y:  85992 
                }, {
                    name: 'Quarter 4($61,761)',
                    y:  61761
                }]
            }]
        });    
  }

breakdown14();

//Quarter 2014 Breakdown Onclick Handler
$("#quarter-brkdwn14").click(breakdown14);

$("#regional-brkdwn14").click(function () {
  $('#breakdown14').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: null
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Region',
                colorByPoint: true,
                data: [{
                    name: 'South East($81,421)',
                    y:  81421 
                }, {
                    name: 'South West($60,254)',
                    y:  60254 
                }, {
                    name: 'North East($87,624)',
                    y:  87624 
                }, {
                    name: 'North West($61,673)',
                    y:  61673
                }]
            }]
  });
});