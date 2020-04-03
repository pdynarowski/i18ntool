/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"i18ntool/i18ntool/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});