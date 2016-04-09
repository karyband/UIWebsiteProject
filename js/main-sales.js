//Jquery file for the sales.html functionality and Highchart charts and graphs
//Jquery is needed for Highcharts

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
                name: 'Quarter',
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


//2013 Manager Average Breakdown
$("#manager-brkdwn13").click(function () {
 $('#breakdown13').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Average Total Sales under Regional Manager'
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
                name: 'Regional Manager',
                colorByPoint: true,
                data: [{
                    name: 'Leonardo($22,054.50)',
                    y:  22054.50
                }, {
                    name: 'Paul($18,312.25)',
                    y:  18312.25 
                }, {
                    name: 'Michelangelo($21,796)',
                    y:  21796 
                },{
                    name: 'Raphael($19,528)',
                    y:  19528
                }, {
                    name: 'Ringo($22,486)',
                    y:  22486
                },{
                    name: 'John($16306.5)',
                    y:  16306.5
                },{
                    name: 'George($17,873)',
                    y:  17873
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
                name: 'Quarter',
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

//2014 Quarter Breakdown Onclick Handler
$("#quarter-brkdwn14").click(breakdown14);

//2014 Regional Breakdown
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
            /*Regional Managers are listed by reoccuring managers first. 
            This enables the recurring objects to be the 
            same color on other charts.*/
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

//2014 Manager Average Breakdown
$("#manager-brkdwn14").click(function () {
  $('#breakdown14').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Average Total Sales under Regional Manager'
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

            /*Regional Managers are listed by reoccuring managers first, in the
            same order as 2013. This enables the recurring objects to be the 
            same color on other charts.*/
            series: [{
                name: 'Regional Manager',
                colorByPoint: true,
                data: [{
                    name: 'Leonardo($20,331)',
                    y:  20331
                }, {
                    name: 'Paul($21,906)',
                    y:  21906  
                }, {
                    name: 'Michelangelo($15,063.50)',
                    y:  15063.50 
                },{
                    name: 'Raphael($15,418.25)',
                    y:  15418.25
                }, {
                    name: 'Donatello($20,379.50)',
                    y:  20379.50
                }]
            }]
        });
  });



function john(){$(function () {
      $('#manager').highcharts({
          chart: {
              type: 'bar'
          },
          title: {
              text: 'Total: $32,613'
          },
          subtitle: {
              text: null
          },
          xAxis: {
              categories: ["John"],
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
          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'top',
              x: -40,
              y: 80,
              floating: false,
              borderWidth: 1,
              backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
              shadow: true
          },
          credits: {
              enabled: false
          },
          series: [{
              name: '2013 Quarter 1',
              data: [14013]
          }, {
              name: '2013 Quarter 2',
              data: [18600]
          }]
      });
  });
}

//John
john();
$("#john-bt").click(john);

//Leonardo
$("#leonardo-bt").click(function () {
    $('#manager').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Total: $44,109'
        },
        subtitle: {
            text: null
        },
        xAxis: {
            categories: ["Leonardo"],
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
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: false,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '2013 Quarter 3',
            data: [23353]
        }, {
            name: '2013 Quarter 4',
            data: [20756]
        },{
            name: '2014 Quarter 1',
            data: [18378]
        }, {
            name: '2014 Quarter 2',
            data: [22284]
        }]
    });
});

//Paul
$("#paul-bt").click(function () {
    $('#manager').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Total: $160,873'
        },
        subtitle: {
            text: null
        },
        xAxis: {
            categories: ["Paul"],
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
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: false,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '2013 Quarter 1',
            data: [24149]
        }, {
            name: '2013 Quarter 2',
            data: [13119]
        },{
            name: '2013 Quarter 3',
            data: [23284]
        }, {
            name: '2013 Quarter 4',
            data: [12697]
        },{
            name: '2014 Quarter 1',
            data: [21630]
        }, {
            name: '2014 Quarter 2',
            data: [19603]
        },{
            name: '2014 Quarter 3',
            data: [23947]
        }, {
            name: '2014 Quarter 4',
            data: [22444]
        }]
    });
});


$("#raphael-bt").click(function () {
    $('#manager').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Total: $120,257'
        },
        subtitle: {
            text: null
        },
        xAxis: {
            categories: ["Raphael"],
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
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: false,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '2013 Quarter 2',
            data: [18383]
        },{
            name: '2013 Quarter 3',
            data: [19190]
        }, {
            name: '2013 Quarter 4',
            data: [21011]
        },{
            name: '2014 Quarter 1',
            data: [15282]
        }, {
            name: '2014 Quarter 2',
            data: [16454]
        },{
            name: '2014 Quarter 3',
            data: [19653]
        }, {
            name: '2014 Quarter 4',
            data: [10284]
        }]
    });
});

//Donatello
$("#don-bt").click(function () {
    $('#manager').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Total:  $40,759'
        },
        subtitle: {
            text: null
        },
        xAxis: {
            categories: ["Donatello"],
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
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: false,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '2014 Quarter 3',
            data: [24473]
        }, {
            name: '2014 Quarter 4',
            data: [16286]
        }]
    });
});

$("#ringo-bt").click(function () {
    $('#manager').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Total:  $40,759'
        },
        subtitle: {
            text: null
        },
        xAxis: {
            categories: ["Ringo"],
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
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: false,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '2013 Quarter 1',
            data: [22486]
        }]
    });
});

$('#mich-bt').click(function () {
    $('#manager').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Total: $82,050 '
        },
        subtitle: {
            text: null
        },
        xAxis: {
            categories: ["Michelangelo"],
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
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: false,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '2013 Quarter 4',
            data: [21796]
        },{
            name: '2014 Quarter 1',
            data: [11436]
        }, {
            name: '2014 Quarter 2',
            data: [18152]
        },{
            name: '2014 Quarter 3',
            data: [17919]
        }, {
            name: '2014 Quarter 4',
            data: [12747]
        }]
    });
});

$("#george-bt").click(function () {
    $('#manager').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Total: $53,619 '
        },
        subtitle: {
            text: null
        },
        xAxis: {
            categories: ["George"],
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
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: false,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '2013 Quarter 1',
            data: [23409]
        }, {
            name: '2013 Quarter 2',
            data: [13113]
        },{
            name: '2013 Quarter 3',
            data: [17097]
        }]
    });
});