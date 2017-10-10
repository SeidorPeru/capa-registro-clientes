sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/sapregistrocliente/model/models"
], function(Controller,models) {
	"use strict";

	return Controller.extend("com.sapregistrocliente.controller.App", {
		onInit: function() {
			var myModel = models.clienteModel();
			this.getView().setModel(myModel);
		},
		onValidate: function(cliente) {
			
			if (!cliente.NroDocumento) {
				sap.m.MessageToast.show("El número de documento es requerido", {
					duration: 3000
				});
				return false;
			}
			if (!cliente.Nombre) {
				sap.m.MessageToast.show("El nombre es requerido", {
					duration: 3000
				});
				return false;
			}
			if (!cliente.Apellidos) {
				sap.m.MessageToast.show("Los apellidos son requeridos", {
					duration: 3000
				});
				return false;
			}
			if (!cliente.FechaNacimiento) {
				sap.m.MessageToast.show("Fecha de nacimiento es requerida", {
					duration: 3000
				});
				return false;
			}
			if (!cliente.Correo) {
				sap.m.MessageToast.show("El correo es requerido", {
					duration: 3000
				});
				return false;
			}
			if (!cliente.Celular) {
				sap.m.MessageToast.show("El celular es requerido", {
					duration: 3000
				});
				return false;
			}

			return true;
		},
		onCreate: function(event) {
			var cliente = this.getView().getModel().getProperty("/");
			var validator = this.onValidate(cliente);
			var idGenerado = parseInt(((new Date()).getTime() / 100000).toString(), 10);
			cliente.Id = idGenerado;
			if (validator) {
				var self = this;
				this.getView().setBusy(true);
				models.modelXS().create("/Cliente", cliente, {
					success: function(data) {
						self.getView().setBusy(false);
						var myModel = models.clienteModel();
						self.getView().setModel(myModel);
						sap.m.MessageToast.show("Registro Exitoso", {
							duration: 3000
						});
					},
					error: function(err) {
						self.getView().setBusy(false);
						sap.m.MessageToast.show("Exepción del sistema", {
							duration: 3000
						});
					}
				});
			}
		}
	});
});