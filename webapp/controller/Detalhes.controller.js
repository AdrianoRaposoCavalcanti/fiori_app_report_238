sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/format/NumberFormat"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,
        NumberFormat) {
        "use strict";

        return Controller.extend("br.com.gestao.fioriappreport238.controller.Detalhes", {
            //Criar o meu objeto Route e acoplando a função que fará o bindingElement
            onInit: function () {

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("Detalhes").attachMatched(this.onBindingProdutoDetalhes, this);

            },

            onBindingProdutoDetalhes: function (oEvent) {
                //capiturando o parametro route detalhes (productId)
                var oProduto = oEvent.getParameter("arguments").productId;
                debugger;
                //Objeto referente a view Detalhes
                var oView = this.getView();

                var sURL = "/Produtos('" + oProduto + "')";

                oView.bindElement({
                    path: sURL,
                    parameters: { expand: 'to_cat' },
                    events: {
                        change: this.onBindingChange.bind(this),
                        dataRequested: function () {
                            debugger;
                            oView.setBusy(true);
                        },
                        dataReceived: function (data) {
                            debugger;
                            oView.setBusy(false);
                        }
                    }
                });
            },
            onBindingChange: function (oEvent) {

                debugger;
                var oView = this.getView();
                var oElementBinding = oView.getElementBinding();

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                //se não existir um elemento(registro) válido eu farei uma ação que é redirecionar para uma nova view.
                if (!oElementBinding.getBoundContext()) {

                    oRouter.getTargets().display("objNotFound");
                    return;
                }
            },

            handleEditBtnPress: function (oEvent) {

            },

            handleLink2Press: function (oEvent) {

            },

            handleLink1Press: function (oEvent) {

            },

            onNavBack: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("Lista");
                //oRouter.getTargets().display("lista");
            },
            formatDate: function (value) {

                var oConfiguration = sap.ui.getCore().getConfiguration();
                var oLocale = oConfiguration.getFormatLocale();

                var oPattern = "";

                if (oLocale === "pt-BR") {

                    oPattern = "dd/MM/yyyy";

                } else {
                    oPattern = "MM/dd/yyyy"
                }


                if (value) {

                    var year = new Date().getFullYear();

                    if (year === 999) {
                        return "";
                    } else {

                        //Criando o objeto (formato)
                        var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
                            // style: "short"
                            // pattern: "dd/MM/YYYY"
                            pattern: oPattern
                        });

                        //Aplicando o novo (formato) 
                        return oDateFormat.format(new Date(value));
                    }

                } else {
                    return value;
                }

            },


            // Apresentar o texto do status mediante a propriedade Status do model
            statusProdutos: function (value) {

                var oBundle = this.getView().getModel("i18n").getResourceBundle();

                try {
                    return oBundle.getText("status" + value);
                } catch (err) {
                    return "";
                }

            },

            // Apresentar o estado (cor) do ObectStatus mediante a propriedade Status do model
            stateProdutos: function (value) {

                try {

                    if (value === "E") {

                        return "Success"

                    } else if (value === "P") {

                        return "Warning";

                    } else if (value === "F") {
                        return "Error";
                    } else {
                        return "None";
                    }

                    return oBundle.getText("status" + value);
                } catch (err) {
                    return "";
                }


            },

            // Apresentar o icone correspondente a propriedade Status do model
            iconProdutos: function (value) {

                try {
                    if (value === "E") {
                        return "sap-icon://sys-enter-2";
                    } else if (value === "P") {
                        return "sap-icon://alert";
                    } else if (value === "F") {
                        return "sap-icon://error";
                    } else {
                        return "";
                    }
                } catch (err) {
                    return "";
                }

            },

            floatNumber: function (value) {

                var numFloat = NumberFormat.getFloatInstance({

                    maxFractionDigits: 2,
                    minFractionDigits: 2,
                    groupingEnabled: true,
                    groupingSeparator: ".",
                    decimalSeparator: ","
                })
                   return numFloat.format(value);
            }
        });
    });
