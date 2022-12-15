sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/TextArea",
    "sap/m/Label",
    "sap/m/Input",
    "sap/ui/layout/form/SimpleForm"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,
        TextArea,
        Label,
        Input,
        SimpleForm) {
        "use strict";

        return Controller.extend("br.com.gestao.fioriappreport238.controller.DataBinding", {
            onInit: function () {

                var objModelJSON = new sap.ui.model.json.JSONModel();
                objModelJSON.loadData("dados/Produtos.json")
                this.getView().setModel(objModelJSON, "Model_JSON_Produtos");

            },

            getRegion: function (evt) {
                var objRegionModel = new sap.ui.model.json.JSONModel();
                objRegionModel.loadData("dados/Regions.json");
                this.getView().setModel(objRegionModel, "Model_JSON_Regions");

                var objFormulario = this.getView().byId("form_regions");
                objFormulario.bindElement("Model_JSON_Regions>/regions/1");

            }




        });
    });
