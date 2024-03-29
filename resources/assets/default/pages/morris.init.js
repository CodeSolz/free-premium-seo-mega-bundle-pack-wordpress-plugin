!function (a) {
    "use strict";
    var b = function () {
    };
    b.prototype.createLineChart = function (a, b, c, d, e, f, g, h, i) {
        Morris.Line({element: a, data: b, xkey: c, ykeys: d, labels: e, fillOpacity: f, pointFillColors: g, pointStrokeColors: h, behaveLikeLine: !0, gridLineColor: "#eef0f2", hideHover: "auto", resize: !0, lineColors: i})
    }, b.prototype.createAreaChart = function (a, b, c, d, e, f, g, h) {
        Morris.Area({element: a, pointSize: 0, lineWidth: 0, data: d, xkey: e, ykeys: f, labels: g, hideHover: "auto", resize: !0, gridLineColor: "#eef0f2", lineColors: h})
    }, b.prototype.createAreaChartDotted = function (a, b, c, d, e, f, g, h, i, j) {
        Morris.Area({element: a, pointSize: 3, lineWidth: 1, data: d, xkey: e, ykeys: f, labels: g, hideHover: "auto", pointFillColors: h, pointStrokeColors: i, resize: !0, gridLineColor: "#eef0f2", lineColors: j})
    }, b.prototype.createBarChart = function (a, b, c, d, e, f) {
        Morris.Bar({element: a, data: b, xkey: c, ykeys: d, labels: e, hideHover: "auto", resize: !0, gridLineColor: "#eeeeee", barColors: f})
    }, b.prototype.createStackedChart = function (a, b, c, d, e, f) {
        Morris.Bar({element: a, data: b, xkey: c, ykeys: d, stacked: !0, labels: e, hideHover: "auto", resize: !0, gridLineColor: "#eeeeee", barColors: f})
    }, b.prototype.createDonutChart = function (a, b, c) {
        Morris.Donut({element: a, data: b, resize: !0, colors: c})
    }, b.prototype.init = function () {
//        var a = [{y: "2010", a: 30, b: 20, c: 10}, {y: "2011", a: 50, b: 40, c: 30}, {y: "2012", a: 75, b: 65, c: 50}, {y: "2013", a: 50, b: 40, c: 22}, {y: "2014", a: 75, b: 65, c: 50}, {y: "2015", a: 100, b: 90, c: 65}];
//        this.createLineChart("morris-line-example", a, "y", ["a", "b", "c"], ["Series A", "Series B", "Series C"], ["0.1"], ["#ffffff"], ["#999999"], ["#36404a", "#5fbeaa", "#5d9cec"]);
//        var b = [{y: "2009", a: 10, b: 20, c: 30}, {y: "2010", a: 75, b: 65, c: 30}, {y: "2011", a: 50, b: 40, c: 30}, {y: "2012", a: 75, b: 65, c: 30}, {y: "2013", a: 50, b: 40, c: 30}, {y: "2014", a: 75, b: 65, c: 30}, {y: "2015", a: 90, b: 60, c: 30}];
//        this.createAreaChart("morris-area-example", 0, 0, b, "y", ["a", "b", "c"], ["Series A", "Series B", "Series C"], ["#5fbeaa", "#5d9cec", "#bbbbbb"]);
//        var c = [{y: "2009", a: 10, b: 20}, {y: "2010", a: 75, b: 65}, {y: "2011", a: 50, b: 40}, {y: "2012", a: 75, b: 65}, {y: "2013", a: 50, b: 40}, {y: "2014", a: 75, b: 65}, {y: "2015", a: 90, b: 60}];
//        this.createAreaChartDotted("morris-area-with-dotted", 0, 0, c, "y", ["a", "b"], ["Series A", "Series B"], ["#ffffff"], ["#999999"], ["#36404a", "#5d9cec"]);
//        var d = [{y: "2009", a: 100, b: 90, c: 40}, {y: "2010", a: 75, b: 65, c: 20}, {y: "2011", a: 50, b: 40, c: 50}, {y: "2012", a: 75, b: 65, c: 95}, {y: "2013", a: 50, b: 40, c: 22}, {y: "2014", a: 75, b: 65, c: 56}, {y: "2015", a: 100, b: 90, c: 60}];
//        this.createBarChart("morris-bar-example", d, "y", ["a", "b", "c"], ["Series A", "Series B", "Series C"], ["#5fbeaa", "#5d9cec", "#ebeff2"]);
//        var e = [{y: "2005", a: 45, b: 180}, {y: "2006", a: 75, b: 65}, {y: "2007", a: 100, b: 90}, {y: "2008", a: 75, b: 65}, {y: "2009", a: 100, b: 90}, {y: "2010", a: 75, b: 65}, {y: "2011", a: 50, b: 40}, {y: "2012", a: 75, b: 65}, {y: "2013", a: 50, b: 40}, {y: "2014", a: 75, b: 65}, {y: "2015", a: 100, b: 90}];
//        this.createStackedChart("morris-bar-stacked", e, "y", ["a", "b"], ["Series A", "Series B"], ["#5d9cec", "#ebeff2"]);
        var f = [{label: "Download Sales", value: 12}, {label: "In-Store Sales", value: 30}, {label: "Mail-Order Sales", value: 20}];
        this.createDonutChart("morris-donut-chart", $donutData, $donutColor),
        this.createDonutChart("morris-donut-chart-1", $donutData1, $donutColor1)
    }, a.MorrisCharts = new b, a.MorrisCharts.Constructor = b
}(window.jQuery), function (a) {
    "use strict";
    a.MorrisCharts.init()
}(window.jQuery);