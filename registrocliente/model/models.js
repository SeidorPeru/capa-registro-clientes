sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";
	return {
		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		clienteModel: function() {
			var model = {};
			model.TipoDocumento = "DNI";
			model.NroDocumento = "";
			model.Nombre = "";
			model.Apellidos = "";
			model.FechaNacimiento = "";
			model.Direccion = "";
			model.Correo = "";
			model.Celular = "";
			model.Empresa = "";
			return new JSONModel(model);
		},
		modelXS: function() {
			var sRootPath = jQuery.sap.getModulePath("com.sapregistrocliente")+ "/";
			var oModel = new sap.ui.model.odata.ODataModel(sRootPath + "demo/Service.xsodata");
			return oModel;
		}
	};
});