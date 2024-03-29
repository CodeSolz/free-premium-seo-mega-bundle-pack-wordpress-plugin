!function (a) {
    "use strict";
    var b = function () {
        this.$body = a("body"), this.$portletIdentifier = ".portlet", this.$portletCloser = '.portlet a[data-toggle="remove"]', this.$portletRefresher = '.portlet a[data-toggle="reload"]'
    };
    b.prototype.init = function () {
        var b = this;
        a(document).on("click", this.$portletCloser, function (c) {
            c.preventDefault();
            var d = a(this).closest(b.$portletIdentifier), e = d.parent();
            d.remove(), 0 == e.children().length && e.remove()
        }), a(document).on("click", this.$portletRefresher, function (c) {
            c.preventDefault();
            var d = a(this).closest(b.$portletIdentifier);
            d.append('<div class="panel-disabled"><div class="loader-1"></div></div>');
            var e = d.find(".panel-disabled");
            setTimeout(function () {
                e.fadeOut("fast", function () {
                    e.remove()
                })
            }, 500 + 300 * (5 * Math.random()))
        })
    }, a.Portlet = new b, a.Portlet.Constructor = b
}(window.jQuery), function (a) {
    "use strict";
    var b = function () {
    };
    b.prototype.notify = function (b, c, d, e) {
        var f = "fa fa-adjust";
        f = "error" == b ? "fa fa-exclamation" : "warning" == b ? "fa fa-warning" : "success" == b ? "fa fa-check" : "custom" == b ? "md md-album" : "info" == b ? "fa fa-question" : "fa fa-adjust", a.notify({title: d, text: e, image: "<i class='" + f + "'></i>"}, {style: "metro", className: b, globalPosition: c, showAnimation: "show", showDuration: 0, hideDuration: 0, autoHide: !0, clickToHide: !0})
    }, b.prototype.autoHideNotify = function (b, c, d, e) {
        var f = "fa fa-adjust";
        f = "error" == b ? "fa fa-exclamation" : "warning" == b ? "fa fa-warning" : "success" == b ? "fa fa-check" : "custom" == b ? "md md-album" : "info" == b ? "fa fa-question" : "fa fa-adjust", a.notify({title: d, text: e, image: "<i class='" + f + "'></i>"}, {style: "metro", className: b, globalPosition: c, showAnimation: "show", showDuration: 0, hideDuration: 0, autoHideDelay: 5e3, autoHide: !0, clickToHide: !0})
    }, b.prototype.confirm = function (b, c, d) {
        var e = "fa fa-adjust";
        e = "error" == b ? "fa fa-exclamation" : "warning" == b ? "fa fa-warning" : "success" == b ? "fa fa-check" : "custom" == b ? "md md-album" : "info" == b ? "fa fa-question" : "fa fa-adjust", a.notify({title: d, text: 'Are you sure you want to do nothing?<div class="clearfix"></div><br><a class="btn btn-sm btn-white yes">Yes</a> <a class="btn btn-sm btn-danger no">No</a>', image: "<i class='" + e + "'></i>"}, {style: "metro", className: b, globalPosition: c, showAnimation: "show", showDuration: 0, hideDuration: 0, autoHide: !1, clickToHide: !1}), a(document).on("click", ".notifyjs-metro-base .no", function () {
            a(this).trigger("notify-hide")
        }), a(document).on("click", ".notifyjs-metro-base .yes", function () {
            alert(a(this).text() + " clicked!"), a(this).trigger("notify-hide")
        })
    }, b.prototype.init = function () {
    }, a.Notification = new b, a.Notification.Constructor = b
}(window.jQuery), function (a) {
    "use strict";
    var b = function () {
    };
    b.prototype.initTooltipPlugin = function () {
        a.fn.tooltip && a('[data-toggle="tooltip"]').tooltip()
    }, b.prototype.initPopoverPlugin = function () {
        a.fn.popover && a('[data-toggle="popover"]').popover()
    }, b.prototype.initCustomModalPlugin = function () {
        a('[data-plugin="custommodal"]').on("click", function (b) {
            Custombox.open({target: a(this).attr("href"), effect: a(this).attr("data-animation"), overlaySpeed: a(this).attr("data-overlaySpeed"), overlayColor: a(this).attr("data-overlayColor")}), b.preventDefault()
        })
    }, b.prototype.initNiceScrollPlugin = function () {
        a.fn.niceScroll && a(".nicescroll").niceScroll({cursorcolor: "#98a6ad", cursorwidth: "6px", cursorborderradius: "5px"})
    }, b.prototype.initRangeSlider = function () {
        a.fn.slider && a('[data-plugin="range-slider"]').slider({})
    }, b.prototype.initSwitchery = function () {
        a('[data-plugin="switchery"]').each(function (b, c) {
            new Switchery(a(this)[0], a(this).data())
        })
    }, b.prototype.initMultiSelect = function () {
        a('[data-plugin="multiselect"]').length > 0 && a('[data-plugin="multiselect"]').multiSelect(a(this).data())
    }, b.prototype.initPeityCharts = function () {
        a('[data-plugin="peity-pie"]').each(function (b, c) {
            var d = a(this).attr("data-colors") ? a(this).attr("data-colors").split(",") : [], e = a(this).attr("data-width") ? a(this).attr("data-width") : 20, f = a(this).attr("data-height") ? a(this).attr("data-height") : 20;
            a(this).peity("pie", {fill: d, width: e, height: f})
        }), a('[data-plugin="peity-donut"]').each(function (b, c) {
            var d = a(this).attr("data-colors") ? a(this).attr("data-colors").split(",") : [], e = a(this).attr("data-width") ? a(this).attr("data-width") : 20, f = a(this).attr("data-height") ? a(this).attr("data-height") : 20;
            a(this).peity("donut", {fill: d, width: e, height: f})
        }), a('[data-plugin="peity-donut-alt"]').each(function (b, c) {
            a(this).peity("donut")
        }), a('[data-plugin="peity-line"]').each(function (b, c) {
            a(this).peity("line", a(this).data())
        }), a('[data-plugin="peity-bar"]').each(function (b, c) {
            var d = a(this).attr("data-colors") ? a(this).attr("data-colors").split(",") : [], e = a(this).attr("data-width") ? a(this).attr("data-width") : 20, f = a(this).attr("data-height") ? a(this).attr("data-height") : 20;
            a(this).peity("bar", {fill: d, width: e, height: f})
        })
    }, b.prototype.init = function () {
        this.initTooltipPlugin(), this.initPopoverPlugin(), this.initNiceScrollPlugin(), this.initCustomModalPlugin(), this.initRangeSlider(), this.initSwitchery(), this.initMultiSelect(), this.initPeityCharts(), a.Portlet.init()
    }, a.Components = new b, a.Components.Constructor = b
}(window.jQuery), function (a) {
    "use strict";
    a.Components.init()
}(window.jQuery);