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

        return Controller.extend("br.com.gestao.fioriappreport238.controller.Objetos", {
            onInit: function () {

            },

            onClicaSet: function (evt) {

                debugger;
                var objtitle = this.getView().byId("headertitle");
                objtitle.setText("Novo Titulo do Header")

            },

            onClicaGet: function (evt) {
                debugger;
                var objtitle = this.getView().byId("headertitle");
                var sValorText = objtitle.getText()

            },

            addFormulario: function (evt) {
                debugger;
                //Estamos criando uma referencia do objeto panel
                var objPanel = this.getView().byId("panel_formulario");
                //Chama o metodo destroyContent para eliminar todo o conteudo do Panel
                objPanel.destroyContent();

                //Criar os objetos do Formulario
                var objItensFormulario = [];
                objItensFormulario.push(new Label("lblPergunta1", {
                    text: "Perguta 1",
                    required: true
                }));

                objItensFormulario.push(new Input("inputPergunta1", {
                    value: "Valor da Pergunda 1",
                    required: true
                }));

                objItensFormulario.push(new Label("lblPergunta2", {
                    text: "Perguta 2",
                    required: false
                }));

                objItensFormulario.push(new TextArea("txtArea", {
                    value: "Valor da Pergunda 2",
                    rows: 7
                }));

                //Criar um Simple Form
                var oForm = new SimpleForm("simpleForm", {
                    content: objItensFormulario
                });

                //Adicionar o formulario dentro panel

                objPanel.addContent(oForm);

            }



        });
    });
