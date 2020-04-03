sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("i18ntool.i18ntool.controller.Main", {
		onInit: function () {
			this.charConv = {
			    ę: "\\u0119",
			    ó: "\\u00F3",
			    ą: "\\u0105",
			    ś: "\\u015B",
			    ł: "\\u0142",
			    ż: "\\u017C",
			    ź: "\\u017A",
			    ć: "\\u0107",
			    ń: "\\u0144",
			    Ę: "\\u0118",
			    Ó: "\\u00D3",
			    Ą: "\\u0104",
			    Ś: "\\u015A",
			    Ł: "\\u0141",
			    Ż: "\\u017B",
			    Ź: "\\u0179",
			    Ć: "\\u0106",
			    Ń: "\\u0143"
			};
		},
		onKonwersja: function(oEvent) {
			let srcText = this.byId("src-translate");
			let dstText = this.byId("dst-translate");
			let str = this._convert(srcText.getValue());
			dstText.setValue(str);	
		},
		_convert: function(str) {
			Object.entries(this.charConv).forEach(([key, val]) => {
				str = str.replace(key, val);
			});
			
			return str;
		}
	});
});