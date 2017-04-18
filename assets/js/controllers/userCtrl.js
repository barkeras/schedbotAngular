'use strict';
/** 
  * controller for User Profile Example
*/
app.controller('UserCtrl', ["$scope", "flowFactory", function ($scope, flowFactory) {
    $scope.removeImage = function () {
        $scope.noImage = true;
    };
    $scope.obj = new Flow();

    $scope.userInfo = {
        firstName: 'Andrew',
        lastName: 'Barker',
        url: 'www.example.com',
        email: 'Andrew@example.com',
        phone: '(641)-734-4763',
        gender: 'male',
        zipCode: '12345',
        city: 'London (UK)',
        avatar: 'assets/images/andrewavatar.jpg',
        twitter: '',
        github: '',
        facebook: '',
        linkedin: '',
        google: '',
        skype: 'AndrewBarker82'
    };
    if ($scope.userInfo.avatar == '') {
        $scope.noImage = true;
    }
}]);