'use strict';

$(document).ready(function() {
    widgetChart();

    /*Area chart*/
    function widgetChart() {
        var ctx = document.getElementById('amount-processed').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: amuntchart('rgb(70, 128, 254)', [25, 35, 45, 20, 25, 30, 15, 45, 15, 1], 'rgb(70, 128, 254)'),
            options: buildchartoption(),
        });
        var ctx = document.getElementById('amount-spent').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: amuntchart('rgb(252, 97, 128)', [20, 35, 30, 25, 35, 45, 15, 45, 15, 1], 'rgb(252, 97, 128)'),
            options: buildchartoption(),
        });
        var ctx = document.getElementById('profit-processed').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: amuntchart('rgb(255, 182, 77)', [1, 15, 45, 15, 25, 35, 45, 20, 25, 30], 'rgb(255, 182, 77)'),
            options: buildchartoption(),
        });
        function amuntchart(a, b, f) {
            if (f == null) {
                f = "rgba(0,0,0,0)";
            }
            return {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
                datasets: [{
                    label: "",
                    borderColor: a,
                    borderWidth: 2,
                    hitRadius: 30,
                    pointHoverRadius: 4,
                    pointBorderWidth: 50,
                    pointHoverBorderWidth: 12,
                    pointBackgroundColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
                    pointBorderColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
                    pointHoverBackgroundColor: a,
                    pointHoverBorderColor: Chart.helpers.color("#000000").alpha(.1).rgbString(),
                    fill: true,
                    backgroundColor: f,
                    data: b,
                }]
            };
        }
        function buildchartoption() {
            return {
                title: {
                    display: !1
                },
                tooltips: {
                    enabled: !1,
                    intersect: true,
                    mode: "nearest",
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                legend: {
                    display: !1,
                    labels: {
                        usePointStyle: !1
                    }
                },
                responsive: !0,
                maintainAspectRatio: !0,
                hover: {
                    mode: "index"
                },
                scales: {
                    xAxes: [{
                        display: !1,
                        gridLines: !1,
                        scaleLabel: {
                            display: !0,
                            labelString: "Month"
                        }
                    }],
                    yAxes: [{
                        display: !1,
                        gridLines: !1,
                        scaleLabel: {
                            display: !0,
                            labelString: "Value"
                        },
                        ticks: {
                            beginAtZero: !0
                        }
                    }]
                },
                elements: {
                    point: {
                        radius: 4,
                        borderWidth: 12
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 5,
                        bottom: 0
                    }
                }
            };
        }
        var ctx = document.getElementById('monthlyprofit-1').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: profitchart('rgb(70, 128, 254)', [1, 15,  25, 15, 25, 35, 45,  20, 25, 20, 25, 30, 45, 15, 25, 35, 45, 30, 45, 15, 25], 'rgba(70, 128, 254,0.2)'),
            options: buildchartoption(),
        });
        var ctx = document.getElementById('monthlyprofit-2').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: profitchart('rgb(252, 97, 128)', [1, 15, 20, 25, 30, 45, 15, 25, 35, 45, 25, 15, 25, 35, 45,  20, 25, 30, 45, 15, 25], 'rgba(252, 97, 128,0.2)'),
            options: buildchartoption(),
        });
        var ctx = document.getElementById('monthlyprofit-3').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: profitchart('rgb(255, 182, 77)', [1, 15, 45, 15, 25, 35, 45, 20, 25, 30, 45, 15, 25, 35, 45, 20, 25, 30, 45, 15, 25], 'rgba(255, 182, 77,0.2)'),
            options: buildchartoption(),
        });
        var ctx = document.getElementById('project-over-sub-1').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: profitchart('rgb(70, 128, 254)', [1, 15,  25, 15, 25, 35, 45,  20, 25, 20, 25, 30, 45, 15, 25, 35, 45, 30, 45, 15, 25], 'rgba(70, 128, 254,0.2)'),
            options: buildchartoption(),
        });
        var ctx = document.getElementById('project-over-sub-2').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: profitchart('rgb(252, 97, 128)', [1, 15, 20, 25, 30, 45, 15, 25, 35, 45, 25, 15, 25, 35, 45,  20, 25, 30, 45, 15, 25], 'rgba(252, 97, 128,0.2)'),
            options: buildchartoption(),
        });
        var ctx = document.getElementById('project-over-sub-3').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: profitchart('rgb(255, 182, 77)', [1, 15, 45, 15, 25, 35, 45, 20, 25, 30, 45, 15, 25, 35, 45, 20, 25, 30, 45, 15, 25], 'rgba(255, 182, 77,0.2)'),
            options: buildchartoption(),
        });
        function profitchart(a, b, f) {
            if (f == null) {
                f = "rgba(0,0,0,0)";
            }
            return {
                labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22"],
                datasets: [{
                    label: "",
                    borderColor: a,
                    // lineTension:0,
                    borderWidth: 2,
                    hitRadius: 30,
                    pointHoverRadius: 4,
                    pointBorderWidth: 50,
                    pointHoverBorderWidth: 12,
                    pointBackgroundColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
                    pointBorderColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
                    pointHoverBackgroundColor: a,
                    pointHoverBorderColor: Chart.helpers.color("#000000").alpha(.1).rgbString(),
                    fill: true,
                    backgroundColor: f,
                    data: b,
                }]
            };
        }
        // REVENUE STATUS start
        var ctx = document.getElementById('revenue-status-d-graph').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: revenuechart('#4680ff', [9,5,7,8,3,2,1], '#4680ff'),
            options: buildchartoption(),
        });
        var ctx = document.getElementById('revenue-status-w-graph').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: revenuechart('#FC6180', [2,9,7,4,3,8,1], '#FC6180'),
            options: buildchartoption(),
        });
        function revenuechart(a, b, f) {
            if (f == null) {
                f = "rgba(0,0,0,0)";
            }
            return {
                labels: ["1", "2", "3", "4", "5", "6", "7"],
                datasets: [{
                    label: "",
                    borderColor: a,
                    lineTension:0,
                    borderWidth: 2,
                    hitRadius: 30,
                    pointHoverRadius: 4,
                    pointBorderWidth: 50,
                    pointHoverBorderWidth: 12,
                    pointBackgroundColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
                    pointBorderColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
                    pointHoverBackgroundColor: a,
                    pointHoverBorderColor: Chart.helpers.color("#000000").alpha(.1).rgbString(),
                    fill: true,
                    backgroundColor: f,
                    data: b,
                }]
            };
        }
        // REVENUE STATUS weekly Ends
        // stacked Transactions chart start
        var ctx = document.getElementById('new-user-daily').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
                datasets: [{
                    label: "",
                    borderColor: ['#93BE52', '#93BE52', '#93BE52', '#93BE52', '#93BE52', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC'],
                    lineTension:0,
                    borderWidth: 2,
                    hitRadius: 30,
                    pointHoverRadius: 4,
                    pointBorderWidth: 50,
                    pointHoverBorderWidth: 12,
                    pointBackgroundColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
                    pointBorderColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
                    pointHoverBackgroundColor: ['#FFB64D', '#FFB64D', '#FFB64D', '#FFB64D', '#FFB64D', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC'],
                    pointHoverBorderColor: Chart.helpers.color("#000000").alpha(.1).rgbString(),
                    fill: true,
                    backgroundColor: ['#93BE52', '#93BE52', '#93BE52', '#93BE52', '#93BE52', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC'],
                    data: [9,5,7,8,3,2,1],
                }]
            },
            options: buildchartoption(),
        });
        var ctx = document.getElementById('page-views-today').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
                datasets: [{
                    label: "",
                    borderColor: ['#FFB64D', '#FFB64D', '#FFB64D', '#FFB64D', '#FFB64D', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC'],
                    lineTension:0,
                    borderWidth: 2,
                    hitRadius: 30,
                    pointHoverRadius: 4,
                    pointBorderWidth: 50,
                    pointHoverBorderWidth: 12,
                    pointBackgroundColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
                    pointBorderColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
                    pointHoverBackgroundColor: ['#FFB64D', '#FFB64D', '#FFB64D', '#FFB64D', '#FFB64D', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC'],
                    pointHoverBorderColor: Chart.helpers.color("#000000").alpha(.1).rgbString(),
                    fill: true,
                    backgroundColor: ['#FFB64D', '#FFB64D', '#FFB64D', '#FFB64D', '#FFB64D', '#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC'],
                    data: [5,2,7,4,3,2,6,4,1],
                }]
            },
            options: buildchartoption(),
        });
        // stacked Transactions chart Ends
        var ctx = document.getElementById('stacked-transactions-graph').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {

                labels: ["5","3","4","6","3","6","3","2","3","1","2","4","5","2","4","4","3","5","2","6","5","3","5"],
                datasets: [{
                    label: "",
                    borderColor: ["#4680FE", "#FC6180", "#4680FE", "#FC6180", "#FC6180","#4680FE", "#FC6180", "#4680FE", "#FC6180", "#FC6180","#4680FE", "#FC6180", "#4680FE", "#FC6180", "#FC6180","#4680FE", "#FC6180", "#4680FE", "#FC6180", "#FC6180","#4680FE", "#FC6180", "#4680FE"],
                    lineTension:0,
                    borderWidth: 2,
                    hitRadius: 30,
                    barPercentage:0.8,
                    pointHoverRadius: 4,
                    pointBorderWidth: 50,
                    pointHoverBorderWidth: 12,
                    pointBackgroundColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
                    pointBorderColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
                    pointHoverBackgroundColor: ["#4680FE", "#FC6180", "#4680FE", "#FC6180", "#FC6180","#4680FE", "#FC6180", "#4680FE", "#FC6180", "#FC6180","#4680FE", "#FC6180", "#4680FE", "#FC6180", "#FC6180","#4680FE", "#FC6180", "#4680FE", "#FC6180", "#FC6180","#4680FE", "#FC6180", "#4680FE"],
                    pointHoverBorderColor: Chart.helpers.color("#000000").alpha(.1).rgbString(),
                    fill: true,
                    backgroundColor: ["#4680FE", "#FC6180", "#4680FE", "#FC6180", "#FC6180","#4680FE", "#FC6180", "#4680FE", "#FC6180", "#FC6180","#4680FE", "#FC6180", "#4680FE", "#FC6180", "#FC6180","#4680FE", "#FC6180", "#4680FE", "#FC6180", "#FC6180","#4680FE", "#FC6180", "#4680FE"],
                    data: [5,3,4,6,3,6,2,2.5,3,1.5,1.5,4.6,5,2.5,3.5,4,3,4.8,2.5,6,5,3,5],
                }]
            },
            options: buildchartoption(),
        });

        // tax start
        var ctx = document.getElementById('tax-deduction-graph').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: taxchart('#4680ff', [150,335,240,200,275,205,170,150], '#4680ff'),
            options: buildchartoption(),
        });
        var ctx = document.getElementById('revenue-generate-graph').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: taxchart('#FFB64D', [150,335,240,200,275,205,170,150], '#FFB64D'),
            options: buildchartoption(),
        });

        var ctx = document.getElementById('order-graph').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["1", "2"],
                datasets: [{
                    label: "",
                    borderColor: ["#ccc", "#FC6180"],
                    lineTension:0,
                    borderWidth: 2,
                    hitRadius: 30,
                    pointHoverRadius: 4,
                    pointBorderWidth: 50,
                    pointHoverBorderWidth: 12,
                    pointBackgroundColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
                    pointBorderColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
                    pointHoverBackgroundColor: ["#ccc", "#FC6180"],
                    pointHoverBorderColor: Chart.helpers.color("#000000").alpha(.1).rgbString(),
                    fill: true,
                    backgroundColor: ["#ccc", "#FC6180"],
                    data: ["5", "3"],
                }]
            },
            options: buildchartoption(),
        });
        function taxchart(a, b, f) {
            if (f == null) {
                f = "rgba(0,0,0,0)";
            }
            return {
                labels: ["1", "2", "3", "4", "5", "6", "7"],
                datasets: [{
                    label: "",
                    borderColor: a,
                    lineTension:0,
                    borderWidth: 2,
                    hitRadius: 30,
                    pointHoverRadius: 4,
                    pointBorderWidth: 50,
                    pointHoverBorderWidth: 12,
                    pointBackgroundColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
                    pointBorderColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
                    pointHoverBackgroundColor: a,
                    pointHoverBorderColor: Chart.helpers.color("#000000").alpha(.1).rgbString(),
                    fill: true,
                    backgroundColor: f,
                    data: b,
                }]
            };
        }
        // tax Ends
        // amount-spent start
        var ctx = document.getElementById('monthly-earning').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: amuntchart('#999', [1,15,18,10,30,35,40,50,40,40,58,60,100], '#999'),
            options: buildchartoption(),
        });
        // amount-spent start
        var ctx = document.getElementById('revenue-report').getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {

                labels: ["375","335","240","200","275","205","170","150","275","250","180","160","360","300"],
                datasets: [{
                    label: "",
                    borderColor: ["#93BE52", "#4680ff","#93BE52", "#4680ff","#93BE52", "#4680ff","#93BE52", "#4680ff","#93BE52", "#4680ff","#93BE52", "#4680ff","#93BE52", "#4680ff"],
                    lineTension:0,
                    borderWidth: 2,
                    hitRadius: 30,
                    barPercentage:0.8,
                    pointHoverRadius: 4,
                    pointBorderWidth: 50,
                    pointHoverBorderWidth: 12,
                    pointBackgroundColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
                    pointBorderColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
                    pointHoverBackgroundColor: ["#93BE52", "#4680ff","#93BE52", "#4680ff","#93BE52", "#4680ff","#93BE52", "#4680ff","#93BE52", "#4680ff","#93BE52", "#4680ff","#93BE52", "#4680ff"],
                    pointHoverBorderColor: Chart.helpers.color("#000000").alpha(.1).rgbString(),
                    fill: true,
                    backgroundColor: ["#93BE52", "#4680ff","#93BE52", "#4680ff","#93BE52", "#4680ff","#93BE52", "#4680ff","#93BE52", "#4680ff","#93BE52", "#4680ff","#93BE52", "#4680ff"],
                    data: [375,335,240,200,275,205,170,150,275,250,180,160,360,300],
                }]
            },
            options: buildchartoption(),
        });
        var loadingEle = $('.loading');
        $('.sadball').createWaterBall({
            cvs_config: {
                width: 100,
                height: 100
            },
            wave_config: {
                waveWidth: 0.025,
                waveHeight: 3
            },
            data_range: [30, 70, 100],
            isLoading: true,
            nowRange: 23,
            targetRange: 23
        });
        $('.happyball').createWaterBall({
            cvs_config: {
                width: 100,
                height: 100
            },
            wave_config: {
                waveWidth: 0.025,
                waveHeight: 3
            },
            data_range: [30, 70, 100],
            isLoading: true,
            nowRange: 75,
            targetRange: 75
        });
        setTimeout(function() {
            $('.sadball').createWaterBall('updateRange', 23);
            $('.happyball').createWaterBall('updateRange', 75);
        }, 1000);

        //real-time update- 1
        var chart = AmCharts.makeChart("invoice", {
            "type": "pie",
            "hideCredits": true,
            "theme": "light",
            "dataProvider": [{
                "country": "Lithuania",
                "color": '#93BE52',
                "value": 260
            }, {
                "country": "Ireland",
                "color": '#4680ff',
                "value": 201
            }, {
                "country": "Germany",
                "color": '#FC6180',
                "value": 65
            }, {
                "country": "Australia",
                "color": '#FFB64D',
                "value": 39
            }],
            "valueField": "value",
            "titleField": "country",
            "labelsEnabled": false,
            "colorField": "color",
            "innerRadius": "50%",
            "outlineAlpha": 0.9,
            "depth3D": 0,
            "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
            "angle": 0,
        });

        //world-map-vititors
        /**
         * Define SVG path for target icon
         */
        var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

        /**
         * Create the map
         */
        var map = AmCharts.makeChart("world-map-vititors", {
            "type": "map",
            "projection": "winkel3",
            "hideCredits": true,
            "theme": "light",
            "imagesSettings": {
                "rollOverColor": "#FC6180",
                "rollOverScale": 3,
                "selectedScale": 3,
                "selectedColor": "#FC6180",
                "color": "#FC6180"
            },

            "areasSettings": {
                "unlistedAreasColor": "#dfdfdf",
                "outlineThickness": 0.1
            },

            "dataProvider": {
                "map": "worldLow",
                "zoomLevel": 1,
                "zoomLongitude": 30,
                "zoomLatitude": 10,
                "images": [{
                    "svgPath": targetSVG,
                    "zoomLevel": 3,
                    "scale": 1,
                    "title": "United State",
                    "latitude": 50.6353,
                    "longitude": 120.2250
                }]
            },
            "zoomControl": {
                "panControlEnabled": false,
                "zoomControlEnabled": false,
                "homeButtonEnabled": false
            },
            "export": {
                "enabled": true
            }
        });
        var chartData = [{
            "date": "2012-01-01",
            "distance": 327,
            "townName": "New York",
            "townName2": "New York",
            "townSize": 25,
            "latitude": 40.71,
            "duration": 408
        }, {
            "date": "2012-01-02",
            "distance": 371,
            "townName": "Washington",
            "townSize": 14,
            "latitude": 38.89,
            "duration": 582
        }, {
            "date": "2012-01-03",
            "distance": 433,
            "townName": "Wilmington",
            "townSize": 6,
            "latitude": 34.22,
            "duration": 282
        }, {
            "date": "2012-01-04",
            "distance": 345,
            "townName": "Jacksonville",
            "townSize": 7,
            "latitude": 30.35,
            "duration": 379
        }, {
            "date": "2012-01-05",
            "distance": 480,
            "townName": "Miami",
            "townName2": "Miami",
            "townSize": 10,
            "latitude": 25.83,
            "duration": 501
        }, {
            "date": "2012-01-06",
            "distance": 386,
            "townName": "Tallahassee",
            "townSize": 7,
            "latitude": 30.46,
            "duration": 343
        }, {
            "date": "2012-01-07",
            "distance": 348,
            "townName": "New Orleans",
            "townSize": 10,
            "latitude": 29.94,
            "duration": 405
        }, {
            "date": "2012-01-08",
            "distance": 298,
            "townName": "Houston",
            "townName2": "Houston",
            "townSize": 16,
            "latitude": 29.76,
            "duration": 309
        }, {
            "date": "2012-01-09",
            "distance": 318,
            "townName": "Dalas",
            "townSize": 17,
            "latitude": 32.8,
            "duration": 287
        }, {
            "date": "2012-01-10",
            "distance": 349,
            "townName": "Oklahoma City",
            "townSize": 11,
            "latitude": 35.49,
            "duration": 485
        }, {
            "date": "2012-01-11",
            "distance": 603,
            "townName": "Kansas City",
            "townSize": 10,
            "latitude": 39.1,
            "duration": 390
        }, {
            "date": "2012-01-12",
            "distance": 534,
            "townName": "Denver",
            "townName2": "Denver",
            "townSize": 18,
            "latitude": 39.74,
            "duration": 450
        }, {
            "date": "2012-01-13",
            "townName": "Salt Lake City",
            "townSize": 12,
            "distance": 425,
            "duration": 270,
            "latitude": 40.75,
            "alpha": 0.4
        }, {
            "date": "2012-01-14",
            "latitude": 36.1,
            "duration": 460,
            "townName": "Las Vegas",
            "townName2": "Las Vegas",
            "bulletClass": "lastBullet"
        }];

        //easy pie chart js

        // svg path for target icon
        var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
        // svg path for plane icon
        var planeSVG = "M19.671,8.11l-2.777,2.777l-3.837-0.861c0.362-0.505,0.916-1.683,0.464-2.135c-0.518-0.517-1.979,0.278-2.305,0.604l-0.913,0.913L7.614,8.804l-2.021,2.021l2.232,1.061l-0.082,0.082l1.701,1.701l0.688-0.687l3.164,1.504L9.571,18.21H6.413l-1.137,1.138l3.6,0.948l1.83,1.83l0.947,3.598l1.137-1.137V21.43l3.725-3.725l1.504,3.164l-0.687,0.687l1.702,1.701l0.081-0.081l1.062,2.231l2.02-2.02l-0.604-2.689l0.912-0.912c0.326-0.326,1.121-1.789,0.604-2.306c-0.452-0.452-1.63,0.101-2.135,0.464l-0.861-3.838l2.777-2.777c0.947-0.947,3.599-4.862,2.62-5.839C24.533,4.512,20.618,7.163,19.671,8.11z";

        var map = AmCharts.makeChart("world-map-markers", {
            "type": "map",
            "theme": "light",
            "hideCredits": true,
            "dataProvider": {
                "map": "worldLow",
                "zoomLevel": 1,
                "zoomLongitude": 102.6353,
                "zoomLatitude": 0,
            },

            "areasSettings": {
                "unlistedAreasColor": "#fc889f",
                "unlistedAreasAlpha": 0.9
            },
            "zoomControl": {
                "panControlEnabled": false,
                "zoomControlEnabled": false,
                "homeButtonEnabled": false
            },

            "backgroundZoomsToTop": true,
            "linesAboveImages": true,


        });
        //real-time update- 1
        var chart = AmCharts.makeChart("project-overview-chart", {
            "type": "pie",
            "hideCredits": true,
            "theme": "light",
            "dataProvider": [{
                "country": "Project Processed",
                "color": '#4680ff',
                "value": 201
            }, {
                "country": "Project Returned",
                "color": '#FC6180',
                "value": 65
            }, {
                "country": "Project Sold",
                "color": '#FFB64D',
                "value": 39
            }],
            "valueField": "value",
            "titleField": "country",
            "labelsEnabled": false,
            "autoMargins": false,
            "marginTop": 0,
            "marginBottom": 0,
            "marginLeft": 0,
            "marginRight": 0,
            "pullOutRadius": 0,
            "colorField": "color",
            "outlineAlpha": 0.9,
            "depth3D": 0,
            "balloonText": "[[title]]",
            "angle": 0,
        });

    };
});



