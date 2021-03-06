define(['app', 'directive/navMenu','prettify'], function (app) {
    app.register.controller('HomeController', ['$scope', '$window', function ($scope, $window) {
        $scope.title = "angularAMD";
        $scope.openGitHubPage = function () {
            //console.log("trackEvent: ViewGitHub");
            $window._gaq.push(['_trackEvent', 'angularAMD', 'ViewGitHub', 'Clicked on View on GitHub button']);
            $window.open("https://github.com/marcoslin/angularAMD", "_blank");
        };
    }]);
}); 
