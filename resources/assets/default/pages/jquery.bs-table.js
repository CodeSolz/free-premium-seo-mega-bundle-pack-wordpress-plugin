function invoiceFormatter(a, b) {
    return'<a href="#" class="btn-link" > Order #' + a + "</a>"
}
function nameFormatter(a, b) {
    return'<a href="#" class="btn-link" > ' + a + "</a>"
}
function dateFormatter(a, b) {
    b.id % 2 === 0 ? "fa-star" : "fa-user";
    return'<span class="text-muted"> ' + a + "</span>"
}
function statusFormatter(a, b) {
    var c;
    "Paid" == a ? c = "success" : "Unpaid" == a ? c = "warning" : "Shipped" == a ? c = "info" : "Refunded" == a && (c = "danger");
    b.id % 2 === 0 ? "fa-star" : "fa-user";
    return'<div class="label label-table label-' + c + '"> ' + a + "</div>"
}
function priceSorter(a, b) {
    return a = +a.substring(1), b = +b.substring(1), a > b ? 1 : b > a ? -1 : 0
}
jQuery(document).ready(function ( $ ) {
    var a = $("#demo-custom-toolbar"), b = $("#btn_delete, #btn_compare, #btn_compare_date");
    a.on("check.bs.table uncheck.bs.table check-all.bs.table uncheck-all.bs.table", function () {
        b.prop("disabled", !a.bootstrapTable("getSelections").length)
    }), b.click(function () {
        var c = $.map(a.bootstrapTable("getSelections"), function (a) {
            return a.id
        });
        a.bootstrapTable("remove", {field: "id", values: c}), b.prop("disabled", !0)
    })
});