$(document).ready(function() {
    widgetChart();

    function widgetChart() {
        var gaugeChart = AmCharts.makeChart("solid-gauge", {
            "type": "gauge",
            "hideCredits": true,
            "theme": "light",
            "axes": [{
                "axisAlpha": 0,
                "tickAlpha": 0,
                "labelsEnabled": false,
                "startValue": 0,
                "endValue": 100,
                "startAngle": 0,
                "endAngle": 360,
                "bands": [{
                    "color": "#f4f4f4",
                    "startValue": 0,
                    "endValue": 100,
                    "radius": "100%",
                    "innerRadius": "97%"
                }, {
                    "color": "#4680FE",
                    "startValue": 0,
                    "endValue": 60,
                    "radius": "100%",
                    "innerRadius": "97%"
                }, {
                    "color": "#f4f4f4",
                    "startValue": 0,
                    "endValue": 100,
                    "radius": "70%",
                    "innerRadius": "67%"
                }, {
                    "color": "#FC6180",
                    "startValue": 0,
                    "endValue": 80,
                    "radius": "70%",
                    "innerRadius": "67%"
                }, {
                    "color": "#f4f4f4",
                    "startValue": 0,
                    "endValue": 100,
                    "radius": "40%",
                    "innerRadius": "37%"
                }, {
                    "color": "#FFB64D",
                    "startValue": 0,
                    "endValue": 75,
                    "radius": "40%",
                    "innerRadius": "37%"
                }]
            }],
            "export": {
                "enabled": true
            }
        });


        $(function() {
            var chart = AmCharts.makeChart("sale-prediction", {
                "theme": "light",
                "hideCredits": true,
                "type": "gauge",
                "axes": [{
                    // inner circle
                    "id": "axis2",
                    "labelsEnabled": false,
                    "axisColor": "#fec5d0",
                    // "axisColor": "#FC6180",
                    "axisThickness": 60,
                    "axisAlpha": 1,
                    "tickAlpha": 0,
                    "radius": "10%",
                    "startAngle": -150,
                    "endAngle": 360,
                    "topTextFontSize": 15,
                    "topTextColor": "#000",
                    "topTextYOffset": 80,
                    "topText": ""
                }, {
                    "topTextFontSize": 1,
                    "topTextYOffset": 0,
                    "axisColor": "#31d6ea",
                    "axisThickness": 0,
                    "endValue": 100,
                    "gridInside": false,
                    "inside": true,
                    "radius": "50%",
                    "fontSize": 0,
                    "valueInterval": 100,
                    "tickAlpha": 0,
                    "startAngle": -150,
                    "endAngle": 150,
                    "unit": "%",
                    "bandOutlineAlpha": 0,
                    "bands": [{
                        "color": "#fec5d0",
                        "endValue": 100,
                        "innerRadius": "150%",
                        "radius": "170%",
                        "gradientRatio": [0],
                        "startValue": 0
                    }, {
                        "color": "#FC6180",
                        "endValue": 0,
                        "innerRadius": "150%",
                        "radius": "170%",
                        "gradientRatio": [0],
                        "startValue": 0
                    }]
                }],
                "arrows": [{
                    "alpha": 1,
                    "color": "#FC6180",
                    "innerRadius": "250%",
                    "nailRadius": 30,
                    "nailAlpha": 1,
                    "startWidth": 20,
                    "radius": "500%"
                }]
            });

            setInterval(randomValue, 2000);

            // set random value
            function randomValue() {
                var value = Math.round(Math.random() * 100);
                chart.arrows[0].setValue(value * 1.18);
                chart.axes[0].setTopText(value + " %");
                // adjust darker band to new value
                chart.axes[1].bands[1].setEndValue(value);
            }


        });
        $(function() {
            var chart = AmCharts.makeChart("gap-target", {
                "theme": "light",
                "hideCredits": true,
                "type": "gauge",
                "axes": [{
                    "topTextFontSize": 1,
                    "topTextYOffset": 0,
                    "topTextColor": "#fff",
                    "axisColor": "#31d6ea",
                    "axisThickness": 0,
                    "endValue": 100,
                    "gridInside": false,
                    "inside": true,
                    "radius": "50%",
                    "fontSize": 0,
                    "valueInterval": 100,
                    "tickAlpha": 0,
                    "startAngle": -90,
                    "endAngle": 90,
                    "unit": "%",
                    "bandOutlineAlpha": 0,
                    "bands": [{
                        "color": "#FC6180",
                        "endValue": 100,
                        "innerRadius": "105%",
                        "radius": "170%",
                        "gradientRatio": [0],
                        "startValue": 0
                    }, {
                        "color": "#4680FE",
                        "endValue": 0,
                        "innerRadius": "105%",
                        "radius": "170%",
                        "gradientRatio": [0],
                        "startValue": 0
                    }]
                }],
                "arrows": [{
                    "alpha": 1,
                    "innerRadius": "0%",
                    "startWidth": 5,
                    "nailRadius": 0,
                    "radius": "170%"
                }]
            });

            setInterval(randomValue, 2000);

            // set random value
            function randomValue() {
                var value = Math.round(Math.random() * 100);
                chart.arrows[0].setValue(value);
                chart.axes[0].setTopText(value + " %");
                document.getElementById("g-target").innerHTML = (value);
                document.getElementById("g-gap").innerHTML = (100 - value);
                chart.axes[0].bands[1].setEndValue(value);
            }
        });
        //  reconded change chart
        $(".dial").knob({
            draw: function() {
                // "tron" case
                if (this.$.data('skin') == 'tron') {
                    this.cursorExt = 0.3;
                    var a = this.arc(this.cv),
                        pa // Previous arc
                        , r = 1;
                    this.g.lineWidth = this.lineWidth;
                    if (this.o.displayPrevious) {
                        pa = this.arc(this.v);
                        this.g.beginPath();
                        this.g.strokeStyle = this.pColor;
                        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                        this.g.stroke();
                    }
                    this.g.beginPath();
                    this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                    this.g.stroke();
                    this.g.lineWidth = 2;
                    this.g.beginPath();
                    this.g.strokeStyle = this.o.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                    this.g.stroke();
                    return false;
                }
            }
        });
    };
});

