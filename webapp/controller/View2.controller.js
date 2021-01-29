sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("CA2.Cross_App2.controller.View2", {
		onInit: function () {
              var startupParams = this.getOwnerComponent().getComponentData().startupParameters; // get Startup params from Owner Component
              this.getView().byId("input").setValue(startupParams.name[0]);
             
              sap.m.MessageToast.show(startupParams.name[0]);
              
		}
	});
});