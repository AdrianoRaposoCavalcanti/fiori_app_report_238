sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/TextArea",
    "sap/m/Label",
    "sap/m/Input",
    "sap/ui/layout/form/SimpleForm",
    "sap/m/MessageBox",
    "sap/m/MessageToast"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,
        TextArea,
        Label,
        Input,
        SimpleForm,
        MessageBox,
        MessageToast) {
        "use strict";

        return Controller.extend("br.com.gestao.fioriappreport238.controller.i18n", {
            onInit: function () {

               // debugger;
                //this.trocaIdioma();

                //Colocar na URL
                //sap-language=pt_BR
                //sap-language=de
                //sap-language=fr

            },

            enviaCadastro: function (evt) {

                // msgConfirmacao 
                debugger;
                var oResourceBandle = this.getView().getModel("i18n").getResourceBundle();
                var Cliente = this.getView().byId("cliente").getValue();
                //  var Endereco = this.getView().byId("Endereco").getValue();
                var Cidade = this.getView().byId("cidade").getValue();
                var Estado = this.getView().byId("estado").getValue();

                var sMensagem = oResourceBandle.getText("msgConfirmacao", [Cliente, Cidade, Estado]);

                MessageBox.confirm(sMensagem);

            },

            trocaIdioma: function () {

                var i18nModel = new sap.ui.model.resource.ResourceModel({
                    bundleUrl: "i18n/i18n.properties",
                    bundleLocale: "de",
                    bundleName: "br.com.gestao.fioriappreport238.i18n.i18n_de"


                })

                this.getView().setModel(i18nModel, "i18n");

            }



        });
    });
