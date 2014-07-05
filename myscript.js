var mainCtrl = function($scope) {
    $scope.users = [
        {"name":"taguchi", "score":52.22},
        {"name":"tanaka", "score":38.22},
        {"name":"yamada", "score":11.11},
        {"name":"sakamoto", "score":66.66},
        {"name":"kataoka", "score":88.88},
        {"name":"chono", "score":77.77},
        {"name":"murata", "score":25.25},
        {"name":"abe", "score":10.10},
    ];
    $scope.today = new Date();

}
