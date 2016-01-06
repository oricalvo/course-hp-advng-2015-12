(function () {

    angular.module("MyApp").directive("grid", function ($compile) {

        return {
            restrict: "E",
            terminal: true,
            compile: function (element, attrs) {
                var columns = [];
                var modelName;

                function compile(element, attrs) {
                    modelName = attrs.modelName;

                    element.find("column").each(function () {
                        var column = $(this);

                        var template = column.find("template").html();
                        var field = column.find("field").text();
                        var title = column.find("title").text();

                        var templateFn = null;
                        if (template) {
                            templateFn = $compile(template);
                        }

                        columns.push({
                            field: field,
                            title: title,
                            templateFn: templateFn,
                        });
                    });

                    element.empty();

                    var table = $("<table><thead></thead><tbody></tbody></table>");
                    var thead = table.find("thead");

                    columns.forEach(function (column) {
                        var td = $("<td />");
                        td.text(column.title);
                        thead.append(td);
                    });

                    element.append(table);
                }

                function render(scope, element, models) {
                    var tbody = element.find("tbody");

                    tbody.empty();

                    if (!models) {
                        return;
                    }

                    models.forEach(function (model) {
                        var tr = $("<tr />");

                        columns.forEach(function (column) {
                            var td = $("<td />");
                            tr.append(td);

                            if (column.field) {
                                td.text(model[column.field]);
                            }
                            else if (column.templateFn) {
                                var rowScope = scope.$parent.$new();
                                rowScope[modelName] = model;
                                var element = column.templateFn(rowScope, function (clone) { });
                                td.append(element);
                            }
                        });

                        tbody.append(tr);
                    });
                }

                compile(element, attrs);

                return function postLink(scope, element) {
                    scope.$watch("models", function (model) {
                        render(scope, element, model);
                    });
                }
            },
            scope: {
                models: "=",
            }
        };
    });

})();
