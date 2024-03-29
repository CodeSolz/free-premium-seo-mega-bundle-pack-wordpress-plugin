(function (a) {
    "use strict";
    var b = {options: {addButton: "#addToTable", table: "#datatable-editable", dialog: {wrapper: "#dialog", cancelButton: "#dialogCancel", confirmButton: "#dialogConfirm"}}, initialize: function () {
            this.setVars().build().events()
        }, setVars: function () {
            return this.$table = a(this.options.table), this.$addButton = a(this.options.addButton), this.dialog = {}, this.dialog.$wrapper = a(this.options.dialog.wrapper), this.dialog.$cancel = a(this.options.dialog.cancelButton), this.dialog.$confirm = a(this.options.dialog.confirmButton), this
        }, build: function () {
            return this.datatable = this.$table.DataTable({aoColumns: [null, null, null, {bSortable: !1}]}), window.dt = this.datatable, this
        }, events: function () {
            var b = this;
            return this.$table.on("click", "a.save-row", function (c) {
                c.preventDefault(), b.rowSave(a(this).closest("tr"))
            }).on("click", "a.cancel-row", function (c) {
                c.preventDefault(), b.rowCancel(a(this).closest("tr"))
            }).on("click", "a.edit-row", function (c) {
                c.preventDefault(), b.rowEdit(a(this).closest("tr"))
            }).on("click", "a.remove-row", function (c) {
                c.preventDefault();
                var d = a(this).closest("tr");
                a.magnificPopup.open({items: {src: b.options.dialog.wrapper, type: "inline"}, preloader: !1, modal: !0, callbacks: {change: function () {
                            b.dialog.$confirm.on("click", function (c) {
                                c.preventDefault(), b.rowRemove(d), a.magnificPopup.close()
                            })
                        }, close: function () {
                            b.dialog.$confirm.off("click")
                        }}})
            }), this.$addButton.on("click", function (a) {
                a.preventDefault(), b.rowAdd()
            }), this.dialog.$cancel.on("click", function (b) {
                b.preventDefault(), a.magnificPopup.close()
            }), this
        }, rowAdd: function () {
            this.$addButton.attr({disabled: "disabled"});
            var a, b, c;
            a = ['<a href="#" class="hidden on-editing save-row"><i class="fa fa-save"></i></a>', '<a href="#" class="hidden on-editing cancel-row"><i class="fa fa-times"></i></a>', '<a href="#" class="on-default edit-row"><i class="fa fa-pencil"></i></a>', '<a href="#" class="on-default remove-row"><i class="fa fa-trash-o"></i></a>'].join(" "), b = this.datatable.row.add(["", "", "", a]), c = this.datatable.row(b[0]).nodes().to$(), c.addClass("adding").find("td:last").addClass("actions"), this.rowEdit(c), this.datatable.order([0, "asc"]).draw()
        }, rowCancel: function (a) {
            var b, c;
            a.hasClass("adding") ? this.rowRemove(a) : (c = this.datatable.row(a.get(0)).data(), this.datatable.row(a.get(0)).data(c), b = a.find("td.actions"), b.get(0) && this.rowSetActionsDefault(a), this.datatable.draw())
        }, rowEdit: function (b) {
            var c, d = this;
            c = this.datatable.row(b.get(0)).data(), b.children("td").each(function (e) {
                var f = a(this);
                f.hasClass("actions") ? d.rowSetActionsEditing(b) : f.html('<input type="text" class="form-control input-block" value="' + c[e] + '"/>')
            })
        }, rowSave: function (b) {
            var c, d = this, e = [];
            b.hasClass("adding") && (this.$addButton.removeAttr("disabled"), b.removeClass("adding")), e = b.find("td").map(function () {
                var c = a(this);
                return c.hasClass("actions") ? (d.rowSetActionsDefault(b), d.datatable.cell(this).data()) : a.trim(c.find("input").val())
            }), this.datatable.row(b.get(0)).data(e), c = b.find("td.actions"), c.get(0) && this.rowSetActionsDefault(b), this.datatable.draw()
        }, rowRemove: function (a) {
            a.hasClass("adding") && this.$addButton.removeAttr("disabled"), this.datatable.row(a.get(0)).remove().draw()
        }, rowSetActionsEditing: function (a) {
            a.find(".on-editing").removeClass("hidden"), a.find(".on-default").addClass("hidden")
        }, rowSetActionsDefault: function (a) {
            a.find(".on-editing").addClass("hidden"), a.find(".on-default").removeClass("hidden")
        }};
    a(function () {
        b.initialize()
    })
}).apply(this, [jQuery]);