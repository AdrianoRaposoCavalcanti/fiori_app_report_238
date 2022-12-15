sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("br.com.gestao.fioriappreport238.controller.Lista", {
            onInit: function () {

                var oConfiguration = sap.ui.getCore().getConfiguration();
                oConfiguration.setFormatLocale("pt-BR");

                // oConfiguration.setlanguage("pt-BR"); //


            },

            onSearch: function (evt) {


                //Capturando individualmente cada objeto Filter Bar
                debugger;
                var oProdutoInput = this.getView().byId("productIdInput");
                var oProdutoNomeInput = this.getView().byId("productNameInput");

                var oFilter = new Filter({
                    filters: [

                        new Filter("Productid", FilterOperator.Contains, oProdutoInput.getValue()),
                        new Filter("Name", FilterOperator.Contains, oProdutoNomeInput.getValue())

                    ],
                    and: true
                })
                //Criação do objeto Table e acesso e agregação items onde sabemos qual a entidade onde será aplicado o filtro
                var oTable = this.getView().byId("tableProdutos");
                var binding = oTable.getBinding("items");

                //É aplicado o filtro para oDatabinding
                binding.filter(oFilter);
            },
            onFilterChange: function (evt) {

            },

            onAfterVariantLoad: function (evt) {

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

            oRouting: function (oEvent) {
                //   debugger;
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
              
                oRouter.navTo("Detalhes");
            },
            onSelectedItem: function (oEvent) {
                //   debugger;


              // Acessamos um contexto de model com nome  
              //var oProdutoId = oEvent.getSource().getBindingContext("Nome do Model").getProperty("Productid"); 



              //getSource() -> Objeto Clicado. No caso aqui  ColumnListItem                    
              //getBindingContext() - É a linha da tabela(registro) que esta sendo acessada para o click
              //getProperty() Acessa a propriendade da tabela ou seja. o campo que será passado como parametro
              
              //Passo 1 - Captura do valor do produto
              var oProdutoId = oEvent.getSource().getBindingContext().getProperty("Productid");

              //Passo 2 - Captura do valor do produto
               var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
               oRouter.navTo("Detalhes",{
                productId:oProdutoId 
               });

            },
            //Nova função para enviarmos para o Git

            onFuncaoGit: function(){
                
            }



        });
    });
