/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"CA2/Cross_App2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});