// ============================= chart.js ================================



function buildchartjs(a, b, f) {
    if (f == null) {
        f = "rgba(0,0,0,0)";
    }
    return {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
        datasets: [{
            label: "",
            borderColor: a,
            borderWidth: 2,
            hitRadius: 30,
            pointHoverRadius: 4,
            pointBorderWidth: 50,
            pointHoverBorderWidth: 12,
            pointBackgroundColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
            pointBorderColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
            pointHoverBackgroundColor: a,
            pointHoverBorderColor: Chart.helpers.color("#000000").alpha(.1).rgbString(),
            fill: true,
            backgroundColor: f,
            data: b,
        }]
    };
}

function buildchartoption() {
    return {
        title: {
            display: !1
        },
        tooltips: {
            enabled: true,
            intersect: !1,
            mode: "nearest",
            xPadding: 10,
            yPadding: 10,
            caretPadding: 10
        },
        legend: {
            display: !1,
            labels: {
                usePointStyle: !1
            }
        },
        responsive: !0,
        maintainAspectRatio: !0,
        hover: {
            mode: "index"
        },
        scales: {
            xAxes: [{
                display: !1,
                gridLines: !1,
                scaleLabel: {
                    display: !0,
                    labelString: "Month"
                }
            }],
            yAxes: [{
                display: !1,
                gridLines: !1,
                scaleLabel: {
                    display: !0,
                    labelString: "Value"
                },
                ticks: {
                    beginAtZero: !0
                }
            }]
        },
        elements: {
            point: {
                radius: 4,
                borderWidth: 12
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 5,
                bottom: 0
            }
        }
    };
}


