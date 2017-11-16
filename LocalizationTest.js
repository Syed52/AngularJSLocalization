var app = angular.module('localization.demo', []);
app.controller('LocalizationController', function ($scope) {

    // Set Languages Content
    $scope.DeutchContent = "Hallo";
    $scope.EnglishContent = "Chalo";
    $scope.ArabicContent = "سمخ";
    $scope.CurrentLanguageData = '';


    
    $scope.language = "Na";

    $scope.localizedContent = {        
        name: '{"De":"'+$scope.DeutchContent+'","En":"'+$scope.EnglishContent+'","Ar":"'+$scope.ArabicContent+'"}'
    };

    $scope.LanguageChanged = function (data) {
        if (data== "En")
        {
            $scope.CurrentLanguageData = $scope.EnglishContent;
        }
        if (data == "De") {

            $scope.CurrentLanguageData = $scope.DeutchContent;
        }
        if (data == "Ar") {
            $scope.CurrentLanguageData = $scope.ArabicContent;
        }        
    };

    $scope.DemoModelChanged = function (language, $event) {

        var CurrentLanguage = language;

        if (CurrentLanguage != "Na") {

            if (CurrentLanguage == "En") {

                $scope.EnglishContent = $scope.EnglishContent + $event.key;
                $scope.CurrentLanguageData = $scope.EnglishContent;
            }
            if (CurrentLanguage == "De") {

                $scope.DeutchContent = $scope.DeutchContent + $event.key;
                $scope.CurrentLanguageData = $scope.DeutchContent;
            }
            if (CurrentLanguage == "Ar") {
                $scope.ArabicContent = $scope.ArabicContent + $event.key;
                $scope.CurrentLanguageData = $scope.ArabicContent;
            }
        }
    };

    $scope.OutputChanged = function (CurrentLanguage, $event) {

        if (CurrentLanguage != "Na") {

            if (CurrentLanguage == "En") {
             
                $scope.EnglishContent = $scope.EnglishContent + $event.key;    
                $scope.localizedContent = {
                    name: '{"De":"' + $scope.DeutchContent + '","En":"' + $scope.EnglishContent + '","Ar":"' + $scope.ArabicContent + '"}'
                };
            }
            if (CurrentLanguage == "De") {

                $scope.DeutchContent = $scope.DeutchContent + $event.key;
                $scope.localizedContent = {
                    name: '{"De":"' + $scope.DeutchContent + '","En":"' + $scope.EnglishContent + '","Ar":"' + $scope.ArabicContent + '"}'
                };

            }
            if (CurrentLanguage == "Ar") {
                $scope.ArabicContent = $scope.ArabicContent + $event.key;
                $scope.localizedContent = {
                    name: '{"De":"' + $scope.DeutchContent + '","En":"' + $scope.EnglishContent + '","Ar":"' + $scope.ArabicContent + '"}'
                };

            }
        }
    };


});

// Creating a Directive For using it on HTML page an
app.directive('model', function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attr) {
            elem.bind('keypress', function (language, $event) {                
            });
        }
    }
});
