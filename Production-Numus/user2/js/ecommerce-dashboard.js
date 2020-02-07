'use strict';
$(document).ready(function() {


    $(document).ready(function() {
        areaChart();
    });
    /*Area chart*/
    function areaChart() {

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
        // Email sent start
        var chart = AmCharts.makeChart("email-sent", {
            "type": "serial",
            "theme": "light",
            "hideCredits": true,
            "dataDateFormat": "YYYY-MM-DD",
            "precision": 2,
            "valueAxes": [{
                "id": "v1",
                "title": "",
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
                "title": "My Income",
                "valueField": "sales2",
                "clustered": true,
                "columnWidth": 0.4,
                "legendValueText": " [[value]] €",
                "balloonText": "[[title]]<br /><b style='font-size: 130%'> [[value]] €</b>"
            }, {
                "id": "g4",
                "valueAxis": "v1",
                "lineColor": "#FC6180",
                "fillColors": "#FC6180",
                "fillAlphas": 1,
                "type": "column",
                "title": "My Expenses",
                "valueField": "sales1",
                "clustered": true,
                "columnWidth": 0.4,
                "legendValueText": " [[value]] €",
                "balloonText": "[[title]]<br /><b style='font-size: 130%'> [[value]] €</b>"
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
                "title": "Ola's Expenses",
                "useLineColorForBulletBorder": true,
                "valueField": "market1",
                "legendValueText": "[[value]]M ",
                "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
            }, {
                "id": "v3",
                "valueAxis": "v1",
                "lineColor": "#FFB64D",
                "fillColors": "#FFB64D",
                "fillAlphas": 1,
                "type": "column",
                "title": "Actual expenses",
                "valueField": "sales2",
                "clustered": true,
                "columnWidth": 0.4,
                "legendValueText": " [[value]] €",
                "balloonText": "[[title]]<br /><b style='font-size: 130%'> [[value]] €</b>"
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
                "date": "2020-01-16",
                "market1": 81,
                "market2": 79,
                "sales1": 5,
                "sales2": 8
            }, {
                "date": "2020-01-17",
                "market1": 74,
                "market2": 78,
                "sales1": 4,
                "sales2": 7
            }, {
                "date": "2020-01-18",
                "market1": 66,
                "market2": 58,
                "sales1": 3,
                "sales2": 4
            }, {
                "date": "2020-01-19",
                "market1": 74,
                "market2": 81,
                "sales1": 5,
                "sales2": 9
            }, {
                "date": "2020-01-20",
                "market1": 76,
                "market2": 72,
                "sales1": 7,
                "sales2": 4
            }, {
                "date": "2020-01-21",
                "market1": 67,
                "market2": 74,
                "sales1": 5,
                "sales2": 8
            }, {
                "date": "2020-01-22",
                "market1": 81,
                "market2": 89,
                "sales1": 5,
                "sales2": 6
            }]
        });
        // Email sent Ends

        // visitor - traffic resources
        var updatingChart1 = $("span.visitor1").peity("line", {
            fill: "rgba(70, 128, 254,0.2)",
            stroke: "rgb(70, 128, 254)"
        });
        var updatingChart2 = $("span.visitor2").peity("line", {
            fill: "rgba(252, 97, 128,0.2)",
            stroke: "rgb(252, 97, 128)"
        });
        var updatingChart3 = $("span.visitor3").peity("line", {
            fill: "rgba(147, 190, 82,0.2)",
            stroke: "rgb(147, 190, 82)"
        });
        var updatingChart4 = $("span.visitor4").peity("line", {
            fill: "rgba(255, 182, 77,0.2)",
            stroke: "rgb(255, 182, 77)"
        });
        var updatingChart5 = $("span.visitor5").peity("line", {
            fill: "rgba(254, 138, 125,0.2)",
            stroke: "rgb(254, 138, 125)"
        });

        $("span.last-week-report").peity("pie", {
            fill: ["#4680FE", "#93BE52", "#FC6180", "#FFB64D"]
        });
        $("span.last-month-report").peity("pie", {
            fill: ["#4680FE", "#93BE52", "#FC6180", "#FFB64D"]
        });

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
                "zoomLevel": 1.8,
                "zoomLongitude": 202.6353,
                "zoomLatitude": -5.2250,
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
        // Project Overview start

        //real-time update- 1
        $(function() {

            // We use an inline data source in the example, usually data would
            // be fetched from a server

            var data = [],
                totalPoints = 300;

            function getRandomData() {

                if (data.length > 0)
                    data = data.slice(1);

                // Do a random walk

                while (data.length < totalPoints) {

                    var prev = data.length > 0 ? data[data.length - 1] : 50,
                        y = prev + Math.random() * 10 - 5;

                    if (y < 0) {
                        y = 0;
                    } else if (y > 100) {
                        y = 100;
                    }
                    data.push(y);
                }

                // Zip the generated y values with the x values

                var res = [];
                for (var i = 0; i < data.length; ++i) {
                    res.push([i, data[i]])
                }

                return res;
            }

            // Set up the control widget

            var updateInterval = 30;
            $("#updateInterval").val(updateInterval).change(function() {
                var v = $(this).val();
                if (v && !isNaN(+v)) {
                    updateInterval = +v;
                    if (updateInterval < 1) {
                        updateInterval = 1;
                    } else if (updateInterval > 2000) {
                        updateInterval = 2000;
                    }
                    $(this).val("" + updateInterval);
                }
            });

            var plot = $.plot("#realtimeupdate", [getRandomData()], {
                series: {
                    shadowSize: 0, // Drawing is faster without shadows
                    color: '#FFB64D',
                },
                lines: {
                    fill: true,
                    fillColor: '#FFB64D',
                    borderWidth: 0,
                },
                grid: {
                    borderWidth: 0,
                    labelMargin: 0,
                    axisMargin: 0,
                    minBorderMargin: 0,
                },
                yaxis: {
                    min: 0,
                    max: 100,
                    show: false,
                },
                xaxis: {
                    show: false,
                }
            });

            function update() {

                plot.setData([getRandomData()]);

                // Since the axes don't change, we don't need to call plot.setupGrid()

                plot.draw();
                setTimeout(update, updateInterval);
            }

            update();

        });


    }
});