$(document).ready(function() {

    widgetChart();

    /*Area chart*/
    function widgetChart() {

        // Email sent start
        var chart = AmCharts.makeChart("email-sent", {
            "type": "serial",
            "theme": "light",
            "hideCredits": true,
            "dataDateFormat": "YYYY-MM-DD",
            "precision": 2,
            "valueAxes": [{
                "id": "v1",
                "title": "Sales",
                "position": "left",
                "autoGridCount": false,
                "labelFunction": function(value) {
                    return Math.round(value);
                }
            }, {
                "id": "v2",
                "title": "",
                "gridAlpha": 0,
                "fontSize": 0,
                "axesAlpha": 0,
                "position": "left",
                "autoGridCount": false
            }],
            "graphs": [{
                "id": "g3",
                "valueAxis": "v1",
                "lineColor": "#4680ff",
                "fillColors": "#4680ff",
                "fillAlphas": 1,
                "type": "column",
                "title": "Actual Sales",
                "valueField": "sales2",
                "clustered": true,
                "columnWidth": 0.4,
                "legendValueText": "$[[value]]M",
                "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
            }, {
                "id": "g4",
                "valueAxis": "v1",
                "lineColor": "#FC6180",
                "fillColors": "#FC6180",
                "fillAlphas": 1,
                "type": "column",
                "title": "Target Sales",
                "valueField": "sales1",
                "clustered": true,
                "columnWidth": 0.4,
                "legendValueText": "$[[value]]M",
                "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
            }, {
                "id": "g1",
                "valueAxis": "v2",
                "bullet": "round",
                "bulletBorderAlpha": 0,
                "bulletColor": "transparent",
                "bulletSize": 0,
                "hideBulletsCount": 50,
                "lineThickness": 3,
                "dashLength": 10,
                "lineColor": "#93BE52",
                "type": "smoothedLine",
                "title": "Market Days",
                "useLineColorForBulletBorder": true,
                "valueField": "market1",
                "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
            }, {
                "id": "v3",
                "valueAxis": "v1",
                "lineColor": "#FFB64D",
                "fillColors": "#FFB64D",
                "fillAlphas": 1,
                "type": "column",
                "title": "Actual Sales",
                "valueField": "sales2",
                "clustered": true,
                "columnWidth": 0.4,
                "legendValueText": "$[[value]]M",
                "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
            }],
            "chartCursor": {
                "pan": true,
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true,
                "cursorAlpha": 0,
                "valueLineAlpha": 0.2
            },
            "categoryField": "date",
            "categoryAxis": {
                "parseDates": true,
                "dashLength": 0,
                "axisAlpha": 0,
                "GridAlpha": 0,
                "minorGridEnabled": true
            },
            "legend": {
                "useGraphSettings": true,
                "position": "top"
            },
            "balloon": {
                "borderThickness": 1,
                "shadowAlpha": 0
            },
            "export": {
                "enabled": true
            },
            "dataProvider": [{
                "date": "2013-01-16",
                "market1": 91,
                "market2": 75,
                "sales1": 5,
                "sales2": 8
            }, {
                "date": "2013-01-17",
                "market1": 74,
                "market2": 78,
                "sales1": 4,
                "sales2": 6
            }, {
                "date": "2013-01-18",
                "market1": 78,
                "market2": 88,
                "sales1": 5,
                "sales2": 2
            }, {
                "date": "2013-01-19",
                "market1": 85,
                "market2": 89,
                "sales1": 8,
                "sales2": 9
            }, {
                "date": "2013-01-20",
                "market1": 82,
                "market2": 89,
                "sales1": 9,
                "sales2": 6
            }, {
                "date": "2013-01-21",
                "market1": 83,
                "market2": 85,
                "sales1": 3,
                "sales2": 5
            }, {
                "date": "2013-01-22",
                "market1": 78,
                "market2": 92,
                "sales1": 5,
                "sales2": 7
            }]
        });
        // Email sent Ends
        var chartData = [{
            "date": "2012-01-01",
            "distance": 411,
            "townName": "Cell phone",
            "townName2": "Cell phone",
            "townSize": 25,
            "latitude": 40.71,
            "duration": 408
        }, {
            "date": "2012-01-02",
            "distance": 389,
            "townName": "Washington",
            "townSize": 14,
            "latitude": 38.89,
            "duration": 515
        }, {
            "date": "2012-01-03",
            "distance": 416,
            "townName": "Wilmington",
            "townSize": 6,
            "latitude": 34.22,
            "duration": 477
        }, {
            "date": "2012-01-04",
            "distance": 398,
            "townName": "Jacksonville",
            "townSize": 7,
            "latitude": 30.35,
            "duration": 301
        }, {
            "date": "2012-01-05",
            "distance": 520,
            "townName": "Gas",
            "townName2": "Gas",
            "townSize": 10,
            "latitude": 25.83,
            "duration": 467
        }, {
            "date": "2012-01-06",
            "distance": 301,
            "townName": "Tallahassee",
            "townSize": 7,
            "latitude": 30.46,
            "duration": 357
        }, {
            "date": "2012-01-07",
            "distance": 379,
            "townName": "New Orleans",
            "townSize": 10,
            "latitude": 29.94,
            "duration": 418
        }, {
            "date": "2012-01-08",
            "distance": 350,
            "townName": "Groceries",
            "townName2": "Groceries",
            "townSize": 16,
            "latitude": 29.76,
            "duration": 288
        }, {
            "date": "2012-01-09",
            "distance": 369,
            "townName": "Dalas",
            "townSize": 17,
            "latitude": 32.8,
            "duration": 298
        }, {
            "date": "2012-01-10",
            "distance": 378,
            "townName": "Oklahoma City",
            "townSize": 11,
            "latitude": 35.49,
            "duration": 341
        }, {
            "date": "2012-01-11",
            "distance": 289,
            "townName": "Kansas City",
            "townSize": 10,
            "latitude": 39.1,
            "duration": 450
        }, {
            "date": "2012-01-12",
            "distance": 506,
            "townName": "Health Insurance",
            "townName2": "Health Insurance",
            "townSize": 18,
            "latitude": 39.74,
            "duration": 446
        }, {
            "date": "2012-01-13",
            "townName": "Salt Lake City",
            "townSize": 12,
            "distance": 425,
            "duration": 270,
            "latitude": 40.75,
            "alpha": 0.4
        }, {
            "date": "2012-01-14",
            "latitude": 36.1,
            "distance": 402,
            "duration": 460,
            "townName": "Rent",
            "townName2": "Rent",
            "bulletClass": "lastBullet"
        }];
        var chart = AmCharts.makeChart("monthly-graph", {
            "type": "serial",
            "theme": "light",
            "hideCredits": true,
            "dataDateFormat": "YYYY-MM-DD",
            "dataProvider": chartData,
            "addClassNames": true,
            "startDuration": 1,
            //"color": "#FFFFFF",
            "marginLeft": 0,

            "categoryField": "date",
            "categoryAxis": {
                "parseDates": true,
                "minPeriod": "DD",
                "autoGridCount": false,
                "gridCount": 50,
                "gridAlpha": 0.1,
                "gridColor": "#FFFFFF",
                "axisColor": "#555555",
                "dateFormats": [{
                    "period": 'DD',
                    "format": 'DD'
                }, {
                    "period": 'WW',
                    "format": 'MMM DD'
                }, {
                    "period": 'MM',
                    "format": 'MMM'
                }, {
                    "period": 'YYYY',
                    "format": 'YYYY'
                }]
            },

            "valueAxes": [{
                "id": "a1",
                "title": "Amount EUR",
                "gridAlpha": 0,
                "axisAlpha": 0
            }, {
                "id": "a2",
                "position": "right",
                "gridAlpha": 0,
                "axisAlpha": 0,
                "labelsEnabled": false
            }, {
                "id": "a3",
                "title": "",
                "position": "left",
                "gridAlpha": 0,
                "axisAlpha": 0,
                "lineAlpha": 0,
                "fontSize": 0,
                "inside": true,
            }],
            "graphs": [{
                "id": "g1",
                "valueField": "distance",
                "title": "distance",
                "type": "column",
                "fillAlphas": 0.9,
                "cornerRadiusTop": 5,
                // "columnWidth": 0.3,
                "valueAxis": "a1",
                "balloonText": "[[value]] EUR",
                "legendValueText": "[[value]] mi",
                "legendPeriodValueText": "total: [[value.sum]] mi",
                "lineColor": "#4680ff",
                "alphaField": "alpha"
            }, {
                "id": "g2",
                "valueField": "latitude",
                "classNameField": "bulletClass",
                "title": "latitude/city",
                "type": "line",
                // "type": "smoothedLine",
                "valueAxis": "a2",
                "lineColor": "#303549",
                "lineThickness": 2,
                "dashLength": 8,
                "legendValueText": "[[value]]/[[description]]",
                "descriptionField": "townName",
                "bullet": "round",
                "bulletSizeField": "townSize",
                "bulletBorderColor": "#4680ff",
                "bulletBorderAlpha": 1,
                "bulletBorderThickness": 2,
                "bulletColor": "#B5CDFF",
                "labelText": "[[townName2]]",
                "labelPosition": "right",
                "balloonText": "amount earned:[[value]]",
                "showBalloon": true,
                "animationPlayed": true,
            }, {
                "id": "g3",
                "title": "duration",
                "valueField": "duration",
                "type": "line",
                "type": "smoothedLine",
                "valueAxis": "a3",
                "lineColor": "#FC6180",
                "balloonText": "amount spent:[[value]]",
                "lineThickness": 2,
                "legendValueText": "[[value]]",
                "bullet": "round",
                "bulletBorderColor": "#FC6180",
                "bulletBorderThickness": 1,
                "bulletBorderAlpha": 1,
                "dashLengthField": "dashLength",
                "animationPlayed": true
            }]
        });

        var chart = AmCharts.makeChart("statestics-chart", {
            "type": "serial",
            "marginTop": 0,
            "hideCredits": true,
            "marginRight": 0,
            "dataProvider": [{
                "year": "Jan",
                "value": 0.98
            }, {
                "year": "Feb",
                "value": 1.87
            }, {
                "year": "Mar",
                "value": 0.97
            }, {
                "year": "Apr",
                "value": 1.64
            }, {
                "year": "May",
                "value": 0.40
            }, {
                "year": "Jun",
                "value": 2.90
            }, {
                "year": "Jul",
                "value": 5.2
            }, {
                "year": "Aug",
                "value": 0.77
            }, {
                "year": "Sep",
                "value": 3.1
            }],
            "valueAxes": [{
                "axisAlpha": 0,
                "dashLength": 6,
                "gridAlpha": 0.1,
                "position": "left"
            }],
            "graphs": [{
                "id": "g1",
                "bullet": "round",
                "bulletSize": 9,
                "lineColor": "#4680ff",
                "lineThickness": 2,
                "negativeLineColor": "#4680ff",
                "type": "smoothedLine",
                "valueField": "value"
            }],
            "chartCursor": {
                "cursorAlpha": 0,
                "valueLineEnabled": false,
                "valueLineBalloonEnabled": true,
                "valueLineAlpha": false,
                "color": '#fff',
                "cursorColor": '#FC6180',
                "fullWidth": true
            },
            "categoryField": "year",
            "categoryAxis": {
                "gridAlpha": 0,
                "axisAlpha": 0,
                // "fillAlpha": 1,
                // "fillColor": "#FAFAFA",
                // "minorGridAlpha": 0,
                // "minorGridEnabled": true
            },
            "export": {
                "enabled": true
            }
        });

        //  reconded change chart
        $(".dial").knob({
            draw: function() {
                // "tron" case
                if (this.$.data('skin') == 'tron') {
                    this.cursorExt = 0.3;
                    var a = this.arc(this.cv) // Arc
                        ,
                        pa // Previous arc
                        , r = 1;
                    this.g.lineWidth = this.lineWidth;
                    if (this.o.displayPrevious) {
                        pa = this.arc(this.v);
                        this.g.beginPath();
                        this.g.strokeStyle = this.pColor;
                        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                        this.g.stroke();
                    }
                    this.g.beginPath();
                    this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                    this.g.stroke();
                    this.g.lineWidth = 2;
                    this.g.beginPath();
                    this.g.strokeStyle = this.o.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                    this.g.stroke();
                    return false;
                }
            }
        });
    };
});
